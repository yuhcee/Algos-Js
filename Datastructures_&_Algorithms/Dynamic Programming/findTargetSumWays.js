/**
 * **494. Target Sum**
 *
 * You are given an integer array `nums` and an integer `target`.
 *
 * You want to build an **expression** out of nums by adding one of the symbols
 * `'+'` and `'-'` before each integer in nums and then concatenate all the
 * integers.
 *
 * - For example, if `nums = [2, 1]`, you can add a `'+'` before `2` and a
 * `'-'` before `1` and concatenate them to build the expression `"+2-1"`.
 *
 * Return the number of different **expressions** that you can build, which
 * evaluates to target.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 20`
 * - `0 <= nums[i] <= 1000`
 * - `0 <= sum(nums[i]) <= 1000`
 * - `-1000 <= target <= 1000`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = function (nums, target) {
    // Dictionary to store current sums and their counts
    let dp = { 0: 1 };

    for (const num of nums) {
        const next = {};
        for (const [sum, count] of Object.entries(dp)) {
            const positive = +sum + num; // Add the current number
            const negative = +sum - num; // Subtract the current number

            // Update counts for the new sums
            next[positive] = (next[positive] || 0) + count;
            next[negative] = (next[negative] || 0) + count;
        }
        dp = next; // Move to the next state
    }

    // Return the count of ways to achieve the target sum
    return dp[target] || 0;
};

const nums = [1, 1, 1, 1, 1],
    target = 3;
// Output: 5
/* Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3 */
console.log(findTargetSumWays(nums, target));

const nums1 = [1],
    target1 = 1;
// Output: 1
console.log(findTargetSumWays(nums1, target1));
