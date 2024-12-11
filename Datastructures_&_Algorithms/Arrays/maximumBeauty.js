/**
 * **2779. Maximum Beauty of an Array After Applying Operation**
 *
 * You are given a **0-indexed** array `nums` and a **non-negative** integer
 * `k`.
 *
 * In one operation, you can do the following:
 *
 * - Choose an index `i` that **hasn't been chosen before** from the range `[0,
 * nums.length - 1]`.
 * - Replace `nums[i]` with any integer from the range `[nums[i] - k, nums[i] +
 * k]`.
 *
 * The **beauty** of the array is the length of the longest subsequence
 * consisting of equal elements.
 *
 * Return *the **maximum** possible beauty of the array `nums` after applying
 * the operation any number of times.*
 *
 * **Note** that you can apply the operation to each index **only once**.
 *
 * A **subsequence** of an array is a new array generated from the original
 * array by deleting some elements (possibly none) without changing the order
 * of the remaining elements.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i], k <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumBeauty = function (nums, k) {
    // Sort the array to simplify range checks
    nums.sort((a, b) => a - b);

    let maxBeauty = 0;
    let start = 0;

    // Sliding window approach
    for (let end = 0; end < nums.length; end++) {
        // Ensure the range is valid
        while (nums[end] > nums[start] + 2 * k) {
            start++;
        }

        // Update maximum beauty
        maxBeauty = Math.max(maxBeauty, end - start + 1);
    }

    return maxBeauty;
};
