/**
 * **1800. Maximum Ascending Subarray Sum**
 *
 * Given an array of positive integers `nums`, return the maximum possible
 * sum of an **ascending** subarray in `nums`.
 *
 * A subarray is defined as a contiguous sequence of numbers in an array.
 *
 * A subarray `[numsl, numsl+1, ..., numsr-1, numsr]` is **ascending** if
 * for all i where l <= i < r, numsi  < numsi+1. Note that a subarray of
 * size 1 is **ascending**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxAscendingSum = function (nums) {
    let maxSum = nums[0]; // Store maximum sum found
    let currentSum = nums[0]; // Track current ascending sum

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i]; // Continue ascending subarray
        } else {
            currentSum = nums[i]; // Start a new subarray
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
const nums = [10, 20, 30, 5, 10, 50];
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
console.log(maxAscendingSum(nums));
