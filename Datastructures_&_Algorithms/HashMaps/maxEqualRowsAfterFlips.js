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

const matrix = [
    [0, 1],
    [1, 1],
];
// Output: 1
// Explanation: After flipping no values, 1 row has all values equal.
console.log(maxEqualRowsAfterFlips(matrix));

const matrix1 = [
    [0, 1],
    [1, 0],
];
// Output: 2
// Explanation: After flipping values in the first column, both rows have equal values.
console.log(maxEqualRowsAfterFlips(matrix1));

const matrix2 = [
    [0, 0, 0],
    [0, 0, 1],
    [1, 1, 0],
];
// Output: 2
// Explanation: After flipping values in the first two columns, the last two rows have equal values.
console.log(maxEqualRowsAfterFlips(matrix2));
