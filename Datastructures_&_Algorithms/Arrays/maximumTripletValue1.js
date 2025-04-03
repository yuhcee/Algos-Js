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

const nums = [12, 6, 1, 2, 7];
// Output: 77
/* Explanation: The value of the triplet (0, 2, 4) is (nums[0] - nums[2]) * nums[4] = 77.
It can be shown that there are no ordered triplets of indices with a value greater than 77. */
console.log(maximumTripletValue(nums));

const nums1 = [1, 10, 3, 4, 19];
// Output: 133
/* Explanation: The value of the triplet (1, 2, 4) is (nums[1] - nums[2]) * nums[4] = 133.
It can be shown that there are no ordered triplets of indices with a value greater than 133.
 */
console.log(maximumTripletValue(nums1));

const nums2 = [1, 2, 3];
// Output: 0
/* Explanation: The only ordered triplet of indices (0, 1, 2) has a negative value of (nums[0] - nums[1]) * nums[2] = -3. Hence, the answer would be 0. */
console.log(maximumTripletValue(nums2));
