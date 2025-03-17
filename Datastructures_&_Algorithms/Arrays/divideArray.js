/**
 * **2206. Divide Array Into Equal Pairs**
 *
 * You are given an integer array `nums` consisting of `2 * n` integers.
 *
 * You need to divide `nums` into `n` pairs such that:
 *
 * - Each element belongs to **exactly one** pair.
 * - The elements present in a pair are **equal**.
 *
 * Return *`true` if nums can be divided into `n` pairs, otherwise return `false`*.
 *
 * **Constraints:**
 *
 * - `nums.length == 2 * n`
 * - `1 <= n <= 500`
 * - `1 <= nums[i] <= 500`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const divideArray = function (nums) {
    let count = new Array(501).fill(0); // Since 1 ≤ nums[i] ≤ 500

    // Count occurrences of each number
    for (let num of nums) {
        count[num]++;
    }

    // Check if all counts are even
    for (let freq of count) {
        if (freq % 2 !== 0) {
            return false;
        }
    }

    return true;
};
