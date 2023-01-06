/**
 * **1833. Maximum Ice Cream Bars**
 *
 * It is a sweltering summer day, and a boy wants to buy some ice cream bars.
 *
 * At the store, there are n ice cream bars. You are given an array costs of length `n`, where `costs[i]` is the
 * price of the `ith` ice cream bar in `coins`. The boy initially has `coins` coins to spend, and he wants to buy
 * as many ice cream bars as possible.
 *
 * Return *the **maximum** number of ice cream bars the boy can buy with coins coins*.
 *
 * **Note**: The boy can buy the ice cream bars in any order.
 *
 * **Constraints:**
 *
 * - `costs.length == n`
 * - `1 <= n <= 105`
 * - `1 <= costs[i] <= 105`
 * - `1 <= coins <= 108`
 *
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
    costs.sort((a, b) => a - b);
    let count = 0;

    for (let cost of costs) {
        if (coins < cost) {
            break;
        } else {
            coins -= cost;
            count += 1;
        }
    }

    return count;
};
