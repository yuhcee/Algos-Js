/**
 * **1493. Longest Subarray of 1's After Deleting One Element**
 *
 * Given a binary array `nums`, you should delete one element from it.
 *
 * Return *the size of the longest non-empty subarray containing only `1`'s in the resulting
 * array*. Return `0` if there is no such subarray.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `nums[i]` is either `0` or `1`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function (nums) {
    let maxLength = 0;
    let left = 0;
    let countZeros = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            countZeros++;

            while (countZeros === 2) {
                if (nums[left] === 0) {
                    countZeros -= 1;
                }
                left++;
            }
        }
        maxLength = Math.max(maxLength, right - left);
    }

    return maxLength;
};

const nums = [1, 1, 0, 1];
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
console.log(longestSubarray(nums));

const nums1 = [0, 1, 1, 1, 0, 1, 1, 0, 1];
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
console.log(longestSubarray(nums1));
