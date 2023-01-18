/**
 * **918. Maximum Sum Circular Subarray**
 *
 * Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a
 * non-empty **subarray** of `nums`.
 *
 * A **circular array** means the end of the array connects to the beginning of the array. Formally,
 * the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums
 * [(i - 1 + n) % n]`.
 *
 * A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for
 * a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1
 * % n == k2 % n`.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 3 * 104`
 * - `-3 * 104 <= nums[i] <= 3 * 104`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarraySumCircular = (nums) => {
    // case where all elements are negative
    let allNeg = true;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            allNeg = false;
            break;
        }
    }
    if (allNeg) {
        return Math.max(...nums);
    }

    // case where subarray is not circular
    let nonCircularMaxSum = nums[0];
    let nonCircularCurrSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nonCircularCurrSum = Math.max(nums[i], nonCircularCurrSum + nums[i]);
        nonCircularMaxSum = Math.max(nonCircularMaxSum, nonCircularCurrSum);
    }

    // case where subarray is circular
    let totalSum = 0;
    let circularMinSum = 0;
    let circularCurrSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        circularCurrSum += nums[i];
        circularCurrSum = Math.min(circularCurrSum, 0);
        circularMinSum = Math.min(circularMinSum, circularCurrSum);
    }

    return Math.max(nonCircularMaxSum, totalSum - circularMinSum);
};

const nums = [1, -2, 3, -2];
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
console.log(maxSubarraySumCircular(nums));
