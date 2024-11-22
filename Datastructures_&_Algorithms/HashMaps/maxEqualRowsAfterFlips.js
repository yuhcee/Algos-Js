/**
 * **1072. Flip Columns For Maximum Number of Equal Rows**
 *
 * You are given an `m x n` binary matrix `matrix`.
 *
 * You can choose any number of columns in the matrix and flip every cell in
 * that column (i.e., Change the value of the cell from `0` to `1` or vice
 * versa).
 *
 * Return *the maximum number of rows that have all values equal after some
 * number of flips.*
 *
 * **Constraints:**
 *
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m, n <= 300`
 * - `matrix[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const maxEqualRowsAfterFlips = function (matrix) {
    const rowPatterns = new Map();

    for (const row of matrix) {
        // Normalize the row by making it start with `0` if possible
        const normalized = row.map((val) => val ^ row[0]);
        const key = normalized.join(',');

        // Count rows with the same normalized pattern
        rowPatterns.set(key, (rowPatterns.get(key) || 0) + 1);
    }

    // Return the maximum count of equivalent rows
    return Math.max(...rowPatterns.values());
};
