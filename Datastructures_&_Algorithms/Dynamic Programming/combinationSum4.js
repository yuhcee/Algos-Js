/**
 * **377. Combination Sum IV**
 *
 * Given an array of distinct integers `nums` and a target integer `target`, return *the number of possible combinations that add up to `target`*.
 *
 * The test cases are generated so that the answer can fit in a **32-bit** integer.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // sort nums array
    nums.sort((a, b) => a - b);
    // init dp array
    const dp = new Array(target).fill(-1);

    const solve = (n = 0) => {
        if (target == n) return 1;

        if (dp[n] != -1) return dp[n];

        let ways = 0;
        nums.forEach((num, idx) => {
            if (num <= target - n) {
                ways += solve(n + nums[idx]);
            }
        });
        return (dp[n] = ways);
    };
    return solve();
};
const nums = [1, 2, 3],
    target = 4;
/* Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations. */
console.log(combinationSum4(nums, target));
const nums1 = [9],
    target1 = 3;
// Output: 0
console.log(combinationSum4(nums1, target1));
