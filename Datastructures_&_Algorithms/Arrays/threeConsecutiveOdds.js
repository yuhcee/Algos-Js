/**
 * **1550. Three Consecutive Odds**
 *
 * Given an integer array `arr`, return `true` if there are three consecutive
 * odd numbers in the array. Otherwise, return `false`.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 1000`
 * - `1 <= arr[i] <= 1000`
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const threeConsecutiveOdds = function (arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        let product = arr[i] * arr[i + 1] * arr[i + 2];

        if (product % 2 === 1) return true;
    }

    return false;
};

const arr = [2, 6, 4, 1];
// Output: false
// Explanation: There are no three consecutive odds.
console.log(threeConsecutiveOdds(arr));

const arr1 = [1, 2, 34, 3, 4, 5, 7, 23, 12];
// Output: true
// Explanation: [5,7,23] are three consecutive odds.
console.log(threeConsecutiveOdds(arr1));
