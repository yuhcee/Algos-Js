/**
 * **1770. Maximum Score from Performing Multiplication Operations**
 *
 * You are given two integer arrays `nums` and `multipliers` of size `n` and `m` respectively, where `n >= m`. The
 * arrays are **1-indexed**.
 *
 * You begin with a score of `0`. You want to perform **exactly** `m` operations. On the `ith` operation **
 * (1-indexed)**, you will:
 *
 * - Choose one integer `x` from **either the start or the end** of the array `nums`.
 * - Add `multipliers[i] * x` to your score.
 * - Remove `x` from the array `nums`.
 *
 * Return *the **maximum** score after performing `m` operations*.
 *
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
const maximumScore = function (nums, multipliers) {
    const n = nums.length;
    const m = multipliers.length;

    if (m === 1) return Math.max(nums[0] * multipliers[0], nums[n - 1] * multipliers[0]);

    let next = new Array(m).fill(0);

    for (let start = 0; start < m; start += 1) {
        next[start] = Math.max(multipliers[m - 1] * nums[start], multipliers[m - 1] * nums[n - m + start]);
    }

    for (let i = m - 2; i >= 0; i -= 1) {
        const current = new Array(m).fill(0);

        for (let start = m - 1; start >= 0; start -= 1) {
            const end = n - (i + 1) + start;
            const takeStart = next[start + 1] + multipliers[i] * nums[start];
            const takeEnd = next[start] + multipliers[i] * nums[end];

            current[start] = Math.max(takeStart, takeEnd);
        }

        next = current;
    }

    return next[0];
};

const nums = [1, 2, 3],
    multipliers = [3, 2, 1];
// Output: 14
/* Explanation: An optimal solution is as follows:
- Choose from the end, [1,2,3], adding 3 * 3 = 9 to the score.
- Choose from the end, [1,2], adding 2 * 2 = 4 to the score.
- Choose from the end, [1], adding 1 * 1 = 1 to the score.
The total score is 9 + 4 + 1 = 14. */
console.log(maximumScore(nums, multipliers));
