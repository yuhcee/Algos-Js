/**
 * **459. Repeated Substring Pattern**
 *
 * Given a string `s`, check if it can be constructed by taking a substring
 * of it and appending multiple copies of the substring together.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 104`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    const s2 = s + s;

    const trimString = s2.slice(1, -1);

    return trimString.includes(s);
};

const s = 'abab';
// Output: true
// Explanation: It is the substring "ab" twice.
console.log(repeatedSubstringPattern(s));
