/**
 * **1631. Path With Minimum Effort**
 *
 * You are a hiker preparing for an upcoming hike. You are given `heights`, a 2D array of size `rows x
 * columns`, where `heights[row][col]` represents the height of cell `(row, col)`. You are situated in the
 * top-left cell, `(0, 0)`, and you hope to travel to the bottom-right cell, `(rows-1, columns-1)` (i.e., **0-indexed**). You can move **up**, **down**, **left**, or **right**, and you wish to find a route that
 * requires the minimum **effort**.
 *
 * A route's **effort** is the **maximum absolute difference** in heights between two consecutive cells of the route.
 *
 * Return *the minimum **effort** required to travel from the top-left cell to the bottom-right cell*.
 *
 * @param {number[][]} heights
 * @return {number}
 */

var minimumEffortPath = function (h) {
    const DIR = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];

    const n = h.length,
        m = h[0].length;
    let v = [],
        min = 0,
        max = 0;

    // finding max value for effort
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (h[i][j - 1]) {
                max = Math.max(max, Math.abs(h[i][j] - h[i][j - 1]));
            }
            if (h[i - 1]) {
                max = Math.max(max, Math.abs(h[i][j] - h[i - 1][j]));
            }
        }
    }
};
