/**
 * **201. Bitwise AND of Numbers Range**
 *
 * Given two integers `left` and `right` that represent the range `[left,
 * right]`,return *the bitwise AND of all numbers in this range, inclusive.*
 *
 * **Constraints:**
 *
 * - `0 <= left <= right <= 231 - 1`
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = (left, right) => {
    let shifts = 0;
    // Find the common prefix
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shifts++;
    }
    // Shift the common bits to the left
    return left << shifts;
};
