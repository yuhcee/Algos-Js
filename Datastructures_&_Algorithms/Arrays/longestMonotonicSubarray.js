/**
 * **3105. Longest Strictly Increasing or Strictly Decreasing Subarray**
 *
 * You are given an array of integers `nums`. Return *the length of the
 * **longest** subarray of `nums` which is either **strictly increasing**
 * or **strictly decreasing**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 50`
 * - `1 <= nums[i] <= 50`
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestMonotonicSubarray = function (nums) {
    let maxLen = 1;
    let incLen = 1,
        decLen = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            incLen++;
            decLen = 1; // Reset decreasing count
        } else if (nums[i] < nums[i - 1]) {
            decLen++;
            incLen = 1; // Reset increasing count
        } else {
            incLen = 1;
            decLen = 1;
        }

        maxLen = Math.max(maxLen, incLen, decLen);
    }

    return maxLen;
};
