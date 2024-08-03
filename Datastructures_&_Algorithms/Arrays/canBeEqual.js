/**
 * **1460. Make Two Arrays Equal by Reversing Subarrays**
 *
 * You are given two integer arrays of equal length `target` and `arr`. In
 * one step, you can select any **non-empty subarray** of `arr` and
 * reverse it. You are allowed to make any number of steps.
 *
 * Return *`true` if you can make `arr` equal to `target` or `false`
 * otherwise*.
 *
 * **Constraints:**
 *
 * - `target.length == arr.length`
 * - `1 <= target.length <= 1000`
 * - `1 <= target[i] <= 1000`
 * - `1 <= arr[i] <= 1000`
 *
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
const canBeEqual = function (target, arr) {
    // Sort both arrays
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    // Compare the sorted arrays
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }

    return true;
};
