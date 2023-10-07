/**
 * **1420. Build Array Where You Can Find The Maximum Exactly K Comparisons**
 *
 * You are given three integers `n`, `m` and `k`. Consider the following
 * algorithm to find the maximum element of an array of positive integers:
 *
 * You should build the array arr which has the following properties:
 *
 * - `arr` has exactly `n` integers.
 * - `1 <= arr[i] <= m` where `(0 <= i < n)`.
 * - After applying the mentioned algorithm to `arr`, the value `search_cost`
 * is equal to `k`.
 * Return *the number of ways to build the array `arr` under the mentioned
 * conditions*. As the answer may grow large, the answer **must be** computed
 * modulo `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 50`
 * - `1 <= m <= 100`
 * - `0 <= k <= n`
 *
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const numOfArrays = function (n, m, k) {};

const n = 2,
    m = 3,
    k = 1;
// Output: 6
// Explanation: The possible arrays are [1, 1], [2, 1], [2, 2], [3, 1], [3, 2] [3, 3]
console.log(numOfArrays(n, m, k));

const n1 = 5,
    m1 = 2,
    k1 = 3;
// Output: 0
// Explanation: There are no possible arrays that satisify the mentioned conditions.
console.log(numOfArrays(n1, m1, k1));
