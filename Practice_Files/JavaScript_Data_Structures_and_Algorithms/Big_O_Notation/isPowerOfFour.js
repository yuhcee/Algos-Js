/**
 * **342. Power of Four**
 *
 * Given an integer `n`, return *`true` if it is a power of four. Otherwise, return false*.
 * An integer `n` is a power of four, if there exists an integer `x` such that `n == 4x`.
 *
 * @param {number} n
 * @return {boolean}
 */

// ============== ITERATIVE APPROACH ==================
// const isPowerOfFour = function (n) {
//     if (n === 0) return false;
//     while (n % 4 === 0) n /= 4;
//     return n === 1;
// };

// ============== MATH APPROACH ====================
// const isPowerOfFour = function (n) {
//     return n > 0 && (Math.log(n) / Math.log(2)) % 2 === 0;
// };

// ============= BIT MANIPULATION APPROACH =========
const isPowerOfFour = function (n) {
    return (n > 0 ) && ((n & (n - 1))  === 0) && ( n % 3 === 1);
};

const n = 16;
// Output: true
console.log(isPowerOfFour(n));

const n1 = 5;
// Output: true
console.log(isPowerOfFour(n1));

const n2 = 1;
// Output: true
console.log(isPowerOfFour(n2));
