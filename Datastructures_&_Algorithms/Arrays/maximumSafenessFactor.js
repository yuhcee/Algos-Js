/**
 * **2812. Find the Safest Path in a Grid**
 *
 * You are given a **0-indexed** 2D matrix `grid` of size `n x n`, where `(r, c)
 * ` represents:
 *
 * - A cell containing a thief if `grid[r][c] = 1`
 * - An empty cell if `grid[r][c] = 0`
 *
 * You are initially positioned at cell `(0, 0)`. In one move, you can move to
 * any adjacent cell in the grid, including cells containing thieves.
 *
 * The **safeness factor** of a path on the grid is defined as the **minimum**
 * manhattan distance from any cell in the path to any thief in the grid.
 *
 * Return *the **maximum safeness** factor of all paths leading to cell `(n - 1,
 * n - 1)`*.
 *
 * An **adjacent** cell of cell `(r, c)`, is one of the cells `(r, c + 1)`, `(r,
 * c - 1)`, `(r + 1, c)` and `(r - 1, c)` if it exists.
 *
 * The **Manhattan distance** between two cells `(a, b)` and `(x, y)` is equal
 * to `|a - x| + |b - y|`, where `|val|` denotes the absolute value of val.
 *
 * **Constraints:**
 *
 * - `1 <= grid.length == n <= 400`
 * - `grid[i].length == n`
 * - `grid[i][j]` is either `0` or `1`.
 * - There is at least one thief in the `grid`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maximumSafenessFactor = function (grid) {
    const n = grid.length;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // Step 1: Calculate the minimum distance from each cell to any thief
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const queue = [];

    // Initialize queue with all thief positions
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    // BFS to calculate distances
    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr,
                nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Step 2: Binary search for the maximum safeness factor
    let low = 0,
        high = n + n;
    const canReach = (minDist) => {
        if (dist[0][0] < minDist) return false;
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const dfs = (r, c) => {
            if (r === n - 1 && c === n - 1) return true;
            visited[r][c] = true;
            for (const [dr, dc] of directions) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc] && dist[nr][nc] >= minDist) {
                    if (dfs(nr, nc)) return true;
                }
            }
            return false;
        };
        return dfs(0, 0);
    };

    while (low < high) {
        const mid = Math.floor((low + high + 1) / 2);
        if (canReach(mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }

    return low;
};
