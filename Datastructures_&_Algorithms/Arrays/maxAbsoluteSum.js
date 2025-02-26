/**
 * **1749. Maximum Absolute Sum of Any Subarray**
 *
 * You are given an integer array `nums`. The **absolute sum** of a
 * subarray `[numsl, numsl+1, ..., numsr-1, numsr]` is `abs(numsl + numsl+1
 * + ... + numsr-1 + numsr)`.
 *
 * Return *the **maximum** absolute sum of any **(possibly empty)**
 * subarray of nums.*
 *
 * Note that `abs(x)` is defined as follows:
 *
 * If `x` is a negative integer, then `abs(x) = -x`.
 * If `x` is a non-negative integer, then `abs(x) = x`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-104 <= nums[i] <= 104`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxAbsoluteSum = function (nums) {
    let maxSum = 0;
    let minSum = 0;
    let currentMax = 0;
    let currentMin = 0;

    for (const num of nums) {
        // Update currentMax and currentMin using Kadane's algorithm
        currentMax = Math.max(num, currentMax + num);
        currentMin = Math.min(num, currentMin + num);

        maxSum = Math.max(maxSum, currentMax);
        minSum = Math.min(minSum, currentMin);
    }

    // The maximum absolute sum is the maximum of |maxSum| and |minSum|
    return Math.max(Math.abs(maxSum), Math.abs(minSum));
};
