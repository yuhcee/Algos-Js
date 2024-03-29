/**
 * **231. Power of Two**
 *
 * Given an integer `n`, return **`true` if it is a power of two. Otherwise,
 * return `false`**.
 *
 * An integer `n` is a power of two, if there exists an integer `x` such
 * that `n == 2x`.
 *
 * **Constraints:**
 *
 * - `-231 <= n <= 231 - 1`
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
    if (n <= 0) return false;

    return (n & (n - 1)) === 0;
};

const n = 1;
// Output: true
// Explanation: 20 = 1
console.log(isPowerOfTwo(n));

const n1 = 16;
// Output: true
// Explanation: 24 = 16
console.log(isPowerOfTwo(n1));

const n2 = 3;
// Output: false
console.log(isPowerOfTwo(n2));
