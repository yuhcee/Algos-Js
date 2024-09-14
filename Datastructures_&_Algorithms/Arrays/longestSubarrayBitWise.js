/**
 * **2419. Longest Subarray With Maximum Bitwise AND**
 *
 * You are given an integer array `nums` of size `n`.
 *
 * Consider a non-empty subarray from `nums` that has the **maximum**
 * possible **bitwise AND**.
 *
 * In other words, let `k` be the maximum value of the bitwise AND of
 * **any** subarray of `nums`. Then, only subarrays with a bitwise AND
 * equal to `k` should be considered.
 *
 * Return *the length of the longest such subarray*.
 *
 * The bitwise AND of an array is the bitwise AND of all the numbers in
 * it.
 *
 * A **subarray** is a contiguous sequence of elements within an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
    // Step 1: Find the maximum number in the array
    const maxNum = Math.max(...nums);

    // Step 2: Find the longest subarray with elements equal to maxNum
    let longest = 0;
    let currentLength = 0;

    for (let num of nums) {
        if (num === maxNum) {
            currentLength++;
        } else {
            longest = Math.max(longest, currentLength);
            currentLength = 0; // Reset the length since we encountered a different number
        }
    }

    // After the loop, check once more in case the longest subarray ends at the last element
    longest = Math.max(longest, currentLength);

    return longest;
};
