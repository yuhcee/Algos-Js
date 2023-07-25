/**
 * **50. Pow(x, n)**
 *
 * Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `xn`).
 *
 * Calculate x raised to the power n (x^n).
 *
 *  **Constraints:**
 *
 * - `-100.0 < x < 100.0`
 * - `-231 <= n <= 231-1`
 * - `n` is an integer.
 * - Either `x` is not zero or `n > 0`.
 * - `-104 <= xn <= 104`
 *
 * @param {number} x - The base number.
 * @param {number} n - The exponent.
 * @return {number} - The result of x raised to the power n.
 */
const myPow = function (x, n) {
    // Base case: If the exponent is 0, any number raised to the power of 0 is 1.
    if (n === 0) {
        return 1;
    }

    // If the exponent is negative, convert x to its reciprocal (1/x) and make n positive.
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // For even n, use the property x^n = (x^(n/2)) * (x^(n/2)).
    if (n % 2 === 0) {
        // Recursively calculate pow(x, n/2) and square it.
        return myPow(x * x, n / 2);
    } else {
        // For odd n, use the property x^n = (x^((n-1)/2)) * (x^((n-1)/2)) * x.
        // Recursively calculate pow(x, (n-1)/2), square it, and multiply by x.
        return myPow(x * x, (n - 1) / 2) * x;
    }
};

const x = 2.0,
    n = 10;
// Output: 1024.00000
console.log(myPow(x, n));

const x1 = 2.10000, n1 = 3
// Output: 9.26100
console.log(myPow(x1, n1));
