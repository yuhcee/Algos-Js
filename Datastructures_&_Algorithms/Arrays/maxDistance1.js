/**
 * **624. Maximum Distance in Arrays**
 *
 * You are given `m` arrays, where each array is sorted in **ascending
 * order**.
 *
 * You can pick up two integers from two different arrays (each array picks
 * one) and calculate the distance. We define the distance between two
 * integers `a` and `b` to be their absolute difference `|a - b|`.
 *
 * Return *the maximum distance*.
 *
 * **Constraints:**
 *
 * - `m == arrays.length`
 * - `2 <= m <= 105`
 * - `1 <= arrays[i].length <= 500`
 * - `-104 <= arrays[i][j] <= 104`
 * - `arrays[i]` is sorted in **ascending** order.
 * - There will be at most 105 integers in all the arrays.
 *
 * @param {number[][]} arrays
 * @return {number}
 */
const maxDistance = function (arrays) {
    let minVal = arrays[0][0];
    let maxVal = arrays[0].at(-1);
    let maxDistance = 0;

    for (let i = 1; i < arrays.length; i++) {
        let currentMin = arrays[i][0];
        let currentMax = arrays[i].at(-1);

        maxDistance = Math.max(maxDistance, Math.abs(currentMax - minVal), Math.abs(maxVal - currentMin));

        minVal = Math.min(currentMin, minVal);
        minVal = Math.min(currentMax, maxVal);
    }

    return maxDistance;
};
