/**
 * **2958. Length of Longest Subarray With at Most K Frequency**
 *
 * You are given an integer array `nums` and an integer `k`.
 *
 * The **frequency** of an element `x` is the number of times it occurs in an
 * array.
 *
 * An array is called **good** if the frequency of each element in this array is
 * **less than or equal** to `k`.
 *
 * Return *the length of the **longest good** subarray of `nums`.*
 *
 * A **subarray** is a contiguous non-empty sequence of elements within an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 * - `1 <= k <= nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubarrayLength = (nums, k) => {
    let i = 0;
    let j = 0;
    let n = nums.length;
    let ans = 1;
    let map = new Map();

    while (i < n) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        while (map.get(nums[i]) > k) {
            map.set(nums[j], map.get(nums[j]) - 1);
            j++;
        }
        ans = Math.max(ans, i - j + 1);
        i++;
    }
    return ans;
};
