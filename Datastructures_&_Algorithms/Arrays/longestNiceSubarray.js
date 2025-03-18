/**
 * **2401. Longest Nice Subarray**
 *
 * You are given an array `nums` consisting of **positive** integers.
 *
 * We call a subarray of `nums` nice if the bitwise **AND** of every pair of elements that are in **different** positions
 * in the subarray is equal to `0`.
 *
 * Return *the length of the **longest** nice subarray*.
 *
 * A **subarray** is a **contiguous** part of an array.
 *
 * **Note** that subarrays of length 1 are always considered nice.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestNiceSubarray = function (nums) {
    let maxLen = 0;
    let left = 0;
    let occupied = 0;

    for (let right = 0; right < nums.length; right++) {
        // Shrink window while there's a conflict
        while ((nums[right] & occupied) !== 0) {
            occupied &= ~nums[left];
            left++;
        }

        // Include the current number
        occupied |= nums[right];

        // Update maximum length
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};
