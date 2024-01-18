/**
 * **70. Climbing Stairs**
 *
 * You are climbing a staircase. It takes `n` steps to reach the top.
 *
 * Each time you can either climb `1` or `2` steps. In how many distinct
 * ways can you climb to the top?
 *
 * **Constraints:**
 *
 * - `1 <= n <= 45`
 *
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

const n1 = 2;
console.log(climbStairs(n1)); // Output: 2

const n2 = 3;
console.log(climbStairs(n2)); // Output: 3
