/**
 * **867. Transpose Matrix**
 *
 * Given a 2D integer array `matrix`, return *the **transpose** of `matrix`*.
 *
 * The *transpose* of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column
 * indices.
 *
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const transpose = (matrix) => {
    // init rows
    const rows = matrix.length,
        // init cols
        cols = matrix[0].length,
        // init output
        output = [];

    // iterate through rows
    for (let r = 0; r < rows; r++) {
        // iterate through cols
        for (let c = 0; c < cols; c++) {
            // check if col exist in output, else set to empty arr
            if (!output[c]) output[c] = [];
            // transpose array
            output[c][r] = matrix[r][c];
        }
    }
    // return output arr
    return output;
};

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Output: [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose(matrix));

const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
];
// Output: [[1,4],[2,5],[3,6]]
console.log(transpose(matrix1));
