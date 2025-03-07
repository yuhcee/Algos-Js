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
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    let num1 = -1,
        num2 = -1,
        minDiff = Infinity;
    for (let i = left; i < right; i++) {
        if (isPrime(i) && isPrime(i + 1)) {
            if (i + 1 - i < minDiff) {
                num1 = i;
                num2 = i + 1;
                minDiff = i + 1 - i;
            }
        }
    }

    return [num1, num2];
};
