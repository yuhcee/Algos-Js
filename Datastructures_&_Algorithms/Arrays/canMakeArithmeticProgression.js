/**
 * **1502. Can Make Arithmetic Progression From Sequence**
 *
 * A sequence of numbers is called an **arithmetic progression** if the difference between
 * any two consecutive elements is the same.
 *
 * Given an array of numbers `arr`, return *`true` if the array can be rearranged to form
 * an **arithmetic progression**. Otherwise, return `false`*.
 *
 * **Constraints:**
 *
 * - `2 <= arr.length <= 1000`
 * - `-106 <= arr[i] <= 106`
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const canMakeArithmeticProgression = function (arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Calculate the common difference between consecutive elements
    const diff = arr[1] - arr[0];

    // Check if the difference between any two consecutive elements is different
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== diff) {
            return false; // Difference is different, not an arithmetic progression
        }
    }

    return true; // All differences are the same, it's an arithmetic progression
};
