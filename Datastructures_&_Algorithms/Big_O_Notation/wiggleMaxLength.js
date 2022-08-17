/**
 * **376. Wiggle Subsequence**
 *
 * A **wiggle sequence** is a sequence where the differences between successive numbers strictly
 * alternate between positive and negative. The first difference (if one exists) may be either positive
 * or negative. A sequence with one element and a sequence with two non-equal elements are trivially
 * wiggle sequences.
 *
 * - For example, `[1, 7, 4, 9, 2, 5]` is a **wiggle sequence** because the differences `(6, -3, 5, -7,
 * 3)` alternate between positive and negative.
 * - In contrast, `[1, 4, 7, 2, 5]` and `[1, 7, 4, 5, 5]` are not wiggle sequences. The first is not
 * because its first two differences are positive, and the second is not because its last difference is
 * zero.
 *
 * A **subsequence** is obtained by deleting some elements (possibly zero) from the original sequence,
 * leaving the remaining elements in their original order.
 *
 * Given an integer array `nums`, return *the length of the longest **wiggle subsequence** of nums*.
 *
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = (nums) => {
    // return nums length if less than 2
    if (nums.length < 2) return nums.length;

    let up = 1,
        down = 1;

    for (let i = 1; i < nums.length; i += 1) {
        // if elem is greater than prev, it wiggles up
        if (nums[i] > nums[i - 1]) up = down + 1;
        // else if elem is less than prev, it wiggles down
        else if (nums[i] < nums[i - 1]) down = up + 1;
    }

    // return max of up or down
    return Math.max(up, down);
};

const nums = [1, 7, 4, 9, 2, 5];
// Output: 6
// Explanation: The entire sequence is a wiggle sequence with differences (6, -3, 5, -7, 3).
console.log(wiggleMaxLength(nums));

const nums2 = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
// Output: 7
/* Explanation: There are several subsequences that achieve this length.
One is [1, 17, 10, 13, 10, 16, 8] with differences (16, -7, 3, -3, 6, -8). */
console.log(wiggleMaxLength(nums2));
const nums3 = [1,2,3,4,5,6,7,8,9]
// Output: 2
console.log(wiggleMaxLength(nums3));
