/**
 * **1027. Longest Arithmetic Subsequence**
 *
 * Given an array `nums` of integers, return *the length of the longest arithmetic subsequence in
 * `nums`*.
 *
 * **Note** that:
 *
 * - A **subsequence** is an array that can be derived from another array by deleting some or no
 * elements without changing the order of the remaining elements.
 * - A sequence `seq` is arithmetic if `seq[i + 1] - seq[i]` are all the same value (for `0 <= i < seq.
 * length - 1`).
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 1000`
 * - `0 <= nums[i] <= 500`
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestArithSeqLength = function (nums) {
    // Initialize a dynamic programming map to store the lengths of arithmetic subsequences
    // The map will have the form: dp[i][diff] = length
    // `dp[i][diff]` represents the length of the arithmetic subsequence ending at index `i` with a common difference `diff`
    const dp = new Map();

    // Initialize the result to store the maximum length
    let maxLen = 0;

    // Iterate over the array elements
    for (let i = 0; i < nums.length; i++) {
        // Create a new map entry for the current index
        dp.set(i, new Map());

        // Iterate over the elements before the current index
        for (let j = 0; j < i; j++) {
            // Calculate the difference between the current element and the previous element
            const diff = nums[i] - nums[j];

            // Get the length of the arithmetic subsequence ending at index `j` with the common difference `diff`
            const len = dp.get(j).get(diff) || 1;

            // Update the length of the arithmetic subsequence ending at index `i` with the common difference `diff`
            dp.get(i).set(diff, len + 1);

            // Update the maximum length
            maxLen = Math.max(maxLen, dp.get(i).get(diff));
        }
    }

    // Return the maximum length of the arithmetic subsequence
    return maxLen;
};

const nums = [3, 6, 9, 12];
// Output: 4
// Explanation:  The whole array is an arithmetic sequence with steps of length = 3.
console.log(longestArithSeqLength(nums));

const nums1 = [9, 4, 7, 2, 10];
// Output: 3
// Explanation:  The longest arithmetic subsequence is [4,7,10].
console.log(longestArithSeqLength(nums1));

const nums2 = [20, 1, 15, 3, 10, 5, 8];
// Output: 4
// Explanation:  The longest arithmetic subsequence is [20,15,10,5].
console.log(longestArithSeqLength(nums2));
