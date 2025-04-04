/**
 * **2116. Check if a Parentheses String Can Be Valid**
 *
 * A parentheses string is a **non-empty** string consisting only of `'('`
 * and `')'`. It is valid if any of the following conditions is **true**:
 *
 * - It is `()`.
 * - It can be written as `AB` (`A` concatenated with `B`), where `A` and
 * `B` are valid parentheses strings.
 * - It can be written as `(A)`, where `A` is a valid parentheses string.
 *
 * You are given a parentheses string `s` and a string `locked`, both of
 * length `n`. `locked` is a binary string consisting only of `'0'`s and
 * `'1'`s. For **each** index `i` of `locked`,
 *
 * - If `locked[i]` is `'1'`, you **cannot** change `s[i]`.
 * - But if `locked[i]` is `'0'`, you **can** change `s[i]` to either `'('`
 * or `')'`.
 *
 * Return *`true` if you can make `s` a valid parentheses string*.
 * Otherwise, return `false`.
 *
 * **Constraints:**
 *
 * - `n == s.length == locked.length`
 * - `1 <= n <= 105`
 * - `s[i]` is either `'('` or `')'`.
 * - `locked[i]` is either `'0'` or `'1'`.
 *
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
const canBeValid = function (s, locked) {
    // If length is odd, it's impossible to balance
    if (s.length % 2 !== 0) return false;

    let balance = 0;

    // Left-to-right pass
    for (let i = 0; i < s.length; i++) {
        if (locked[i] === '0' || s[i] === '(') {
            balance++;
        } else {
            balance--;
        }
        if (balance < 0) return false; // Too many unmatched ')'
    }

    balance = 0;

    // Right-to-left pass
    for (let i = s.length - 1; i >= 0; i--) {
        if (locked[i] === '0' || s[i] === ')') {
            balance++;
        } else {
            balance--;
        }
        if (balance < 0) return false; // Too many unmatched '('
    }

    return true;
};
const s = '))()))',
    locked = '010100';
// Output: true
/* Explanation: locked[1] == '1' and locked[3] == '1', so we cannot change s[1] or s[3].
We change s[0] and s[4] to '(' while leaving s[2] and s[5] unchanged to make s valid. */
console.log(canBeValid(s, locked));

const s1 = '()()',
    locked1 = '0000';
// Output: true
// Explanation: We do not need to make any changes because s is already valid.
console.log(canBeValid(s1, locked1));

const s2 = ')',
    locked2 = '0';
// Output: false
/* Explanation: locked permits us to change s[0]. 
Changing s[0] to either '(' or ')' will not make s valid. */
console.log(canBeValid(s2, locked2));
