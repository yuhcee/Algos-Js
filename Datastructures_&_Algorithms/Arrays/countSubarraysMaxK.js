/**
 * **2962. Count Subarrays Where Max Element Appears at Least K Times**
 *
 * You are given an integer array `nums` and a **positive** integer `k`.
 *
 * Return **the number of subarrays where the **maximum** element of nums appears
 * **at least** `k` times in that subarray.**
 *
 * A **subarray** is a contiguous sequence of elements within an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 * - `1 <= k <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countSubarraysMaxK = (nums, k) => {
    let maxNum = Math.max(...nums);
    let count = 0;
    let n = nums.length;

    let maxIndices = [-1]; // Initialize with -1 to handle edge case
    for (let i = 0; i < n; i++) {
        if (nums[i] === maxNum) {
            maxIndices.push(i);
        }
    }

    let indicesSize = maxIndices.length;

    for (let i = 1; i <= indicesSize - k; i++) {
        let left = maxIndices[i] - maxIndices[i - 1] - 1;
        let right = n - 1 - maxIndices[i + k - 1];
        count += (left + 1) * (right + 1);
    }

    return count;
};
