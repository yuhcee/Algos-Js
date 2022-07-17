/**
 * **695. Max Area of Island**
 *
 * You are given an `m x n` binary matrix `grid`. An island is a group of `1`'s (representing land)
 * connected `4-directionally` (horizontal or vertical.) You may assume all four edges of the grid are
 * surrounded by water.
 *
 * The area of an island is the number of cells with a value 1 in the island.
 *
 * Return *the maximum **area** of an island in `grid`. If there is no island, return `0`*.
 *
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid) => {
    let maxArea = 0;

    // traverse grid
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            // update max area as you go
            maxArea = Math.max(maxArea, findMax(r, c));
        }
    }

    function findMax(r, c) {
        // check out of bounds
        if (grid[r] === undefined || grid[r][c] === undefined) return 0;

        if (grid[r][c] === 0) return 0;

        // start from position
        grid[r][c] = 0;

        // explore num of island
        let max = 1;
        max += findMax(r + 1, c);
        max += findMax(r - 1, c);
        max += findMax(r, c + 1);
        max += findMax(r, c - 1);

        return max;
    }
    return maxArea;
};

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
console.log('w');
console.log(maxAreaOfIsland(grid));

const grid1 = [[0, 0, 0, 0, 0, 0, 0, 0]];
// Output: 0
console.log(maxAreaOfIsland(grid1));
