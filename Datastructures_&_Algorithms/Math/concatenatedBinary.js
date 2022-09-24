/**
 * **1680. Concatenation of Consecutive Binary Numbers**
 *
 * Given an integer `n`, return *the **decimal value** of the binary string formed by concatenating the binary representations
 * of `1` to `n` in order, **modulo** `109 + 7`*.
 *
 * @param {number} n
 * @return {number}
 */
const concatenatedBinary = function (n) {
    let ans = 1,
        len = 4;

    for (let i = 2; i <= n; i++) {
        if (i === len) len *= 2;
        ans = (ans * len + i) % 1000000007;
    }

    return ans;
};

const n = 1;
// Output: 1
// Explanation: "1" in binary corresponds to the decimal value 1.
console.log(concatenatedBinary(n));

const n1 = 3;
// Output: 27
/* Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
After concatenating them, we have "11011", which corresponds to the decimal value 27. */
console.log(concatenatedBinary(n1));
