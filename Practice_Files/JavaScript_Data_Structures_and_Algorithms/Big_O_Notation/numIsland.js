/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 * @param {string [][]} grid 
 * @returns {number} number
 */

const numIslands = (grid) => {
    const visited = new Set();
    let count = 0;

    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (explore(grid, r, c, visited)) count += 1;
        }
    }

    return count;
};

const explore = (grid, r, c, visited) => {
    const rowInbounds = 0 <= r && r < grid.length;
    const colInbounds = 0 <= c && c < grid[0].length;

    if (!rowInbounds || !colInbounds) return 0;

    if (grid[r][c] == '0') return 0;

    const pos = `${r},${c}`;

    if (visited.has(pos)) return 0;
    visited.add(pos);

    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r, c + 1, visited);
    explore(grid, r, c - 1, visited);

    return 1;
};
const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
//   Output: 1
console.log(numIslands(grid));


const grid2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
//   Output: 3
console.log(numIslands(grid2));
