/**
 * **980. Unique Paths III**
 *
 * You are given an `m x n` integer array grid where `grid[i][j]` could be:
 * - 1 representing the starting square. There is exactly one starting square.
 * - 2 representing the ending square. There is exactly one ending square.
 * - 0 representing empty squares we can walk over.
 * - -1 representing obstacles that we cannot walk over.
 *
 * Return the number of *4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once*.
 *
 * @param {number[][]} grid
 * @return {number}
 */
/* const uniquePathsIII = (grid) => {
    let result = 0,
        traversable = 1,
        startRow,
        startCol,
        rows = grid.length,
        cols = grid[0].length;

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            if (grid[r][c] === 0) traversable++;
            else if (grid[r][c] === 1) (startRow = r), (startCol = c);
        }
    }
    dfs(startRow, startCol);
    return result;

    function dfs(r, c) {
        const rowInbounds = 0 <= r && r < rows;
        const colInbounds = 0 <= c && c < cols;

        if (!rowInbounds || !colInbounds || grid[r][c] < 0) return;
        if (grid[r][c] === 2) return (result += !traversable);

        (grid[r][c] = -2), (traversable -= 1);

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);

        (grid[r][c] = 0), (traversable += 1);
    }
}; */

const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
];
const uniquePathsIII = (grid) => {
    let traversable = 1,
        count = 0,
        sx,
        sy,
        rows = grid.length,
        cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) traversable++;
            else if (grid[r][c] === 1) {
                (sx = r), (sy = c);
            }
        }
    }

    dfs(sx, sy);

    return count;

    function dfs(r, c) {
        if (0 > r || r >= rows || 0 > c || c >= cols || grid[r][c] < 0) return;

        if (grid[r][c] === 2) return (count += !traversable);
        (grid[r][c] = -2), (traversable -= 1);

        for (let [dR, dC] of dirs) {
            dfs(r + dR, c + dC);
        }

        (grid[r][c] = 0), (traversable += 1);
    }
};

const grid = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 2, -1],
    ], // Output: 2
    grid1 = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 2],
    ], // Output: 4
    grid2 = [
        [0, 1],
        [2, 0],
    ]; //Output: 0
console.log(uniquePathsIII(grid));
console.log(uniquePathsIII(grid1));
console.log(uniquePathsIII(grid2));
