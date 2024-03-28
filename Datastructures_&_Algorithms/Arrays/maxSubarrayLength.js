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

const nums = [1, 2, 3, 1, 2, 3, 1, 2],
    k = 2;
// Output: 6
/* Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
It can be shown that there are no good subarrays with length more than 6. */
console.log(maxSubarrayLength(nums, k));

const nums1 = [1, 2, 1, 2, 1, 2, 1, 2],
    k1 = 1;
// Output: 2
/* Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
It can be shown that there are no good subarrays with length more than 2. */
console.log(maxSubarrayLength(nums1, k1));
