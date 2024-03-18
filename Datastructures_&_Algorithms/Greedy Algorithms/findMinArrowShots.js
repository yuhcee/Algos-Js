/**
 * **452. Minimum Number of Arrows to Burst Balloons**
 *
 * There are some spherical balloons taped onto a flat wall that represents
 * the XY-plane. The balloons are represented as a 2D integer array `points`
 * where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches
 * between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.
 *
 * Arrows can be shot up **directly vertically** (in the positive
 * y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is
 * **burst** by an arrow shot at `x` if `xstart <= x <= xend`. There is no limit to the number of
 * arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its
 * path.
 *
 * Given the array `points`, return *the **minimum** number of arrows that must be shot to burst all
 * balloons*.
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
    if (points.length === 0) return 0;

    // Sort the balloons based on their end points
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let prevEnd = points[0][1];

    // Iterate through each balloon
    for (let i = 1; i < points.length; i++) {
        // If the current balloon's start point is greater than the current end point of the arrow,
        // it means we need to shoot a new arrow to burst it
        if (points[i][0] > prevEnd) {
            arrows++;
            prevEnd = points[i][1];
        }
    }

    return arrows;
};

const points = [
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
];

// Output: 2
/* Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12]. */
console.log(findMinArrowShots(points));

const points1 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
console.log(findMinArrowShots(points1));

const points2 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
];
// Output: 2
/* Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5]. */
console.log(findMinArrowShots(points2));
