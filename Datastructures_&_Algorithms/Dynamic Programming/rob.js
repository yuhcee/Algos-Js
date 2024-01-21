/**
 * **198. House Robber**
 *
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint
 * stopping you from robbing each of them is that adjacent houses have
 * security systems connected and **it will automatically contact the
 * police if two adjacent houses were broken into on the same night**.
 *
 * Given an integer array `nums` representing the amount of money of each
 * house, return *the maximum amount of money you can rob tonight
 * **without alerting the police***.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `0 <= nums[i] <= 400`
 *
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    // Initialize an array to store the maximum money robbed up to each house.
    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    // Iterate through the rest of the houses and calculate the maximum money robbed.
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    // The final element in the dp array holds the maximum money that can be robbed.
    return dp[nums.length - 1];
};
const nums = [1, 2, 3, 1];
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
console.log(rob(nums));
