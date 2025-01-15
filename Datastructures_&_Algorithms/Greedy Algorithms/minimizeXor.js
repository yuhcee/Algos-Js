/**
 * **2429. Minimize XOR**
 *
 * Given two positive integers `num1` and `num2`, find the positive integer
 * `x` such that:
 *
 * - `x` has the same number of set bits as `num2`, and
 * - The value `x XOR num1` is **minimal**.
 *
 * Note that `XOR` is the bitwise XOR operation.
 *
 * Return *the integer `x`*. The test cases are generated such that `x` is
 * **uniquely determined**.
 *
 * The number of **set bits** of an integer is the number of `1`'s in its
 * binary representation.
 *
 * **Constraints:**
 *
 * - `1 <= num1, num2 <= 109`
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
const minimizeXor = function (num1, num2) {
    // Count the number of 1's in the binary representation of num2
    const num2Bits = num2.toString(2).split('1').length - 1;

    let result = 0;
    let setBits = 0;

    // Use the bits of num1 to try to create the smallest value for result
    for (let i = 31; i >= 0 && setBits < num2Bits; i--) {
        if ((num1 & (1 << i)) !== 0) {
            result |= 1 << i;
            setBits++;
        }
    }

    // If more bits are needed, set the smallest available bits
    for (let i = 0; i < 32 && setBits < num2Bits; i++) {
        if ((result & (1 << i)) === 0) {
            result |= 1 << i;
            setBits++;
        }
    }

    return result;
};
