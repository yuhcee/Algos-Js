/**
 * **1260. Shift 2D Grid**
 *
 * Given a 2D grid of size `m x n` and an integer `k`. You need to shift the grid `k` times.
 *
 * In one shift operation:
 *
 * - Element at `grid[i][j]` moves to `grid[i][j + 1]`.
 * - Element at `grid[i][n - 1]` moves to `grid[i + 1][0]`.
 * - Element at `grid[m - 1][n - 1]` moves to `grid[0][0]`.
 *
 * Return the *2D grid* after applying shift operation `k` times.
 *
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const shiftGrid = (grid, k) => {
    // repeat rotaion for K times
    for (; k > 0; k--) {
        let previous = grid[grid.length - 1][grid[0].length - 1];

        // implement array simulation
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                let current = grid[row][col];

                [grid[row][col], previous] = [previous, current];
            }
        }
    }

    // return recylced grid
    return grid;
};

const grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    k = 1;
/* Output: [
    [9, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
]; */

const grid2 = [
        [3, 8, 1, 9],
        [19, 7, 2, 5],
        [4, 6, 11, 10],
        [12, 0, 21, 13],
    ],
    k2 = 4;
/* Output: [
    [12, 0, 21, 13],
    [3, 8, 1, 9],
    [19, 7, 2, 5],
    [4, 6, 11, 10],
]; */

const grid3 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
    k3 = 9;
/* Output: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]; */
console.log(shiftGrid(grid, k));
console.log(shiftGrid(grid2, k2));
console.log(shiftGrid(grid3, k3));
