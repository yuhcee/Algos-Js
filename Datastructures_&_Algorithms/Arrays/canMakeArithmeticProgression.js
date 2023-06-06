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

const arr = [3, 5, 1];
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
console.log(canMakeArithmeticProgression(arr));

const arr1 = [1, 2, 4];
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
console.log(canMakeArithmeticProgression(arr1));
