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

const grid = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
];
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
console.log(countNegatives(grid));

const grid1 = [
    [3, 2],
    [1, 0],
];
// Output: 0
console.log(countNegatives(grid1));

const grid2 = [
    [3, 2, -1],
    [2, 1, -1],
    [1, -1, -2],
];
// Output: 4
const negativeCount2 = countNegatives(grid2);
console.log('Number of negative numbers:', negativeCount2);

const grid3 = [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
];
// Output: 12
const negativeCount3 = countNegatives(grid3);
console.log('Number of negative numbers:', negativeCount3);
