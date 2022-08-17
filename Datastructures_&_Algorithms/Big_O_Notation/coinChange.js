/**
 * **322. Coin Change**
 *
 * You are given an integer array `coins` representing coins of different denominations and an integer
 * `amount` representing a total amount of money.
 *
 * Return *the fewest number of coins that you need to make up that amount*. If that amount of money
 * cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Number.MAX_VALUE);

    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    const ans = dp[dp.length - 1];

    return ans === Number.MAX_VALUE ? -1 : ans;
};

const coins = [1, 2, 5],
    amount = 11; // Output: 3
// Explanation: 11 = 5 + 5 + 1
const coins1 = [2],
    amount1 = 3; // Output: -1;
const coins2 = [1],
    amount2 = 0; // Output: 0;

console.log(coinChange(coins, amount));
console.log(coinChange(coins1, amount1));
console.log(coinChange(coins2, amount2));``
