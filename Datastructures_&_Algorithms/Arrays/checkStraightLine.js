/**
 * **1232. Check If It Is a Straight Line**
 *
 * You are given an array `coordinates`, `coordinates[i] = [x, y]`, where `[x, y]`
 * represents the coordinate of a point. Check if these points make a straight line in the
 * XY plane.
 *
 * **Constraints:**
 *
 * - `2 <= coordinates.length <= 1000`
 * - `coordinates[i].length == 2`
 * - `-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4`
 * - `coordinates` contains no duplicate point.
 *
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
    const [x1, x2] = coordinates[0];
    const [y1, y2] = coordinates[1];

    for (let i = 2; i < coordinates.length; i++) {
        const [x, y] = coordinates[i];

        if ((x2 - x1) * (y - y1) !== (x - x1) * (y2 - y1)) {
            return false;
        }
    }
    return true;
};

const coordinates = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
];
// Output: true
console.log(checkStraightLine(coordinates));
