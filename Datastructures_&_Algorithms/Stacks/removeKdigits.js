/**
 * **402. Remove K Digits**
 *
 * Given string num representing a non-negative integer `num`, and an integer
 * `k`, return *the smallest possible integer after removing `k` digits from
 * `num`.*
 *
 * **Constraints:**
 *
 * - `1 <= k <= num.length <= 105`
 * - `num` consists of only digits.
 * - `num` does not have any leading zeros except for the zero itself.
 *
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
    const stack = [];

    for (const digit of num) {
        while (stack.length && k && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Handle case where remaining digits to remove
    while (k--) {
        stack.pop();
    }

    // Construct resulting string from stack
    let result = stack.join('');

    // Remove leading zeros
    result = result.replace(/^0+/, '');

    // If result is empty, return "0"
    return result || '0';
};
