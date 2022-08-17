/**
 *  **1572. Matrix Diagonal Sum**
 *
 * Given a square matrix mat, return the sum of the matrix diagonals.
 *
 * Only include the sum of all the elements on the primary diagonal and all the elements on the secondary
 * diagonal that are not part of the primary diagonal.
 *
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
    let sum = 0;
    size = mat.length;

    for (let i = 0; i < size; i++) {
        sum += mat[i][i];
        sum += mat[i][mat.length - 1 - i];
    }

    if (size % 2 === 0) return sum;
    else {
        let newSize = Math.floor(size / 2);
        return sum - mat[newSize][newSize];
    }
};

const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; // Output: 25

const mat1 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
]; // Output: 8

const mat2 = [[5]]; // Output: 5

console.log(diagonalSum(mat));
console.log(diagonalSum(mat1));
console.log(diagonalSum(mat2));