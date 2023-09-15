/**
 * **309. Best Time to Buy and Sell Stock with Cooldown**
 *
 * You are given an array `prices` where `prices[i]` is the price
 * of a given stock on the `ith` day.
 *
 * Find the maximum profit you can achieve. You may complete as
 * many transactions as you like (i.e., buy one and sell one
 * share of the stock multiple times) with the following
 * restrictions:
 *
 *  - After you sell your stock, you cannot buy stock on the next
 * day (i.e., cooldown one day).
 * **Note:** You may not engage in multiple transactions
 * simultaneously (i.e., you must sell the stock before you buy
 * again).
 *
 * **Constraints:**
 *
 * - `1 <= prices.length <= 5000`
 * - `0 <= prices[i] <= 1000`
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (prices == null || prices.length === 0) return 0;

    let sold = 0;
    let hold = -Infinity;
    let rest = 0;

    for (let p of prices) {
        hold = Math.max(hold, rest - p);
        rest = Math.max(rest, sold);
        sold = hold + p;
    }

    return Math.max(sold, rest);
};

const prices = [1, 2, 3, 0, 2];
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
console.log(maxProfit(prices));

const prices1 = [1];
// Output: 0
console.log(maxProfit(prices1));
