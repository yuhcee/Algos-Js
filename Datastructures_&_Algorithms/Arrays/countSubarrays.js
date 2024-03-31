/**
 * **2444. Count Subarrays With Fixed Bounds**
 *
 * You are given an integer array nums and two integers minK and maxK.
 *
 * A **fixed-bound** subarray of `nums` is a subarray that satisfies the
 * following conditions:
 *
 * - The **minimum** value in the subarray is equal to `minK`.
 * - The **maximum** value in the subarray is equal to `maxK`.
 *
 * Return *the number of fixed-bound subarrays*.
 *
 * A **subarray** is a **contiguous** part of an array.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * - `1 <= nums[i], minK, maxK <= 106`
 *
 *
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
    // left : Index of value out of range
    // min : Index of minimum value in range
    // max : Index of maximum value in range
    // count : Number of valid subarrays
    let left = -1,
        min = -1,
        max = -1,
        count = 0;

    for (let i = 0; i < nums.length; i++) {
        // If value is out of given range
        if (nums[i] < minK || nums[i] > maxK) left = i;

        // Store index of minK
        if (nums[i] === minK) min = i;

        // Store index of maxK
        if (nums[i] === maxK) max = i;

        // Math.min(min, max) gives minimum index that should be considered
        let c = Math.min(min, max) - left;
        if (c > 0) count += c;
    }
    return count;
};

const nums = [1, 3, 5, 2, 7, 5],
    minK = 1,
    maxK = 5;
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

console.log(countSubarrays(nums, minK, maxK));

const nums1 = [1, 1, 1, 1],
    minK1 = 1,
    maxK1 = 1;
// Output: 10
// Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
console.log(countSubarrays(nums1, minK1, maxK1));
