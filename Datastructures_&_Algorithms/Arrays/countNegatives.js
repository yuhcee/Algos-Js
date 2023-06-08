/**
 * **1351. Count Negative Numbers in a Sorted Matrix**
 *
 * Given a `m x n` matrix `grid` which is sorted in non-increasing order both row-wise and
 * column-wise, return *the number of **negative** numbers in grid*.
 *
 * **Constraints:**
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 100`
 * - `-100 <= grid[i][j] <= 100`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function (grid) {
    const nums = grid.flat();
    let count = 0;

    for (let num of nums) {
        if (num < 0) {
            count += 1;
        }
    }

    return count;
};
