/**
 * **1266. Minimum Time Visiting All Points**
 *
 * On a 2D plane, there are `n` points with integer coordinates `points[i]
 * = [xi, yi]`. Return *the **minimum time** in seconds to visit all the
 * points in the order given by `points`*.
 *
 * You can move according to these rules:
 *
 * - In `1` second, you can either:
 *  - move vertically by one unit,
 *  - move horizontally by one unit, or
 *  - move diagonally `sqrt(2)` units (in other words, move one unit
 * vertically then one unit horizontally in `1` second).
 *
 * - You have to visit the points in the same order as they appear in the
 * array.
 * - You are allowed to pass through points that appear later in the
 * order, but these do not count as visits.
 *
 * **Constraints:**
 *
 * - `points.length == n`
 * - `1 <= n <= 100`
 * - `points[i].length == 2`
 * - `-1000 <= points[i][0], points[i][1] <= 1000`
 *
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = function (points) {
    // initialize the totalTime to zero
    let totalTime = 0;
    // loop through the points array from the second element
    for (let i = 1; i < points.length; i++) {
        // get the current point and the previous point
        const [x1, y1] = points[i - 1];
        const [x2, y2] = points[i];

        // calculate the Chebyshev distance between them
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);

        // add the distance to the time
        totalTime += Math.max(dx, dy);
    }
    // return the total time
    return totalTime;
};
