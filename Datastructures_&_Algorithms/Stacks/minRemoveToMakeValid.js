/**
 * **1249. Minimum Remove to Make Valid Parentheses**
 *
 * Given a string `s` of `'('` , `')'` and lowercase English characters.
 *
 * Your task is to remove the minimum number of parentheses ( `'('` or `')'`, in
 * any positions ) so that the resulting parentheses string is valid and return
 * **any** valid string.
 *
 * Formally, *a parentheses string* is valid if and only if:
 *
 * - It is the empty string, contains only lowercase characters, or
 * - It can be written as `AB` (`A` concatenated with `B`), where `A` and `B`
 * are valid strings, or
 * - It can be written as `(A)`, where `A` is a valid string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s[i] is either'(' , ')', or lowercase English letter.`
 *
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s) {
    const stack = [];
    const result = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                result[i] = ''; // Mark unmatched closing parenthesis for removal
            } else {
                stack.pop(); // Match closing parenthesis with opening parenthesis
            }
        }
    }

    while (stack.length > 0) {
        result[stack.pop()] = ''; // Mark unmatched opening parenthesis for removal
    }

    return result.filter((char) => char !== '').join('');
};

const s = 'lee(t(c)o)de)';
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
console.log(minRemoveToMakeValid(s));

const s1 = 'a)b(c)d';
// Output: "ab(c)d"
console.log(minRemoveToMakeValid(s1));
