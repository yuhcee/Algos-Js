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

const num = '1432219',
    k = 3;
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
console.log(removeKdigits(num, k));

const num1 = '10200',
    k1 = 1;
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
console.log(removeKdigits(num1, k1));
