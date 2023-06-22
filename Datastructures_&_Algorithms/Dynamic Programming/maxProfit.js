/**
 * **714. Best Time to Buy and Sell Stock with Transaction Fee**
 *
 * You are given an array prices where prices[i] is the price of a given stock on the ith day,
 * and an integer fee representing a transaction fee.
 *
 * Find the maximum profit you can achieve. You may complete as many transactions as you like,
 * but you need to pay the transaction fee for each transaction.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the
 * stock before you buy again).
 *
 * **Constraints:**
 *
 * - `1 <= prices.length <= 5 * 104`
 * - `1 <= prices[i] < 5 * 104`
 * - `0 <= fee < 5 * 104`
 *
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
    const n = prices.length;
    let cash = 0; // represents the maximum profit we have if we don't own any stock
    let hold = -prices[0]; // represents the maximum profit we have if we own a stock

    for (let i = 1; i < n; i++) {
        // Update the maximum profit if we sell the stock on the current day
        cash = Math.max(cash, hold + prices[i] - fee);

        // Update the maximum profit if we buy the stock on the current day
        hold = Math.max(hold, cash - prices[i]);
    }

    return cash; // return the maximum profit without owning any stock
};

const prices = [1, 3, 2, 8, 4, 9],
    fee = 2;
// Output: 8
/* Explanation: The maximum profit can be achieved by:
- Buying at prices[0] = 1
- Selling at prices[3] = 8
- Buying at prices[4] = 4
- Selling at prices[5] = 9
The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8. */
console.log(maxProfit(prices, fee));

const prices1 = [1, 3, 7, 5, 10, 3],
    fee1 = 3;
// Output: 6
console.log(maxProfit(prices1, fee1));
