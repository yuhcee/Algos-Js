/**
 * **1780. Check if Number is a Sum of Powers of Three**
 *
 * Given an integer `n`, return `true` if it is possible to represent `n` as the sum of distinct
 * powers of three. Otherwise, return `false`.
 *
 * An integer `y` is a power of three if there exists an integer `x` such that `y == 3x`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 107`
 *
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = function (n) {
    while (n > 0) {
        if (n % 3 === 2) return false;
        n = Math.floor(n / 3);
    }
    return true;
};

const n = 12;
// Output: true
// Explanation: 12 = 31 + 32
console.log(checkPowersOfThree(n));

const n1 = 91;
// Output: true
// Explanation: 91 = 30 + 32 + 34
console.log(checkPowersOfThree(n1));

const n2 = 21;
// Output: false
console.log(checkPowersOfThree(n2));
