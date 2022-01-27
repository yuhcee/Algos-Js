/**
 * **Maximum Length of Repeated Subarray**
 *
 * Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number} number
 */

const findMaxLength = (nums1, nums2) => {
    const memo = Array(nums1.length + 1)
        .fill()
        .map((_) => Array(nums2.length + 1).fill(0));
    let maxAns = 0;

    for (let i = 1; i <= nums1.length; i += 1) {
        for (let j = 1; j <= nums2.length; j += 1) {
            if (nums1[i - 1] == nums2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1];
                maxAns = Math.max(maxAns, memo[i][j]);
            }
        }
    }
    return maxAns;
};

const nums1 = [1, 2, 3, 2, 1],
    nums2 = [3, 2, 1, 4, 7]; // Output: 3
console.log(findMaxLength(nums1, nums2));

const numsi = [0, 0, 0, 0, 0],
    numsj = [0, 0, 0, 0, 0]; // Output: 5
console.log(findMaxLength(numsi, numsj));
