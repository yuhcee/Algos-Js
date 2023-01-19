/**
 * **974. Subarray Sums Divisible by K**
 *
 * Given an integer array `nums` and an integer `k`, return *the number of non-empty **subarrays**
 * that have a sum divisible by `k`.
 *
 * A **subarray** is a **contiguous** part of an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 3 * 104`
 * - `-104 <= nums[i] <= 104`
 * - `2 <= k <= 104`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = (nums, k) => {
    let map = {};
    let sum = 0; // cumulative sum

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // mod twice for negative numbers
        const key = ((sum % k) + k) % k;
        // if map[key] is undefined set 1, else increase 1
        map[key] = map[key] + 1 || 1;
    }

    let s = 0;
    for (let i = 0; i < k; i++) {
        if (map[i] > 1) {
            s += (map[i] * (map[i] - 1)) / 2; // sum of 1 to map[i] - 1;
        }
    }
    return s + (map[0] || 0);
};

const nums = [4, 5, 0, -2, -3, 1],
    k = 5;
// Output: 7
/* Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3] */
console.log(subarraysDivByK(nums, k));
