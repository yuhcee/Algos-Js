/**
 * **3174. Clear Digits**
 *
 * You are given a string `s`.
 *
 * Your task is to remove **all** digits by doing this operation repeatedly:
 *
 * - Delete the first digit and the **closest non-digit** character to its
 * *left*.
 * Return *the resulting string after removing all digits*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 100`
 * - `s` consists only of lowercase English letters and digits.
 * - The input is generated such that it is possible to delete all digits.
 *
 * @param {string} s
 * @return {string}
 */
const clearDigits = function (s) {
    const stack = [];
    for (const char of s) {
        if (/\d/.test(char)) {
            // If the character is a digit, pop the closest non-digit character to its left
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // If the character is not a digit, push it onto the stack
            stack.push(char);
        }
    }
    // Join the stack to form the resulting string
    return stack.join('');
};

const s = 'abc';
// Output: "abc"
// Explanation:There is no digit in the string.
console.log(clearDigits(s));
