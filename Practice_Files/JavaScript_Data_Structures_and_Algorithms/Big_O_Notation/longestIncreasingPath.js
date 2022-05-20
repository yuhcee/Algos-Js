/**
 * **329. Longest Increasing Path in a Matrix**
 *
 * Given an `m x n` integers `matrix`, return *the length of the longest increasing path* in `matrix`
 *
 * From each cell, you can either move in four directions: left, right, up, or down. You **may not** move
 * **diagonally** or move **outside the boundary** (i.e., wrap-around is not allowed).
 *
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let cache = [];
    let res = 0,
        { max } = Math;

    for (let i = 0; i < cols.length; i++) {
        cache.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            res = max(move(row, col, undefined, cache, rows, cols));
        }
    }
};


