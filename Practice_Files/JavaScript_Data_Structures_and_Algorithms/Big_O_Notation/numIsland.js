/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 * @param {string [][]} grid 
 * @returns {number} number
 */
const numIslands = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let row = 0; r < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            if (explore(grid, row, col, visited)) count++;
        }
    }

    return count;
};

const grid = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
];
//   Output: 1
console.log(numIslands(grid));

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];
//   Output: 3
console.log(numIslands(grid2));
