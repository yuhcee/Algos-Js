/**
 * **827. Making A Large Island**
 *
 * You are given an `n x n` binary matrix `grid`. You are allowed to change
 * at most one `0` to be `1`.
 *
 * Return *the size of the largest **island** in `grid` after applying this
 * operation*.
 *
 * An **island** is a 4-directionally connected group of `1`s.
 *
 * **Constraints:**
 *
 * - `n == grid.length`
 * - `n == grid[i].length`
 * - `1 <= n <= 500`
 * - `grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
    let n = grid.length;
    let islandMap = new Map(); // {islandID: size}
    let islandId = 2; // Start IDs from 2 (0 & 1 already exist)
    let directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // DFS function to mark an island and count its size
    const dfs = (i, j, id) => {
        if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = id;
        let size = 1;
        for (let [dx, dy] of directions) {
            size += dfs(i + dx, j + dy, id);
        }
        return size;
    };

    // Step 1: Label islands and record their sizes
    let maxIsland = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let size = dfs(i, j, islandId);
                islandMap.set(islandId, size);
                maxIsland = Math.max(maxIsland, size);
                islandId++;
            }
        }
    }

    // Step 2: Try flipping each 0 and calculate max island size
    let result = maxIsland;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let uniqueIslands = new Set();
                for (let [dx, dy] of directions) {
                    let x = i + dx,
                        y = j + dy;
                    if (x >= 0 && y >= 0 && x < n && y < n && grid[x][y] > 1) {
                        uniqueIslands.add(grid[x][y]);
                    }
                }
                let newSize = 1; // Flip this 0 to 1
                for (let id of uniqueIslands) {
                    newSize += islandMap.get(id);
                }
                result = Math.max(result, newSize);
            }
        }
    }

    return result;
};

const grid = [
    [1, 0],
    [0, 1],
];
// Output: 3
// Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
console.log(largestIsland(grid));
