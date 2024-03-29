/**
 * **844. Backspace String Compare**
 *
 * Given two strings `s` and `t`, return `true` *if they are equal when both are typed into empty 
 * text editors.* `'#'` means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * **Constraints:**
 * 
 * - `1 <= s.length, t.length <= 200`
 * - `s` and `t` only contain lowercase letters and `'#'` characters.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
    let i = s.length - 1,
        j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getNextValidChar(s, i);
        j = getNextValidChar(t, j);

        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }

        if (i >= 0 !== j >= 0) {
            // One string is finished but the other is not
            return false;
        }

        i--;
        j--;
    }

    return true;
};

function getNextValidChar(str, index) {
    let backspaceCount = 0;
    while (index >= 0) {
        if (str[index] === '#') {
            backspaceCount++;
        } else if (backspaceCount > 0) {
            backspaceCount--;
        } else {
            break;
        }
        index--;
    }
    return index;
}

const s = 'ab#c',
    t = 'ad#c';
// Output: true
// Explanation: Both s and t become "ac".
console.log(backspaceCompare(s, t));

const s1 = 'ab##',
    t1 = 'c#d#';
// Output: true
// Explanation: Both s and t become "".
console.log(backspaceCompare(s1, t1));

const s2 = 'a#c',
    t2 = 'b';
// Output: false
// Explanation: s becomes "c" while t becomes "b".
console.log(backspaceCompare(s2, t2));
