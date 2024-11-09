/**
 * **3133. Minimum Array End**
 *
 * You are given two integers `n` and `x`. You have to construct an array of **positive** integers `nums` of
 * size `n` where for every `0 <= i < n - 1`, `nums[i + 1]` is **greater than** `nums[i]`, and the result of
 * the bitwise `AND` operation between all elements of `nums` is `x`.
 *
 * Return the **minimum** possible value of `nums[n - 1]`.
 *
 * **Constraints:**
 *
 * - `1 <= n, x <= 108`
 *
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
const minEnd = function (n, x) {
    let result = BigInt(x);
    let remaining = BigInt(n - 1);
    let position = 1n;

    while (remaining > 0n) {
        if ((BigInt(x) & position) === 0n) {
            if (remaining & 1n) {
                result |= position;
            }
            remaining >>= 1n;
        }
        position <<= 1n;
    }

    return Number(result);
};

const n = 3,
    x = 4;
// Output: 6
// Explanation: nums can be [4,5,6] and its last element is 6.
console.log(minEnd(n, x));

const n1 = 2,
    x1 = 7;
// Output: 15
// Explanation: nums can be [7,15] and its last element is 15.
console.log(minEnd(n1, x1));
