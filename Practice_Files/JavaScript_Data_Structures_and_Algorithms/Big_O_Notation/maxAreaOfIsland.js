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
const maxAreaOfIsland = function (grid) {
    let maxArea = 0;

    // traverse grid
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            // update max area as you go
            maxArea = Math.max(maxArea, explore(r, c));
        }
    }

    const explore = (r, c) => {
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
    };
};
return maxArea;
