/**
 * **2270. Number of Ways to Split Array**
 *
 * You are given a **0-indexed** integer array `nums` of length `n`.
 *
 * `nums` contains a **valid split** at index `i` if the following are true:
 *
 * - The sum of the first `i + 1` elements is **greater than or equal to** the
 * sum of the last `n - i - 1` elements.
 * - There is **at least one** element to the right of i. That is, `0 <= i < n
 * - 1`.
 *
 * Return *the number of **valid splits** in nums*.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * - `-105 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {number}
 */
const waysToSplitArray = function (nums) {
    const n = nums.length;
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    let validSplits = 0;

    for (let i = 0; i < n - 1; i++) {
        leftSum += nums[i];
        let rightSum = totalSum - leftSum;

        if (leftSum >= rightSum) {
            validSplits++;
        }
    }

    return validSplits;
};

const nums = [10, 4, -8, 7];
// Output: 2;
/* Explanation: 
There are three ways of splitting nums into two non-empty parts:
- Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
- Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
- Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
Thus, the number of valid splits in nums is 2. */
console.log(waysToSplitArray(nums));
