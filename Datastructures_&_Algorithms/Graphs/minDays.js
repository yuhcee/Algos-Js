/**
 * **1568. Minimum Number of Days to Disconnect Island**
 *
 * You are given an `m x n` binary grid `grid` where `1` represents land and
 * `0` represents water. An **island** is a maximal **4-directionally**
 * (horizontal or vertical) connected group of 1's.
 *
 * The grid is said to be **connected** if we have **exactly one island**,
 * otherwise is said **disconnected**.
 *
 * In one day, we are allowed to change **any** single land cell (1) into a
 * water cell (0).
 *
 * Return *the minimum number of days to disconnect the grid*.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 30`
 * - `grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minDays = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    // Function to check if a cell is within bounds
    const inBounds = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;

    // BFS to explore the island and mark visited cells
    const bfs = (startR, startC) => {
        let queue = [[startR, startC]];
        grid[startR][startC] = 0; // Mark the cell as visited

        while (queue.length > 0) {
            const [r, c] = queue.shift();
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (inBounds(nr, nc) && grid[nr][nc] === 1) {
                    grid[nr][nc] = 0; // Mark visited
                    queue.push([nr, nc]);
                }
            }
        }
    };

    // Function to count islands using BFS
    const countIslands = () => {
        let islandCount = 0;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    islandCount++;
                    bfs(r, c);
                }
            }
        }
        return islandCount;
    };

    // Restore grid to original state after BFS operation
    const restoreGrid = (originalGrid) => {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                grid[r][c] = originalGrid[r][c];
            }
        }
    };

    // Step 1: Check initial number of islands
    const originalGrid = grid.map((row) => row.slice());
    if (countIslands() !== 1) return 0;
    restoreGrid(originalGrid);

    // Step 2: Check if removing any single cell disconnects the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                grid[r][c] = 0;
                if (countIslands() !== 1) return 1;
                grid[r][c] = 1;
                restoreGrid(originalGrid);
            }
        }
    }

    // Step 3: If not disconnected with one cell, return 2
    return 2;
};

const grid = [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
];

// Output: 2
/* Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island. */
console.log(minDays(grid));

const grid1 = [[1, 1]];
// Output: 2
// Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.
console.log(minDays(grid1));

