/**
 * **931. Minimum Falling Path Sum**
 *
 * Given an `n x n` array of integers `matrix`, return *the **minimum
 * sum** of any **falling path** through `matrix`*.
 *
 * A **falling path** starts at any element in the first row and chooses
 * the element in the next row that is either directly below or diagonally
 * left/right. Specifically, the next element from position `(row, col)`
 * will be `(row + 1, col - 1)`, `(row + 1, col)`, or `(row + 1, col + 1)`.
 *
 * **Constraints:**
 *
 * - `n == matrix.length == matrix[i].length`
 * - `1 <= n <= 100`
 * - `-100 <= matrix[i][j] <= 100`
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
    const n = matrix.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // For each cell (i, j), find the minimum value from the cells above it
            matrix[i][j] += Math.min(
                matrix[i - 1][j], // cell directly above
                matrix[i - 1][Math.max(j - 1, 0)], // cell diagonally above to the left (or itself if at the leftmost column)
                matrix[i - 1][Math.min(j + 1, n - 1)] // cell diagonally above to the right (or itself if at the rightmost column)
            );
        }
    }

    // Return the minimum value from the last row
    return Math.min(...matrix[n - 1]);
};

const matrix = [
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
];
// Output: 13
// Explanation: There are two falling paths with a minimum sum as shown.
console.log(minFallingPathSum(matrix));

const matrix1 = [
    [-19, 57],
    [-40, -5],
];
// Output: -59
// Explanation: The falling path with a minimum sum is shown.
console.log(minFallingPathSum(matrix1));
