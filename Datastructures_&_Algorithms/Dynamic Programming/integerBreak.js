/**
 * **343. Integer Break**
 *
 * Given an integer `n`, break it into the sum of `k` **positive integers**,
 * where `k >= 2`, and maximize the product of those integers.
 *
 * Return *the maximum product you can get*.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 58`
 *
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
    if (n === 2) return 1;
    if (n === 3) return 2;

    let product = 1;
    while (n > 4) {
        product *= 3;
        n -= 3;
    }

    product *= n;
    return product;
};

const n = 2;
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
console.log(integerBreak(n));

const n1 = 10;
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
console.log(integerBreak(n1));

const n2 = 5;
// Output: 6
// Explanation: 5 = 3 + 2, 3 × 2 = 6
console.log(integerBreak(n2));
