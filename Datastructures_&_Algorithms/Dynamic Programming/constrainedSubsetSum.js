/**
 * **1425. Constrained Subsequence Sum**
 *
 *
 * Given an integer array `nums` and an integer `k`, return the maximum sum of a **
 * non-empty** subsequence of that array such that for every two **consecutive** integers in the
 * subsequence, `nums[i]` and `nums[j]`, where `i < j`, the condition `j - i <= k` is satisfied.
 *
 * A *subsequence* of an array is obtained by deleting some number of elements (can be zero) from
 * the array, leaving the remaining elements in their original order.
 *
 * **Constraints:**
 *
 * - `1 <= k <= nums.length <= 105`
 * - `-104 <= nums[i] <= 104`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const constrainedSubsetSum = function (nums, k) {};

const nums = [10, 2, -10, 5, 20],
    k = 2;
// Output: 37
// Explanation: The subsequence is [10, 2, 5, 20].
console.log(constrainedSubsetSum(nums, k));
