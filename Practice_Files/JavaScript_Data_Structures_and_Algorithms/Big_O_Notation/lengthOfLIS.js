/**
 * **300. Longest Increasing Subsequence**
 *
 * Given an integer array `nums`, return the length of the longest strictly increasing subsequence.
 *
 * A **subsequence** is a sequence that can be derived from an array by deleting some or no elements without
 * changing the order of the remaining elements. For example, [`3,6,2,7`] is a subsequence of the array [`0,
 * 3,1,6,2,2,7`].
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // init dp array
    const dp = Array(nums.length).fill(1);

    // populate dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    
};
