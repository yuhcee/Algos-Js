/**
 * **840. Magic Squares In Grid**
 *
 * A `3 x 3` **magic square** is a `3 x 3` grid filled with distinct numbers
 * from 1 **to** 9 such that each row, column, and both diagonals all have
 * the same sum.
 *
 * Given a `row x col` `grid` of integers, how many `3 x 3` contiguous magic
 * square subgrids are there?
 *
 * **Note**: while a magic square can only contain numbers from 1 to 9,
 * `grid` may contain numbers up to 15.
 *
 * **Constraints:**
 *
 * - `row == grid.length`
 * - `col == grid[i].length`
 * - `1 <= row, col <= 10`
 * - `0 <= grid[i][j] <= 15`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = function (grid) {
    const isMagic = (r, c) => {
        const s = new Set();

        // Check all numbers are distinct and in range 1-9
        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {
                if (grid[i][j] < 1 || grid[i][j] > 9 || s.has(grid[i][j])) {
                    return false;
                }
                s.add(grid[i][j]);
            }
        }

        // Check sums of rows, columns, and diagonals
        const sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
        return (
            grid[r][c] + grid[r][c + 1] + grid[r][c + 2] === sum &&
            grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2] === sum &&
            grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2] === sum &&
            grid[r][c] + grid[r + 1][c] + grid[r + 2][c] === sum &&
            grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1] === sum &&
            grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2] === sum &&
            grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] === sum &&
            grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] === sum
        );
    };

    let count = 0;
    for (let r = 0; r < grid.length - 2; r++) {
        for (let c = 0; c < grid[0].length - 2; c++) {
            if (isMagic(r, c)) {
                count++;
            }
        }
    }

    return count;
};
