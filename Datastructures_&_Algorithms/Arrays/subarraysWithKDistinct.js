/**
 * **992. Subarrays with K Different Integers**
 *
 * Given an integer array nums and an integer k, return the number of **good
 * subarrays** of nums.***
 *
 * A **good array** is an array where the number of different integers in that
 * array is exactly `k`.
 *
 * - For example, `[1,2,3,1,2]` has `3` different integers: `1`, `2`, and `3`.
 *
 * A **subarray** is a **contiguous** part of an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 2 * 104`
 * - `1 <= nums[i], k <= nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = (nums, k) => {};

const atMostK = function (nums, k) {
    let freq = new Map();
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++) {
        freq.set(nums[right], (freq.get(nums[right]) || 0) + 1);
        while (freq.size > k) {
            freq.set(nums[left], freq.get(nums[left]) - 1);
            if (freq.get(nums[left]) === 0) {
                freq.delete(nums[left]);
            }
            left++;
        }
        count += right - left + 1;
    }

    return count;
};
