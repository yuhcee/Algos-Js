/**
 * **209. Minimum Size Subarray Sum**
 *
 * Given an array of positive integers `nums` and a positive integer `target`, return *the
 * **minimal length** of a subarray whose sum is greater than or equal to `target`*.
 *
 * If there is no such subarray, return `0` instead.
 *
 * **Constraints:**
 *
 * - `1 <= target <= 109`
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 104`
 *
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
    let minLength = Infinity; // Variable to store the minimum length of the subarray
    let windowSum = 0; // Variable to track the sum of the current window
    let windowStart = 0; // Variable to track the start index of the current window

    // Iterate over the array
    for (let i = 0; i < nums.length; i++) {
        windowSum += nums[i]; // Add the current element to the window sum

        // Check if the window sum is greater than or equal to the target
        while (windowSum >= target) {
            const windowLength = i - windowStart + 1; // Calculate the length of the current window
            minLength = Math.min(minLength, windowLength); // Update the minLength if necessary
            windowSum -= nums[windowStart]; // Remove the leftmost element from the window sum
            windowStart++; // Move the window's start index to the right
        }
    }

    return minLength === Infinity ? 0 : minLength; // Return the minLength, or 0 if no subarray is found
};
