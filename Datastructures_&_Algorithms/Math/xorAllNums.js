/**
 * **2425. Bitwise XOR of All Pairings**
 *
 * You are given two **0-indexed** arrays, `nums1` and `nums2`, consisting
 * of non-negative integers. There exists another array, `nums3`, which
 * contains the bitwise XOR of **all pairings** of integers between `nums1`
 * and `nums2` (every integer in `nums1` is paired with every integer in
 * `nums2` **exactly once**).
 *
 * Return the **bitwise XOR** of all integers in nums3.
 *
 * **Constraints:**
 *
 * - `1 <= nums1.length, nums2.length <= 105`
 * - `0 <= nums1[i], nums2[j] <= 109`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const xorAllNums = function (nums1, nums2) {
    let xorNums1 = 0,
        xorNums2 = 0;

    // XOR all elements in nums1
    for (const num of nums1) {
        xorNums1 ^= num;
    }

    // XOR all elements in nums2
    for (const num of nums2) {
        xorNums2 ^= num;
    }

    // Determine the final result based on the lengths
    const n1 = nums1.length,
        n2 = nums2.length;
    let result = 0;
    if (n1 % 2 !== 0) {
        result ^= xorNums2;
    }
    if (n2 % 2 !== 0) {
        result ^= xorNums1;
    }

    return result;
};
