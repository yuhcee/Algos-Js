/**
 * **2873. Maximum Value of an Ordered Triplet I**
 *
 * You are given a **0-indexed** integer array nums.
 *
 * Return ***the maximum value over all triplets of indices** `(i, j, k)` such that `i < j < k`*. If all such triplets have a negative value, return 0.
 *
 * The **value of a triplet of indices** `(i, j, k)` is equal to `(nums[i] - nums[j]) * nums[k]`.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 100`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumTripletValue = function (nums) {
    let maxValue = 0;
    const n = nums.length;

    // Try all possible combinations of i, j, k
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const currentValue = (nums[i] - nums[j]) * nums[k];
                maxValue = Math.max(maxValue, currentValue);
            }
        }
    }

    // Return 0 if maxValue is negative, otherwise return maxValue
    return maxValue < 0 ? 0 : maxValue;
};
