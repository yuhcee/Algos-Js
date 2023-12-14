/**
 * **2482. Difference Between Ones and Zeros in Row and Column**
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * A **0-indexed** `m x n` difference matrix `diff` is created with the
 * following procedure:
 *
 * - Let the number of ones in the `ith` row be `onesRowi`.
 * - Let the number of ones in the `jth` column be `onesColj`.
 * - Let the number of zeros in the `ith` row be `zerosRowi`.
 * - Let the number of zeros in the `jth` column be `zerosColj`.
 * - `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`
 *
 * Return the difference matrix `diff`.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 105`
 * - `1 <= m * n <= 105`
 * - grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number[][]}
 */
const onesMinusZeros = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize the difference matrix diff with zeros
    const diff = Array.from({ length: m }, () => Array(n).fill(0));

    // Calculate row and column sums
    const onesRow = Array(m).fill(0);
    const onesCol = Array(n).fill(0);
    const zerosRow = Array(m).fill(0);
    const zerosCol = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            onesRow[i] += grid[i][j];
            onesCol[j] += grid[i][j];
            zerosRow[i] += 1 - grid[i][j];
            zerosCol[j] += 1 - grid[i][j];
        }
    }

    // Calculate the values for each cell in the difference matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Update the difference matrix diff using precomputed sums
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};
