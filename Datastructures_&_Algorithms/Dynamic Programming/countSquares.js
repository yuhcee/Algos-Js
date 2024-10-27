/**
 * **1277. Count Square Submatrices with All Ones**
 *
 * Given a `m * n` matrix of ones and zeros, return how many **square**
 * submatrices have all ones.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 300`
 * - `1 <= arr[0].length <= 300`
 * - `0 <= arr[i][j] <= 1`
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    let totalSquares = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1; // First row or column, only 1x1 squares are possible.
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
                }
                totalSquares += dp[i][j];
            }
        }
    }

    return totalSquares;
};

const matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];
// Output: 15
/* Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15. */
console.log(countSquares(matrix));

const matrix1 = [
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
];
// Output: 7
/* Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7. */
console.log(countSquares(matrix1));
