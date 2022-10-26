/**
 * **523. Continuous Subarray Sum**
 *
 * Given an integer array `nums` and an integer `k`, return *`true` if `nums` has a continuous subarray
 * of size **at least two** whose elements sum up to a multiple of `k`, or `false` otherwise.
 *
 * An integer `x` is a multiple of `k` if there exists an integer n such that `x = n * k`. 0 is always
 * a multiple of `k`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 109`
 * - `0 <= sum(nums[i]) <= 231 - 1`
 * - `1 <= k <= 231 - 1`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {};

const nums = [23, 2, 4, 6, 7],
    k = 6;
// Output: true
/* Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6. */
console.log(checkSubarraySum(nums, k));
