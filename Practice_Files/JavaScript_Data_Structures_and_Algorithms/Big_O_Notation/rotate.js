/**
 * **48. Rotate Image**
 *
 * You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees
 * (clockwise).
 *
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO
 * NOT allocate another 2D matrix and do the rotation.
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    // get matrix rows length
    const rows = matrix.length;
    // get matrix columns length
    const cols = matrix[0].length;

    // loop through matrix
    for (let row = 0; row < rows; row += 1) {
        for (let col = row; col < cols; col += 1) {
            // transform
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }

    for (let i = 0; i < rows; i++) {
        // reverse
        matrix[i].reverse();
    }

    return matrix;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Output: [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotate(matrix));

const matrix1 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
];
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
console.log(rotate(matrix1));
