/**
 * **2482. Difference Between Ones and Zeros in Row and Column**
 *
 * You are given a 0-indexed m x n binary matrix grid.
 *
 * A **0-indexed** `m x n` difference matrix `diff` is created with the
 * following procedure:
 *
 * - Let the number of ones in the `ith` row be `onesRowi`.
 * - Let the number of ones in the `jth` column be `onesColj`.
 * - Let the number of zeros in the `ith` row be `zerosRowi`.
 * - Let the number of zeros in the `jth` column be `zerosColj`.
 * - `diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj`
 *
 * Return the difference matrix `diff`.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 105`
 * - `1 <= m * n <= 105`
 * - grid[i][j]` is either `0` or `1`.
 *
 * @param {number[][]} grid
 * @return {number[][]}
 */
const onesMinusZeros = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize the difference matrix diff with zeros
    const diff = Array.from({ length: m }, () => Array(n).fill(0));

    // Calculate row and column sums
    const onesRow = Array(m).fill(0);
    const onesCol = Array(n).fill(0);
    const zerosRow = Array(m).fill(0);
    const zerosCol = Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            onesRow[i] += grid[i][j];
            onesCol[j] += grid[i][j];
            zerosRow[i] += 1 - grid[i][j];
            zerosCol[j] += 1 - grid[i][j];
        }
    }

    // Calculate the values for each cell in the difference matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // Update the difference matrix diff using precomputed sums
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};

const grid = [
    [0, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
];
// Output: [[0,0,4],[0,0,4],[-2,-2,2]]
/* Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2 */
console.log(onesMinusZeros(grid));

const grid1 = [
    [1, 1, 1],
    [1, 1, 1],
];
// Output: [[5,5,5],[5,5,5]]
/* Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5 */
console.log(onesMinusZeros(grid1));
