/**
 * **264. Ugly Number II**
 *
 * An **ugly number** is a positive integer whose prime factors are limited
 * to `2`, `3`, and `5`.
 *
 * Given an integer `n`, return the `nth` ugly number.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1690`
 *
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
    let ugly = new Array(n);
    ugly[0] = 1;

    let i2 = 0,
        i3 = 0,
        i5 = 0;
    let next2 = 2,
        next3 = 3,
        next5 = 5;

    for (let i = 1; i < n; i++) {
        let nextUgly = Math.min(next2, next3, next5);
        ugly[i] = nextUgly;

        if (nextUgly === next2) {
            i2++;
            next2 = ugly[i2] * 2;
        }
        if (nextUgly === next3) {
            i3++;
            next3 = ugly[i3] * 3;
        }
        if (nextUgly === next5) {
            i5++;
            next5 = ugly[i5] * 5;
        }
    }

    return ugly[n - 1];
};

const n = 10;
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
console.log(nthUglyNumber(n));

const n1 = 1;
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
console.log(nthUglyNumber(n1));
