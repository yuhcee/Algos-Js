/**
 * **2658. Maximum Number of Fish in a Grid**
 *
 * You are given a **0-indexed** 2D matrix grid of size m x n, where (r, c)
 * represents:
 *
 * - A **land** cell if `grid[r][c] = 0`, or
 * - A **water** cell containing `grid[r][c]` fish, if `grid[r][c] > 0`.
 *
 * A fisher can start at any **water** cell `(r, c)` and can do the
 * following operations any number of times:
 *
 * - Catch all the fish at cell `(r, c)`, or
 * - Move to any adjacent **water** cell.
 *
 * Return *the **maximum** number of fish the fisher can catch if he
 * chooses his starting cell optimally, or `0` if no water cell exists*.
 *
 * An **adjacent** cell of the cell `(r, c)`, is one of the cells `(r, c +
 * 1)`, `(r, c - 1)`, `(r + 1, c)` or `(r - 1, c)` if it exists.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 10`
 * - `0 <= grid[i][j] <= 10`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const findMaxFish = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxFish = 0;

    // Directions for adjacent cells
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // Helper function for DFS
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0) return 0;

        let fishCount = grid[i][j];
        grid[i][j] = 0; // Mark as visited to avoid counting twice

        for (let [di, dj] of directions) {
            let newI = i + di;
            let newJ = j + dj;
            fishCount += dfs(newI, newJ);
        }

        return fishCount;
    }

    // Traverse grid to find maximum fish catch from any starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                maxFish = Math.max(maxFish, dfs(i, j));
            }
        }
    }

    return maxFish;
};

const grid = [
    [0, 2, 1, 0],
    [4, 0, 0, 3],
    [1, 0, 0, 4],
    [0, 3, 2, 0],
];
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and collect 4 fish.
console.log(findMaxFish(grid));

const grid1 = [
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 1],
];
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.
console.log(findMaxFish(grid1));
