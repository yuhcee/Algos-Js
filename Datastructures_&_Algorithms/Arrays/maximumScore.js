/**
 * **1793. Maximum Score of a Good Subarray**
 *
 * You are given an array of integers `nums` (**0-indexed**) and an integer `k`.
 *
 * The **score** of a subarray `(i, j)` is defined as `min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)`. A **good** subarray is a subarray where `i <= k <= j`.
 *
 * Return *the maximum possible **score** of a **good** subarray*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 2 * 104`
 * - `0 <= k < nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumScore = function (nums, k) {
    let left = k,
        right = k;
    let minValue = nums[k];
    let maxScore = minValue;

    while (left > 0 || right < nums.length - 1) {
        if (left == 0) {
            right++;
            minValue = Math.min(minValue, nums[right]);
        } else if (right == nums.length - 1) {
            left--;
            minValue = Math.min(minValue, nums[left]);
        } else if (nums[left - 1] >= nums[right + 1]) {
            left--;
            minValue = Math.min(minValue, nums[left]);
        } else {
            right++;
            minValue = Math.min(minValue, nums[right]);
        }
        maxScore = Math.max(maxScore, minValue * (right - left + 1));
    }

    return maxScore;
};

const nums = [1, 4, 3, 7, 4, 5],
    k = 3;
// Output: 15
// Explanation: The optimal subarray is (1, 5) with a score of min(4,3,7,4,5) * (5-1+1) = 3 * 5 = 15.
console.log(maximumScore(nums, k));
