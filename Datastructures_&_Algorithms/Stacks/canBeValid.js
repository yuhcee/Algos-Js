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
const canBeValid = function (s, locked) {};
