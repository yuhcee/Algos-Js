/**
 * **2033. Minimum Operations to Make a Uni-Value Grid**
 *
 * You are given a 2D integer `grid` of size `m x n` and an integer `x`. In one operation, you can add `x` to or subtract
 * `x` from any element in the `grid`.
 *
 * A **uni-value grid** is a grid where all the elements of it are equal.
 *
 * Return the **minimum** number of operations to make the grid **uni-value**. If it is not possible, return `-1`.
 *
 * **Constraints:
 *
 * - `m == grid.length`
 * - `n == grid[i].length`
 * - `1 <= m, n <= 105`
 * - `1 <= m * n <= 105`
 * - `1 <= x, grid[i][j] <= 104`
 *
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
const minOperations = function (grid, x) {
    // Flatten the grid
    const arr = grid.flat();

    // Check feasibility: all numbers must have the same remainder modulo x.
    const base = arr[0] % x;
    for (const num of arr) {
        if (num % x !== base) {
            return -1;
        }
    }

    // Sort the flattened array to find the median.
    arr.sort((a, b) => a - b);
    const mid = arr[Math.floor(arr.length / 2)];

    // Calculate the total number of operations needed.
    let operations = 0;
    for (const num of arr) {
        operations += Math.abs(num - mid) / x;
    }

    return operations;
};

const grid = [
        [2, 4],
        [6, 8],
    ],
    x = 2;
// Output: 4
/* Explanation: We can make every element equal to 4 by doing the following: 
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used. */
console.log(minOperations(grid, x));
