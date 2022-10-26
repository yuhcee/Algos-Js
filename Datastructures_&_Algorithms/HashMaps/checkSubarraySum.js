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
const checkSubarraySum = function (nums, k) {
    // initialize the hash map with index 0 for sum 0
    const map = new Map();
    map.set(0, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // if the remainder sum % k occurs for the first time
        if (!map.has(sum % k)) map.set(sum % k, i + 1);
        // if the subarray size is at least two
        else if (map.get(sum % k) < i) return true;
    }

    return false;
};

const nums = [23, 2, 4, 6, 7],
    k = 6;
// Output: true
/* Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6. */
console.log(checkSubarraySum(nums, k));

const nums1 = [23, 2, 6, 4, 7],
    k1 = 6;
// Output: true
/* Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer. */
console.log(checkSubarraySum(nums1, k1));

const nums2 = [23, 2, 6, 4, 7],
    k2 = 13;
// Output: false
console.log(checkSubarraySum(nums2, k2));
