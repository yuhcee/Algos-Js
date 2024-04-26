/**
 * **1289. Minimum Falling Path Sum II**
 *
 * Given an `n x n` integer matrix `grid`, return *the minimum sum of a
 * **falling path with non-zero shifts.***
 *
 * A **falling path with non-zero shifts** is a choice of exactly one element
 * from each row of `grid` such that no two elements chosen in adjacent rows are
 * in the same column.
 *
 * **Constraints:**
 *
 * - `n == grid.length == grid[i].length`
 * - `1 <= n <= 200`
 * - `-99 <= grid[i][j] <= 99`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const minFallingPathSum = function (grid) {
    const n = grid.length;
    const dp = [...grid]; // Copy the first row as the initial dp array

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] += Math.min(...dp[i - 1].filter((_, idx) => idx !== j));
        }
    }

    return Math.min(...dp[n - 1]);
};
