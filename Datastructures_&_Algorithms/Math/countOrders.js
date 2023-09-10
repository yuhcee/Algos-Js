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

const n1 = 2;
// Output: 6
/* Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2. */
console.log(countOrders(n1));

const n2 = 3;
// Output: 90
console.log(countOrders(n2));
