/**
 * **20. Valid Parentheses**
 *
 * Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']
 * '`, determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s` consists of parentheses only `'()[]{}'`.
 *
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            if (map[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = '()';
// Output: true
console.log(isValid(s));

const s2 = '()[]{}';
// Output: true
console.log(isValid(s2));

const s3 = '(]';
// Output: false
console.log(isValid(s3));
