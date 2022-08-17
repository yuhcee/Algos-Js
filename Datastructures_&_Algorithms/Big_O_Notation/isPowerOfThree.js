/**
 * **326. Power of Three**
 *
 * Given an integer `n`, return *`true` if it is a power of three. Otherwise, return false*.
 *
 * An integer n is a power of three, if there exists an integer `x` such that `n == 3x`.
 *
 * @param {number} n
 * @return {boolean}
 */
// const isPowerOfThree = function (n) {
//     if (n === 0) return false;
//     while (n % 3 === 0) n /= 3;
//     return n === 1;
// };

const isPowerOfThree = function (n) {
    return n > 0 && (Math.log10(n) / Math.log10(3)) % 1 === 0;
};

const n = 27;
// Output: true
console.log(isPowerOfThree(n));

const n1 = 0;
// Output: false
console.log(isPowerOfThree(n1));

const n2 = 9;
// Output: true
console.log(isPowerOfThree(n2));
