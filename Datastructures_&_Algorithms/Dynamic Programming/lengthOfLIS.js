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

    let longest = 0;
    for (let c of dp) longest = Math.max(longest, c);

    return longest;
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
console.log(lengthOfLIS(nums));
const nums1 = [0, 1, 0, 3, 2, 3];
// Output: 4
console.log(lengthOfLIS(nums1));

const nums2 = [7, 7, 7, 7, 7, 7, 7];
// Output: 1
console.log(lengthOfLIS(nums2));
