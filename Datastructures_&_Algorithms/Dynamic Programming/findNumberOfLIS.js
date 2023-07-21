/**
 * **673. Number of Longest Increasing Subsequence**
 *
 * Given an integer array `nums`, return *the number of longest increasing subsequences*.
 *
 * **Notice** that the sequence has to be **strictly** increasing.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 2000`
 * - `-106 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
    const n = nums.length;
    let maxLength = 1; // Initialize the maximum length of increasing subsequences
    let count = 0; // Initialize the count of longest increasing subsequences

    // Initialize lengths and counts arrays
    const lengths = new Array(n).fill(1); // lengths array stores the length of increasing subsequences ending at each index
    const counts = new Array(n).fill(1); // counts array stores the count of increasing subsequences ending at each index, initialized to 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                // Check if the current number can extend the increasing subsequence ending at index j
                if (lengths[j] + 1 > lengths[i]) {
                    // If nums[i] can extend the current longest subsequence, update lengths[i] and counts[i]
                    lengths[i] = lengths[j] + 1;
                    counts[i] = counts[j];
                } else if (lengths[j] + 1 === lengths[i]) {
                    // If nums[i] can form another subsequence of the same length as the current longest subsequence, increment counts[i]
                    counts[i] += counts[j];
                }
            }
        }
        maxLength = Math.max(maxLength, lengths[i]); // Update the maximum length of increasing subsequences
    }

    // Sum counts for the longest subsequences
    for (let i = 0; i < n; i++) {
        if (lengths[i] === maxLength) {
            count += counts[i]; // Sum counts for subsequences with the maximum length
        }
    }

    return count; // Return the count of longest increasing subsequences
};

const nums = [1, 3, 5, 4, 7];
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
console.log(findNumberOfLIS(nums));
