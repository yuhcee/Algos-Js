/**
 * **1463. Cherry Pickup II**
 *
 * You are given a `rows x cols` matrix `grid` representing a field of
 * cherries where `grid[i][j]` represents the number of cherries that you
 * can collect from the `(i, j)` cell.
 *
 * You have two robots that can collect cherries for you:
 *
 * - **Robot #1** is located at the **top-left corner** `(0, 0)`, and
 * - **Robot #2** is located at the **top-right corner** `(0, cols - 1)`.
 *
 * Return *the maximum number of cherries collection using both robots by
 * following the rules below:*
 *
 * - From a cell `(i, j)`, robots can move to cell `(i + 1, j - 1)`, `(i +
 * 1, j)`, or `(i + 1, j + 1)`.
 * - When any robot passes through a cell, It picks up all cherries, and the
 * cell becomes an empty cell.
 * - When both robots stay in the same cell, only one takes the cherries.
 * - Both robots cannot move outside of the grid at any moment.
 * - Both robots should reach the bottom row in `grid`.
 *
 * **Constraints:**
 *
 * - `rows == grid.length`
 * - `cols == grid[i].length`
 * - `2 <= rows, cols <= 70`
 * - `0 <= grid[i][j] <= 100`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const cherryPickup = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const memo = new Array(rows).fill(null).map(() => new Array(cols).fill(null).map(() => new Array(cols).fill(null)));

    const dfs = (row, c1, c2) => {
        if (row === rows) return 0; // Base case: reached the bottom row
        if (memo[row][c1][c2] !== null) return memo[row][c1][c2]; // Check memoization table

        let cherries = 0;

        // Iterate through all possible next positions for both robots
        for (let dc1 of [-1, 0, 1]) {
            for (let dc2 of [-1, 0, 1]) {
                const nc1 = c1 + dc1,
                    nc2 = c2 + dc2;
                if (nc1 >= 0 && nc1 < cols && nc2 >= 0 && nc2 < cols) {
                    cherries = Math.max(cherries, dfs(row + 1, nc1, nc2));
                }
            }
        }

        // Add cherries from the current cell if both robots are not in the same cell
        if (c1 !== c2) cherries += grid[row][c1] + grid[row][c2];
        // Memoize the result and return
        memo[row][c1][c2] = cherries;
        return cherries;
    };

    return dfs(0, 0, cols - 1); // Call dfs from the top-left and top-right corners
};

const grid = [
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
];
// Output: 24;
/* Explanation: Path of robot #1 and #2 are described in color green and blue respectively.
Cherries taken by Robot #1, (3 + 2 + 5 + 2) = 12.
Cherries taken by Robot #2, (1 + 5 + 5 + 1) = 12.
Total of cherries: 12 + 12 = 24. */
console.log(cherryPickup(grid));
