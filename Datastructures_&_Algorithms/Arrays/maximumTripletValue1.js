/**
 * **2874. Maximum Value of an Ordered Triplet II**
 *
 * You are given a **0-indexed** integer array `nums`.
 *
 * Return ***the maximum value over all triplets of indices** `(i, j, k)` such that `i < j < k`*. If all such triplets
 * have a negative value, return `0`.
 *
 * The **value of a triplet of indices** `(i, j, k)` is equal to `(nums[i] - nums[j]) * nums[k]`.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumTripletValue = function (nums) {
    const n = nums.length;
    let maxValue = 0;

    // Step 1: Compute suffix max from the right for nums[k]
    const suffixMax = new Array(n).fill(0);
    suffixMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMax[i] = Math.max(nums[i], suffixMax[i + 1]);
    }

    // Step 2: Traverse from left to right and keep max of nums[i]
    let maxI = nums[0];
    for (let j = 1; j < n - 1; j++) {
        const potential = (maxI - nums[j]) * suffixMax[j + 1];
        maxValue = Math.max(maxValue, potential);
        maxI = Math.max(maxI, nums[j]);
    }

    return maxValue;
};
