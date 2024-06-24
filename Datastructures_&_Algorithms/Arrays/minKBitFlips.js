/**
 * **995. Minimum Number of K Consecutive Bit Flips**
 *
 * You are given a binary array `nums` and an integer `k`.
 *
 * A **k-bit flip** is choosing a **subarray** of length `k` from `nums` and
 * simultaneously changing every `0` in the subarray to `1`, and every `1` in
 * the subarray to `0`.
 *
 * Return *the minimum number of **k-bit flips** required so that there is no
 * `0` in the array*. If it is not possible, return `-1`.
 *
 * A subarray is a **contiguous** part of an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= k <= nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minKBitFlips = function (nums, k) {
    const n = nums.length;
    const flip = new Array(n).fill(0);
    let flipped = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (i >= k) {
            flipped ^= flip[i - k]; // Undo the effect of the flip `k` steps ago
        }

        if (nums[i] === flipped) {
            if (i + k > n) {
                return -1; // Not enough space to flip k elements
            }
            flip[i] = 1;
            flipped ^= 1; // Flip the current bit
            result++;
        }
    }

    return result;
};

const nums = [0, 1, 0],
    k = 1;
// Output: 2
// Explanation: Flip nums[0], then flip nums[2].
console.log(minKBitFlips(nums, k));

const nums1 = [1, 1, 0],
    k1 = 2;
// Output: -1
// Explanation: No matter how we flip subarrays of size 2, we cannot make the array become [1,1,1].
console.log(minKBitFlips(nums1, k1));
