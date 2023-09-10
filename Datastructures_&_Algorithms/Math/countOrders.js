/**
 * **359. Count All Valid Pickup and Delivery Options**
 *
 * Given `n` orders, each order consist in pickup and delivery services.
 *
 * Count all valid pickup/delivery possible sequences such that delivery(i) is
 * always after of pickup(i).
 *
 * Since the answer may be too large, return it modulo 10^9 + 7.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 500`
 *
 * @param {number} n
 * @return {number}
 */
const countOrders = function (n) {
    let mod = 1e9 + 7;
    let ans = 1;

    for (let i = 1; i <= n; i++) {
        ans = (ans * (2 * i - 1) * i) % mod;
    }

    return ans;
};

const n = 1;
// Output: 1
// Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.
console.log(countOrders(n));
