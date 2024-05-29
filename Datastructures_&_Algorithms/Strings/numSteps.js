/**
 * **1404. Number of Steps to Reduce a Number in Binary Representation to One**
 *
 * Given the binary representation of an integer as a string `s`, return *the
 * number of steps to reduce it to 1 under the following rules:*
 *
 * - If the current number is even, you have to divide it by `2`.
 *
 * - If the current number is odd, you have to add `1` to it.
 *
 * - It is guaranteed that you can always reach one for all test cases.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 500`
 * - `s` consists of characters '0' or '1'
 * - `s[0] == '1'`
 *
 * @param {string} s
 * @return {number}
 */
const numSteps = function (s) {
    let steps = 0;
    let carry = 0;

    // Start from the least significant bit (rightmost bit)
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === '0') {
            // If the bit is '0' and there is no carry, it's even, just divide by 2 (shift right)
            // If there's a carry, it effectively means it's '1' after the carry addition, then we need to add 1 again
            steps += 1 + carry;
        } else {
            // If the bit is '1', it's odd, we need to add 1 to make it even
            // And there will be a carry to the next significant bit
            steps += 2 - carry;
            carry = 1; // Set carry since adding 1 to '1' results in '10' (carry over)
        }
    }

    // If there's a carry left after processing all bits, it means we need one more step
    // This handles the case where the most significant bit changes due to carry
    steps += carry;

    return steps;
};
