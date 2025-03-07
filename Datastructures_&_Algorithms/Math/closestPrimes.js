/**
 * **2523. Closest Prime Numbers in Range**
 *
 * Given two positive integers `left` and `right`, find the two integers `num1` and
 * `num2` such that:
 *
 * - `left <= num1 < num2 <= right` .
 * - Both `num1` and `num2` are prime numbers.
 * - `num2 - num1` is the **minimum** amongst all other pairs satisfying the above
 * conditions.
 *
 * Return the positive integer array `ans = [num1, num2]`. If there are multiple pairs
 * satisfying these conditions, return the one with the **smallest** num1 value. If no
 * such numbers exist, return `[-1, -1]`.
 *
 * **Constraints:**
 *
 * - `1 <= left <= right <= 106`
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const closestPrimes = function (left, right) {
    // Sieve of Eratosthenes to fiind all primes up to right
    const sieveSize = right + 1;
    const sieve = Array(sieveSize).fill(true);
    sieve[0] = sieve[1] = false;

    for (let i = 2; i * i <= right; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= right; j += i) {
                sieve[j] = false;
            }
        }
    }

    // Collect primes in the range [left, right]
    const primes = [];
    for (let i = left; i <= right; i++) {
        if (sieve[i]) primes.push(i);
    }

    // If fewer than 2 primes in the range, return [-1, -1]
    if (primes.length < 2) return [-1, -1];

    // Find the pair with the smallest difference
    let minDiff = Infinity;
    let result = [-1, -1];
    for (let i = 1; i < primes.length; i++) {
        const diff = primes[i] - primes[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            result = [primes[i - 1], primes[i]];
        }
    }

    return result;
};
const left = 10,
    right = 19;
// Output: [11,13]
/* Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair. */
console.log(closestPrimes(left, right));

const left1 = 4,
    right1 = 6;
// Output: [-1,-1]
// Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.
console.log(closestPrimes(left1, right1));

const left2 = 12854,
    right2 = 130337;
// Output: [11,13]
// Explanation: The prime numbers between 8 and 10 are 11 and 13.
// The closest gap between any pair is 2, which can be achieved by [11,13].
console.log(closestPrimes(left2, right2));
