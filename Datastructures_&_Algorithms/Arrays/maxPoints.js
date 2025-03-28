/**
 * **2503. Maximum Number of Points From Grid Queries**
 *
 * You are given an `m x n` integer matrix `grid` and an array `queries` of size `k`.
 *
 * Find an array `answer` of size `k` such that for each integer `queries[i]` you start in the top left cell of the
 * matrix and repeat the following process:
 *
 * - If `queries[i]` is **strictly** greater than the value of the current cell that you are in, then you get one point
 * if it is your first time visiting this cell, and you can move to any **adjacent** cell in all `4` directions: up,
 * down, left, and right.
 *
 * - Otherwise, you do not get any points, and you end this process.
 *
 * After the process, `answer[i]` is the **maximum** number of points you can get. **Note** that for each query you are
 * allowed to visit the same cell **multiple** times.
 *
 * Return the resulting array answer.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `2 <= m, n <= 1000`
 * - `4 <= m * n <= 105`
 * - `k == queries.length`
 * - `1 <= k <= 104`
 * - `1 <= grid[i][j], queries[i] <= 106`
 *
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */
const maxPoints = function (grid, queries) {
    const m = grid.length,
        n = grid[0].length;
    const totalCells = m * n;

    // Helper to convert 2D coordinate to 1D index.
    const getIndex = (r, c) => r * n + c;

    // Flatten grid: each cell: { val, r, c }
    const cells = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            cells.push({ val: grid[r][c], r, c });
        }
    }
    cells.sort((a, b) => a.val - b.val);

    // DSU data structure
    const parent = new Array(totalCells);
    const size = new Array(totalCells);
    for (let i = 0; i < totalCells; i++) {
        parent[i] = i;
        size[i] = 1;
    }

    const find = (x) => {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    };

    const union = (x, y) => {
        let rootX = find(x),
            rootY = find(y);
        if (rootX === rootY) return;
        if (size[rootX] < size[rootY]) {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        } else {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
    };

    // Prepare queries sorted by threshold. Each query: { q, idx }
    const sortedQueries = queries.map((q, idx) => ({ q, idx }));
    sortedQueries.sort((a, b) => a.q - b.q);

    const res = new Array(queries.length).fill(0);
    // activated[i] indicates if cell with 1D index i is activated.
    const activated = new Array(totalCells).fill(false);

    let cellPtr = 0;
    // Process queries in increasing order of threshold
    for (const { q: T, idx } of sortedQueries) {
        // Activate all cells with value < T
        while (cellPtr < cells.length && cells[cellPtr].val < T) {
            const { r, c } = cells[cellPtr];
            const idxCell = getIndex(r, c);
            activated[idxCell] = true;
            // Union with neighbors that are activated
            const directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (const [dr, dc] of directions) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                    const nIdx = getIndex(nr, nc);
                    if (activated[nIdx]) {
                        union(idxCell, nIdx);
                    }
                }
            }
            cellPtr++;
        }
        // After activation, if the starting cell (0,0) is activated,
        // the number of points for query T is the size of its component.
        const startIdx = getIndex(0, 0);
        if (activated[startIdx]) {
            res[idx] = size[find(startIdx)];
        } else {
            res[idx] = 0;
        }
    }

    return res;
};

const grid = [
        [1, 2, 3],
        [2, 5, 7],
        [3, 5, 1],
    ],
    queries = [5, 6, 2];
// Output: [5,8,1]
// Explanation: The diagrams above show which cells we visit to get points for each query.
console.log(maxPoints(grid, queries)); // [5, 8, 1]
