/**
 * **121. Best Time to Buy and Sell Stock**
 *
 * You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.
 *
 * You want to maximize your profit by choosing a **single day** to buy one stock and choosing a
 * **different day in the future** to sell that stock.
 *
 * Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any
 * profit, return `0`.
 *
 * **Constraints:**
 *
 * - `1 <= prices.length <= 105`
 * - `0 <= prices[i] <= 104`
 *
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let minPrice = Infinity; // Initialize the minimum price to a very large value
    let maxProfit = 0; // Initialize the maximum profit to 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // If the current price is lower than the minimum price seen so far, update the minimum price
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // If the difference between the current price and the minimum price is greater than the maximum profit, update the maximum profit
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
// Output: 5
/* Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. */
console.log(maxProfit(prices)); // Output: 5
