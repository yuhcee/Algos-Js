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

const nums = [3, 2, 3, 2, 2, 2];
// Output: true
/* Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions. */
console.log(divideArray(nums));

const nums1 = [1, 2, 3, 4];
// Output: false
/* Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition. */
console.log(divideArray(nums1));
