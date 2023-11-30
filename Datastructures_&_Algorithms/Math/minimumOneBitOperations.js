/**
 * **1611. Minimum One Bit Operations to Make Integers Zero**
 *
 * Given an integer `n`, you must transform it into `0` using the
 * following operations any number of times:
 *
 * - Change the rightmost (`0th`) bit in the binary representation of `n`.
 * - Change the `ith` bit in the binary representation of `n` if the `(i-1)
 * th` bit is set to `1` and the `(i-2)th` through `0th` bits are set to
 * `0`.
 *
 * Return *the minimum number of operations to transform `n` into `0`*.
 *
 * **Constraints:**
 *
 * - `0 <= n <= 109`
 *
 * @param {number} n
 * @return {number}
 */
const minimumOneBitOperations = function (n) {
    if (n === 0) return 0;

    let bit = 0;
    // Find the most significant bit
    while (1 << bit <= n) {
        bit++;
    }

    return (1 << bit) - 1 - minimumOneBitOperations(n ^ (1 << (bit - 1)));
};
