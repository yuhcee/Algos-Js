/**
 * **2133. Check if Every Row and Column Contains All Numbers**
 *
 * An `n x n` matrix is **valid** if every row and every column contains **all** the integers from `1` to `n` (inclusive).
 * Given an `n x n` integer matrix `matrix`, return `true` if the matrix is ***valid***. Otherwise, return `false`.
 *
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = (matrix) => {};

const matrix = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
]; // Output: true
const matrix1 = [
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
]; // Output: false
console.log(checkValid(matrix));
console.log(checkValid(matrix1));
