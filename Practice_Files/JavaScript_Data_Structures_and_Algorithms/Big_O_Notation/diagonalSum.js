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

