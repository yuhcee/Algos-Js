/**
 * **1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to
 * Limit**
 *
 * Given an array of integers `nums` and an integer `limit`, return the size of
 * the longest **non-empty** subarray such that the absolute difference between
 * any two elements of this subarray is less than or equal to `limit`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 * - `0 <= limit <= 109`
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = function (nums, limit) {
    let left = 0,
        right = 0;
    let maxLength = 0;

    let maxDeque = [];
    let minDeque = [];

    while (right < nums.length) {
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            left++;
            if (maxDeque[0] < left) {
                maxDeque.shift();
            }
            if (minDeque[0] < left) {
                minDeque.shift();
            }
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
};
