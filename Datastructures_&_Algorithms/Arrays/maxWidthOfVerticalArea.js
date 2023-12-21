/**
 * **1637. Widest Vertical Area Between Two Points Containing No Points**
 *
 * Given `n` `points` on a 2D plane where `points[i] = [xi, yi]`, Return
 * *the **widest vertical area** between two points such that no points
 * are inside the area*.
 *
 * A **vertical area** is an area of fixed-width extending infinitely
 * along the y-axis (i.e., infinite height). The **widest vertical area**
 * is the one with the maximum width.
 *
 * Note that points **on the edge** of a vertical area **are not**
 * considered included in the area.
 *
 * **Constraints:**
 *
 * - `n == points.length`
 * - `2 <= n <= 105`
 * - `points[i].length == 2`
 * - `0 <= xi, yi <= 109`
 *
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = function (points) {
    // Extract x-coordinates
    const xCoordinates = points.map((point) => point[0]);

    // Sort x-coordinates
    xCoordinates.sort((a, b) => a - b);

    // Find the maximum width
    let maxWidth = 0;
    for (let i = 1; i < xCoordinates.length; i++) {
        const width = xCoordinates[i] - xCoordinates[i - 1];
        maxWidth = Math.max(maxWidth, width);
    }

    return maxWidth;
};

const points = [
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
];
// Output: 1
// Explanation: Both the red and the blue area are optimal.
console.log(maxWidthOfVerticalArea(points));

const points1 = [
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
];
// Output: 3
console.log(maxWidthOfVerticalArea(points1));
