/**
 * **2461. Maximum Sum of Distinct Subarrays With Length K**
 *
 * You are given an integer array `nums` and an integer `k`. Find the maximum subarray sum of all the
 * subarrays of `nums` that meet the following conditions:
 *
 * - The length of the subarray is `k`, and
 * - All the elements of the subarray are distinct.
 *
 * Return *the maximum subarray sum of all the subarrays that meet the conditions*. If no subarray meets the
 * conditions, return `0`.
 *
 * A ***subarray** is a contiguous non-empty sequence of elements within an array*.
 *
 * **Constraints:**
 *
 * - `1 <= k <= nums.length <= 105`
 * - `1 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumSubarraySum = function (nums, k) {
    let maxSum = 0;
    let currentSum = 0;
    let windowStart = 0;
    const seen = new Set();

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // Add the current element to the window and sum
        while (seen.has(nums[windowEnd])) {
            seen.delete(nums[windowStart]);
            currentSum -= nums[windowStart];
            windowStart++;
        }
        seen.add(nums[windowEnd]);
        currentSum += nums[windowEnd];

        // Check if we have a valid window of size k
        if (windowEnd - windowStart + 1 === k) {
            maxSum = Math.max(maxSum, currentSum);
            // Slide the window forward
            seen.delete(nums[windowStart]);
            currentSum -= nums[windowStart];
            windowStart++;
        }
    }

    return maxSum;
};

const nums = [1, 5, 4, 2, 9, 9, 9],
    k = 3;
// Output: 15
/* Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions */
console.log(maximumSubarraySum(nums, k));
