/**
 * **2661. First Completely Painted Row or Column**
 *
 * You are given a **0-indexed** integer array `arr`, and an `m x n`
 * integer **matrix** `mat`. `arr` and `mat` both contain **all** the
 * integers in the range `[1, m * n]`.
 *
 * Go through each index `i` in `arr` starting from index `0` and paint the
 * cell in `mat` containing the integer `arr[i]`.
 *
 * Return *the smallest index `i` at which either a row or a column will be
 * completely painted in `mat`.*
 *
 * **Constraints:**
 *
 * - `m == mat.length`
 * - `n = mat[i].length`
 * - `arr.length == m * n`
 * - `1 <= m, n <= 105`
 * - `1 <= m * n <= 105`
 * - `1 <= arr[i], mat[r][c] <= m * n`
 * - All the integers of `arr` are unique.
 * - All the integers of `mat` are unique.
 *
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
const firstCompleteIndex = function (arr, mat) {
    const m = mat.length;
    const n = mat[0].length;

    // Map each value in mat to its (row, col) position
    const valueToPosition = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            valueToPosition.set(mat[i][j], [i, j]);
        }
    }

    // Initialize row and column counts
    const rowCounts = Array(m).fill(0);
    const colCounts = Array(n).fill(0);

    // Iterate through arr and simulate the painting
    for (let i = 0; i < arr.length; i++) {
        const [row, col] = valueToPosition.get(arr[i]);

        // Increment row and column counts
        rowCounts[row]++;
        colCounts[col]++;

        // Check if the row or column is fully painted
        if (rowCounts[row] === n || colCounts[col] === m) {
            return i;
        }
    }

    return -1; // This should never happen based on constraints
};

const arr = [1, 3, 4, 2],
    mat = [
        [1, 4],
        [2, 3],
    ];
// Output: 2
/* Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2]. */
console.log(firstCompleteIndex(arr, mat));
