/**
 * **766. Toeplitz Matrix**
 *
 * Given an `m x n` `matrix`, return *`true` if the
 * matrix is Toeplitz. Otherwise, return `false`.
 *
 * A matrix is **Toeplitz** if every diagonal from
 * top-left to bottom-right has the same elements.
 *
 * **Constraints:**
 *
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m, n <= 20`
 * - `0 <= matrix[i][j] <= 99`
 *
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {};

const matrix = [
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
];
// Output: true
/* Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True. */
console.log(isToeplitzMatrix(matrix));
