/**
 * **452. Minimum Number of Arrows to Burst Balloons**
 *
 * There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are
 * represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose
 * **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the
 * balloons.
 *
 * Arrows can be shot up **directly vertically** (in the positive y-direction) from different points along the
 * x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There
 * is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any
 * balloons in its path.
 *
 * Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.
 *
 * **Constraints:**
 *
 * - `1 <= points.length <= 105`
 * - `points[i].length == 2`
 * - `-231 <= xstart < xend <= 231 - 1`
 *
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    if (!points) return 0;

    // Sort the balloons by their starting x-coordinates
    points.sort((a, b) => a[0] - b[0]);

    let end = points[0][1];
    let arrowCount = 1;

    // Keep track of the ending x-coordinate of the current balloon
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] <= end) {
            // The next balloon starts before the ending x-coordinate of the current balloon, so we  update the ending x-coordinate to the minimum of the two
            end = Math.min(end, points[i][1]);
        } else {
            // The next balloon starts after the ending x-coordinate of the current balloon, so we need to shoot a separate arrow for it
            end = points[i][1];
            arrowCount += 1;
        }
    }

    return arrowCount;
};
