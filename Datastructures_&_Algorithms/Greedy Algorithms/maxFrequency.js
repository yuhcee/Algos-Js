/**
 * **1838. Frequency of the Most Frequent Element**
 *
 *
 * The **frequency** of an element is the number of times it occurs in
 * an array.
 *
 * You are given an integer array `nums` and an integer `k`. In one
 * operation, you can choose an index of `nums` and increment the
 * element at that index by `1`.
 *
 * Return *the **maximum possible frequency** of an element after
 * performing **at most** `k` operations.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 105`
 * - `1 <= k <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function (nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let maxFreq = 0;
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Check if the sum of differences in the current window is more than k
        while (nums[right] * (right - left + 1) - sum > k) {
            sum -= nums[left];
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    return maxFreq;
};
