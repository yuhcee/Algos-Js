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
    let maxLength = 0; // Length of the longest subarray of 1's
    let left = 0; // Left pointer of the sliding window
    let countZeros = 0; // Count of zeros in the current window

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            countZeros++; // Increment countZeros for each 0 encountered

            // If countZeros becomes 2, we have more than one zero in the window
            // Move the left pointer to the right until we exclude one zero from the window
            while (countZeros === 2) {
                if (nums[left] === 0) {
                    countZeros--; // Decrement countZeros as we exclude a zero from the window
                }
                left++; // Move the left pointer to the right
            }
        }

        // Update maxLength with the maximum length of the window
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

const nums2 = [1, 1, 1];
// Output: 2
// Explanation: You must delete one element.
console.log(longestSubarray(nums2));
