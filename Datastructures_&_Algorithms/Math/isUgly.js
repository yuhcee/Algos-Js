/**
 * **263. Ugly Number**
 *
 * An **ugly number** is a positive integer whose prime factors are limited to `2`,
 * `3`, and `5`.
 *
 * Given an integer `n`, return *`true` if `n` is an **ugly number***.
 *
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function (n) {
    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 === 0) n = n / 2;
        else if (n % 3 === 0) n = n / 3;
        else if (n % 5 === 0) n = n / 5;
        else return false;
    }
    return true;
};

const n = 6;
// Output: true;
// Explanation: 6 = 2 × 3
console.log(isUgly(n));

const n1 = 1;
// Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
console.log(isUgly(n1));

const n2 = 14;
// Output: false
// Explanation: 14 is not ugly since it includes the prime factor 7.
console.log(isUgly(n2));
