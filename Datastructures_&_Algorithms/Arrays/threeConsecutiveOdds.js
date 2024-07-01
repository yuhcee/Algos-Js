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
