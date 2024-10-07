/**
 * **2696. Minimum String Length After Removing Substrings**
 *
 * You are given a string `s` consisting only of **uppercase**
 * English letters.
 *
 * You can apply some operations to this string where, in one
 * operation, you can remove **any** occurrence of one of the
 * substrings `"AB"` or `"CD"` from `s`.
 *
 * Return *the **minimum** possible length of the resulting string
 * that you can obtain*.
 *
 * **Note** that the string concatenates after removing the
 * substring and could produce new `"AB"` or `"CD"` substrings.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 100`
 * - `s` consists only of uppercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const minLength = function (s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && ((stack[stack.length - 1] === 'A' && char === 'B') || (stack[stack.length - 1] === 'C' && char === 'D'))) {
            // Pop the last element from stack because we found a removable pattern
            stack.pop();
        } else {
            // Otherwise, push the current character onto the stack
            stack.push(char);
        }
    }

    // The remaining length of the stack is the minimum length of the string
    return stack.length;
};

const s = 'ABFCACDB';
// Output: 2
/* Explanation: We can do the following operations:
- Remove the substring "ABFCACDB", so s = "FCACDB".
- Remove the substring "FCACDB", so s = "FCAB".
- Remove the substring "FCAB", so s = "FC".
So the resulting length of the string is 2.
It can be shown that it is the minimum length that we can obtain. */
console.log(minLength(s));
