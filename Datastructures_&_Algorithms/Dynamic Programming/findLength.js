/**
 * **718. Maximum Length of Repeated Subarray**
 *
 * Given two integer arrays `nums1` and `nums2`, return *the maximum length of a subarray that appears in **both**
 * arrays*.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = function (nums1, nums2) {
    const N = nums1.length + 1,
        M = nums2.length + 1,
        memo = Array(N)
            .fill()
            .map((_) => Array(M).fill(0));
};
