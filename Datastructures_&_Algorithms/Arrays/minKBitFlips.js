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
            flipped ^= flip[i - k];  // Undo the effect of the flip `k` steps ago
        }

        if (nums[i] === flipped) {
            if (i + k > n) {
                return -1;  // Not enough space to flip k elements
            }
            flip[i] = 1;
            flipped ^= 1;  // Flip the current bit
            result++;
        }
    }

    return result;
};
