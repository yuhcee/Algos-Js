/**
 * **2352. Equal Row and Column Pairs**
 *
 * Given a **0-indexed** `n x n` integer matrix `grid`, *return the number of pairs `(ri, cj)`
 * such that row `ri` and column `cj` are equal*.
 *
 * A row and column pair is considered equal if they contain the same elements in the same
 * order (i.e., an equal array).
 *
 * **Constraints:**
 *
 * - `n == grid.length == grid[i].length`
 * - `1 <= n <= 200`
 * - `1 <= grid[i][j] <= 105`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function (grid) {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    let count = 0;

    // Create a map to store the frequency of each row as a string
    const rowMap = new Map();

    // Iterate over each row and convert it to a string representation
    for (let i = 0; i < rowCount; i++) {
        const rowString = grid[i].toString();

        // Increment the count for the current row
        rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1);
    }

    // Iterate over each column
    for (let j = 0; j < colCount; j++) {
        const colArray = [];

        // Get the elements of the current column and store them in an array
        for (let i = 0; i < rowCount; i++) {
            colArray.push(grid[i][j]);
        }

        // Check if the column array is equal to any row
        const colString = colArray.toString();
        if (rowMap.has(colString)) {
            count += rowMap.get(colString);
        }
    }

    return count;
};

const grid = [
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
];
// Output: 1
/* Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7] */
console.log(equalPairs(grid));
