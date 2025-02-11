/**
 * **1910. Remove All Occurrences of a Substring**
 *
 * Given two strings `s` and `part`, perform the following operation on `s`
 * until **all** occurrences of the substring `part` are removed:
 *
 * - Find the **leftmost** occurrence of the substring `part` and
 * **remove** it from `s`.
 *
 * Return *`s` after removing all occurrences of `part`.*
 *
 * A **substring** is a contiguous sequence of characters in a string.
 *
 * **Constraints:**
 *
 * 1 <= s.length <= 1000
 * 1 <= part.length <= 1000
 * `s`​​​​​​ and `part` consists of lowercase English letters.
 *
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
const removeOccurrences = function (s, part) {
    const partLen = part.length;
    while (s.includes(part)) {
        const index = s.indexOf(part);
        s = s.slice(0, index) + s.slice(index + partLen);
    }
    return s;
};

const s = 'daabcbaabcbc',
    part = 'abc';
// Output: "dab"
/* Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc". */
console.log(removeOccurrences(s, part));
