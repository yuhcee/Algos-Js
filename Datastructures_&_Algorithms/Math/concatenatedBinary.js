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
