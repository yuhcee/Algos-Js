/**
 * **1269. Number of Ways to Stay in the Same Place After Some Steps**
 *
 * You have a pointer at index `0` in an array of size `arrLen`. At each
 * step, you can move 1 position to the left, 1 position to the right in
 * the array, or stay in the same place (The pointer should not be
 * placed outside the array at any time).
 *
 * Given two integers `steps` and `arrLen`, return the number of ways
 * such that your pointer is still at index `0` after **exactly**
 * `steps` steps. Since the answer may be too large, return it
 * **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= steps <= 500`
 * - `1 <= arrLen <= 106`
 *
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
const numWays = function (steps, arrLen) {
    const MOD = 1000000007;

    // The maximum index we can reach is min(arrLen, steps/2 + 1)
    const maxLen = Math.min(arrLen, Math.floor(steps / 2) + 1);
    const dp = new Array(steps + 1).fill(0).map(() => new Array(maxLen).fill(0));

    dp[0][0] = 1;

    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j < maxLen; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j - 1 >= 0) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
            }
            if (j + 1 < maxLen) {
                dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MOD;
            }
        }
    }

    return dp[steps][0];
};

const steps = 3,
    arrLen = 2;
// Output: 4
/* Explanation: There are 4 differents ways to stay at index 0 after 3 steps.
Right, Left, Stay
Stay, Right, Left
Right, Stay, Left
Stay, Stay, Stay */
console.log(numWays(steps, arrLen));

const steps1 = 2,
    arrLen1 = 4;
// Output: 2
/* Explanation: There are 2 differents ways to stay at index 0 after 2 steps
Right, Left
Stay, Stay */
console.log(numWays(steps1, arrLen1));

const steps2 = 4,
    arrLen2 = 2;
// Output: 8
console.log(numWays(steps2, arrLen2));
