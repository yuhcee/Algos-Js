/**
 * **518. Coin Change II**
 *
 * You are given an integer array `coins` representing coins of different
 * denominations and an integer `amount` representing a total amount of money.
 *
 * Return *the number of combinations that make up that amount*. If that amount of
 * money cannot be made up by any combination of the coins, return `0`.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * The answer is **guaranteed** to fit into a signed **32-bit** integer.
 *
 * **Constraints:**
 *
 * - `1 <= coins.length <= 300`
 * - `1 <= coins[i] <= 5000`
 * - All the values of `coins` are **unique**.
 * - `0 <= amount <= 5000`
 *
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
    // Create a 2D array dp where dp[i][j] represents the number of combinations to make amount j
    // using the first i coins.
    const dp = Array.from({ length: coins.length + 1 }, () => Array(amount + 1).fill(0));

    // There is exactly one way to make amount 0, which is using no coins.
    for (let i = 0; i <= coins.length; i++) {
        dp[i][0] = 1;
    }

    // Loop through each coin and each amount to fill in the dp array.
    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            // Calculate the number of combinations without using the current coin.
            dp[i][j] = dp[i - 1][j];

            // If the current amount is greater than or equal to the current coin value,
            // then add the number of combinations that use the current coin to dp[i][j].
            if (j >= coins[i - 1]) {
                dp[i][j] += dp[i][j - coins[i - 1]];
            }
        }
    }

    // The result is stored in dp[coins.length][amount].
    return dp[coins.length][amount];
};

const amount = 5,
    coins = [1, 2, 5];
// Output: 4
/* Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1 */
console.log(change(amount, coins));
