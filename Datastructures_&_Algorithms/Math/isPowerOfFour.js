/**
 * **342. Power of Four**
 *
 * Given an integer `n`, return *`true` if it is a power of four.
 * Otherwise, return `false`*.
 *
 * An integer `n` is a power of four, if there exists an integer `x`
 * such that `n == 4x`.
 *
 * **Constraints:**
 *
 * `-231 <= n <= 231 - 1`
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0x55555555) !== 0;
};

const n = 16;
// Output: true
console.log(isPowerOfFour(n));

const n1 = 5;
// Output: false
console.log(isPowerOfFour(n1));

const n2 = 1;
// Output: true
console.log(isPowerOfFour(n2));
