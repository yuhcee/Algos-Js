/**
 * **1254. Number of Closed Islands**
 *
 * Given a 2D grid consists of `0s` (land) and `1s` (water).  An island is a maximal 4-directionally
 * connected group of `0s` and a *closed island* is an island **totally** (all left, top, right,
 * bottom) surrounded by `1s`.
 *
 * Return the number of closed islands.
 *
 * **Constraints:**
 *
 * - `1 <= grid.length, grid[0].length <= 100`
 * - `0 <= grid[i][j] <=1`
 *
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
    let res = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 0 && (r === 0 || c === 0 || r === grid.length - 1 || c === grid[r].length - 1)) {
                dfs(r, c);
            }
        }
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 0) {
                dfs(r, c);
                res++;
            }
        }
    }

    return res;

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] === 1) return;

        grid[r][c] = 1;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }
};

const grid = [
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
];
// Output: 2
/* Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s). */
console.log(closedIsland(grid));

const grid2 = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
];
// Output: 1
console.log(closedIsland(grid2));

const grid3 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];
// Output: 2;
console.log(closedIsland(grid3));
