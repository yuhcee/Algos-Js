/**
 * **1975. Maximum Matrix Sum**
 *
 * You are given an `n x n` integer `matrix`. You can do the following
 * operation any number of times:
 *
 * - Choose any two **adjacent** elements of matrix and **multiply** each of
 * them by `-1`.
 *
 * Two elements are considered **adjacent** if and only if they share a
 * **border**.
 *
 * Your goal is to **maximize** the summation of the matrix's elements. Return
 * *the **maximum** sum of the matrix's elements using the operation mentioned
 * above*.
 *
 * **Constraints:**
 *
 * - `n == matrix.length == matrix[i].length`
 * - `2 <= n <= 250`
 * - `-105 <= matrix[i][j] <= 105`
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const maxMatrixSum = function (matrix) {
    let totalSum = 0; // Sum of absolute values
    let negativeCount = 0; // Count of negative numbers
    let minAbsoluteValue = Infinity; // Smallest absolute value in the matrix

    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const value = matrix[i][j];
            totalSum += Math.abs(value);
            if (value < 0) negativeCount++;
            minAbsoluteValue = Math.min(minAbsoluteValue, Math.abs(value));
        }
    }

    // If negative count is odd, subtract twice the smallest absolute value
    if (negativeCount % 2 === 1) {
        totalSum -= 2 * minAbsoluteValue;
    }

    return totalSum;
};

const matrix = [
    [1, -1],
    [-1, 1],
];
// Output: 4
/* Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1. */
console.log(maxMatrixSum(matrix));

const matrix1 = [
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
];
// Output: 16
/* Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1. */
console.log(maxMatrixSum(matrix1));
