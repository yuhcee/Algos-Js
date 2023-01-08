/**
 * **149. Max Points on a Line**
 *
 * Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane, return *the maximum
 * number of points that lie on the same straight line*.
 *
 * **Constraints:**
 *
 * - `1 <= points.length <= 300`
 * - `points[i].length == 2`
 * - `-104 <= xi, yi <= 104`
 * - All the `points` are *unique*.
 *
 * @param {number[][]} points
 * @return {number}
 */
const maxPoints = (points) => {
    // If there are less than 3 points, they must all lie on the same line
    if (points.length < 3) {
        return points.length;
    }

    let maxPoints = 0;
    // Iterate over each point in the array
    for (let i = 0; i < points.length - 1; i++) {
        let point1 = points[i];
        let overlap = 0; // Keep track of how many points overlap with point1
        let max = 0; // Keep track of the maximum number of points on a line with point1
        let slopes = new Map(); // Keep track of the number of points with each slope with point1
        // Iterate over the points after point1
        for (let j = i + 1; j < points.length; j++) {
            let point2 = points[j];
            // If point1 and point2 overlap, increment overlap count and continue to the next point
            if (point1[0] === point2[0] && point1[1] === point2[1]) {
                overlap++;
                continue;
            }
            // Calculate the slope between point1 and point2
            let slope = point1[0] === point2[0] ? Number.MAX_SAFE_INTEGER : (point1[1] - point2[1]) / (point1[0] - point2[0]);
            // Increment the count for this slope
            let count = slopes.has(slope) ? slopes.get(slope) : 0;
            count++;
            slopes.set(slope, count);
            // Update the maximum number of points on a line with point1
            max = Math.max(max, count);
        }
        // Update the global maximum number of points on a line
        maxPoints = Math.max(maxPoints, max + overlap + 1);
    }
    return maxPoints;
};

const points = [
    [1, 1],
    [2, 2],
    [3, 3],
];
// Output: 3
console.log(maxPoints(points));
