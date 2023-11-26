/**
 * **1727. Largest Submatrix With Rearrangements**
 *
 * You are given a binary matrix `matrix` of size `m x n`, and you are
 * allowed to rearrange the columns of the `matrix` in any order.
 *
 * Return *the area of the largest submatrix within `matrix` where
 * **every** element of the submatrix is `1` after reordering the columns
 * optimally.
 *
 * **Constraints:**
 *
 * - `m == matrix.length`
 * - `n == matrix[i].length`
 * - `1 <= m * n <= 105`
 * - `matrix[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxArea = 0;

    // Transform the matrix
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    // Rearrange each row and find the largest submatrix
    for (let i = 0; i < m; i++) {
        matrix[i].sort((a, b) => b - a); // Sort in descending order
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
        }
    }

    return maxArea;
};

const matrix = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
];
// Output: 4
/* Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4. */
console.log(largestSubmatrix(matrix));

const matrix1 = [[1, 0, 1, 0, 1]];
// Output: 3
/* Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3. */
console.log(largestSubmatrix(matrix1));

const matrix2 = [
    [1, 1, 0],
    [1, 0, 1],
];
// Output: 2
/* Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2. */
console.log(largestSubmatrix(matrix2));
