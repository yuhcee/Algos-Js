/**
 * **2439. Minimize Maximum of Array**
 *
 * You are given a **0-indexed** array nums comprising of `n` non-negative integers.
 *
 * In one operation, you must:
 *
 * - Choose an integer `i` such that `1 <= i < n` and `nums[i] > 0`.
 * - Decrease `nums[i]` by 1.
 * - Increase `nums[i - 1]` by 1.
 *
 * Return *the **minimum** possible value of the **maximum** integer of `nums` after performing any number of operations*.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `2 <= n <= 105`
 * - `0 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = function (nums) {
    let sum = 0;
    let maxNum = 0;
    nums.forEach((num, key) => {
        sum += num;
        maxNum = Math.max(maxNum, Math.floor((sum + key) / (key + 1)));
    });
    return maxNum;
};

const nums = [3, 7, 1, 6];
// Output: 5
/* Explanation:
One set of optimal operations is as follows:
1. Choose i = 1, and nums becomes [4,6,1,6].
2. Choose i = 3, and nums becomes [4,6,2,5].
3. Choose i = 1, and nums becomes [5,5,2,5].
The maximum integer of nums is 5. It can be shown that the maximum number cannot be less than 5.
Therefore, we return 5. */
console.log(minimizeArrayValue(nums));
