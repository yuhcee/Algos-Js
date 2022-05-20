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
    const cols = matrix[0].length;

    let cache = [];
    let res = 0,
        { max } = Math;

    for (let i = 0; i < cols; i++) {
        cache.push([]);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            res = max(move(row, col, undefined, cache, matrix), res);
        }
    }

    return res;
};

const move = (row, col, prev, cache, matrix) => {
    const rowInbounds = 0 <= row && row < matrix.length;
    const colInbounds = 0 <= col && col < matrix[0].length;

    if (!rowInbounds || !colInbounds) return 0;

    const val = matrix[row][col];

    if (prev !== undefined && val <= prev) return 0;

    if (cache[row][col] !== undefined) return cache[row][col];

const distance =   Math.max(move(row + 1, col, val, cache, matrix), 
                            move(row - 1, col, val, cache, matrix), 
                            move(row, col + 1, val, cache, matrix), 
                            move(row, col - 1, val, cache, matrix));

    return cache[row][col] = distance + 1;
};

const matrix = [[3,4,5],[3,2,6],[2,2,1]];// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

console.log(longestIncreasingPath(matrix));