/**
 * **1380. Lucky Numbers in a Matrix**
 *
 * Given an `m x n` matrix of **distinct** numbers, return *all **lucky
 * numbers** in the matrix in **any** order*.
 *
 * A **lucky number** is an element of the matrix such that it is the
 * minimum element in its row and maximum in its column.
 *
 * **Constraints:**
 *
 * - `m == mat.length`
 * - `n == mat[i].length`
 * - `1 <= n, m <= 50`
 * - `1 <= matrix[i][j] <= 105.`
 * - All elements in the matrix are distinct.
 *
 * @param {number[][]} matrix
 * @return {number[]}
 */
const luckyNumbers = function (matrix) {
    let luckyNumbers = [];
    let minRowValues = [];

    // Step 1: Find the minimum element in each row
    for (let i = 0; i < matrix.length; i++) {
        let minVal = Math.min(...matrix[i]);
        minRowValues.push(minVal);
    }

    // Step 2: Check if the minimum element in each row is the maximum in its column
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === minRowValues[i]) {
                let isMaxInCol = true;
                for (let k = 0; k < matrix.length; k++) {
                    if (matrix[k][j] > matrix[i][j]) {
                        isMaxInCol = false;
                        break;
                    }
                }
                if (isMaxInCol) {
                    luckyNumbers.push(matrix[i][j]);
                }
            }
        }
    }

    return luckyNumbers;
};

const matrix = [
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17],
];
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
console.log(luckyNumbers(matrix));

const matrix1 = [
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
];
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
console.log(luckyNumbers(matrix1));

const matrix2 = [
    [7, 8],
    [1, 2],
];
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
console.log(luckyNumbers(matrix2));
