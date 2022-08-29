/**
 * **1329. Sort the Matrix Diagonally**
 *
 * A **matrix diagonal** is a diagonal line of cells starting from some cell in either the topmost row or
 * leftmost column and going in the bottom-right direction until reaching the matrix's end. For example,
 * the **matrix diagonal** starting from `mat[2][0]`, where `mat` is a `6 x 3` matrix, includes cells `mat
 * [2][0]`, `mat[3][1]`, and `mat[4][2]`.
 *
 * Given an `m x n` matrix `mat` of integers, sort each **matrix diagonal** in ascending order and return
 * *the resulting matrix*.
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = (mat) => {
    // sort rows
    for (let row = 1; row < mat.length; row++) sortDiagonals(mat, row, 0);
    // sort cols
    for (let col = 0; col < mat[0].length; col++) sortDiagonals(mat, 0, col);

    return mat;

    // init sortDiagonals func
    function sortDiagonals(mat, x, y) {
        
    }
};

