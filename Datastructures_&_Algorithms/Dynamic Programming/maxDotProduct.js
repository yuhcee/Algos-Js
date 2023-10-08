/**
 * **1458. Max Dot Product of Two Subsequences**
 *
 * Given two arrays `nums1` and `nums2`.
 *
 * Return the maximum dot product between **non-empty** subsequences of
 * `nums1` and `nums2` with the same length.
 *
 * A subsequence of a array is a new array which is formed from the original
 * array by deleting some (can be none) of the characters without disturbing
 * the relative positions of the remaining characters. (ie, `[2,3,5]` is a
 * subsequence of `[1,2,3,4,5]` while `[1,5,3]` is not).
 *
 * **Constraints:**
 *
 * - `1 <= nums1.length, nums2.length <= 500`
 * - `-1000 <= nums1[i], nums2[i] <= 1000`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDotProduct = function (nums1, nums2) {};

const nums1 = [2, 1, -2, 5],
    nums2 = [3, 0, -6];
// Output: 18
/* Explanation: Take subsequence [2,-2] from nums1 and subsequence [3,-6] from nums2.
Their dot product is (2*3 + (-2)*(-6)) = 18. */
console.log(maxDotProduct(nums, nums2));

const nums11 = [3, -2],
    nums21 = [2, -6, 7];
// Output: 21
/* Explanation: Take subsequence [3] from nums1 and subsequence [7] from nums2.
Their dot product is (3*7) = 21. */
console.log(maxDotProduct(nums1, nums21));
