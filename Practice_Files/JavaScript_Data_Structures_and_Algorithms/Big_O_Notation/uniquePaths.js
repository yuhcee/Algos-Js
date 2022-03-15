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
const uniquePathsIII = (grid) => {
    let result = 0,
        traversable = 1,
        startRow,
        startCol,
        rows = grid.length,
        cols = grid[0].length;

    for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
            let cell = grid[r][c];
            if (cell === 0) traversable++;
            if (cell === 1) (startRow = r), (startCol = c);
        }
    }
    dfs(grid, startRow, startCol, result, traversable);
    return result;
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
