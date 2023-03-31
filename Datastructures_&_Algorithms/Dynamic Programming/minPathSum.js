/**
 * **64. Minimum Path Sum**
 *
 * Given a `m x n` `grid` filled with non-negative numbers, find a path from top left
 * to bottom right, which minimizes the sum of all numbers along its path.
 *
 * **Note:** You can only move either down or right at any point in time.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 200`
 * - `0 <= grid[i][j] <= 100`
 *
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array(m)
        .fill()
        .map(() => Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        dp[i][0] = grid[i][0] + dp[i - 1][0];
    }

    for (let j = 1; j < n; j++) {
        dp[0][j] = grid[0][j] + dp[0][j - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[m - 1][n - 1];
};

const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
];
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum
console.log(minPathSum(grid));
