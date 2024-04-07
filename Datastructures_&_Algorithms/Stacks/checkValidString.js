/**
 * **678. Valid Parenthesis String**
 *
 * Given a string `s` containing only three types of characters: `'('`, `')'`
 * and `'*'`, return *`true` if `s` is **valid**.*
 *
 * The following rules define a **valid** string:
 *
 * - Any left parenthesis `'('` must have a corresponding right parenthesis `')
 * '`.
 * - Any right parenthesis `')'` must have a corresponding left parenthesis `'
 * ('`.
 * Left parenthesis `'('` must go before the corresponding right parenthesis `')
 * '`.
 * - `'*'` could be treated as a single right parenthesis `')'` or a single left
 * parenthesis `'('` or an empty string `""`.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 100`
 * - `s[i]` is `'('`, `')'` or `'*'`.
 *
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            minOpen++;
            maxOpen++;
        } else if (s[i] === ')') {
            minOpen = Math.max(0, minOpen - 1);
            maxOpen--;
        } else {
            // '*'
            minOpen = Math.max(0, minOpen - 1); // Treat '*' as ')'
            maxOpen++; // Treat '*' as '('
        }

        // Ensure that maxOpen doesn't go below 0
        if (maxOpen < 0) return false;
    }

    return minOpen === 0;
};

const s = '()';
// Output: true
console.log(checkValidString(s));
