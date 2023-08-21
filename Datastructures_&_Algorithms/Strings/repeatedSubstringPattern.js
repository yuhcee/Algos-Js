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
    // We create a doubled string by concatenating s with itself
    const doubledString = s + s;

    // We remove the first and last characters from the doubled string
    // This is because if s can be made by repeating a substring, then
    // it must start and end with the same character
    const trimmedDoubledString = doubledString.slice(1, -1);

    // If the original string s is found in the trimmed doubled string,
    // it means s can be made by repeating a substring
    return trimmedDoubledString.includes(s);
};

const s = 'abab';
// Output: true
// Explanation: It is the substring "ab" twice.
console.log(repeatedSubstringPattern(s));

const s1 = 'abcabcabcabc';
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
console.log(repeatedSubstringPattern(s1));

const s2 = 'aba';
// Output: false
console.log(repeatedSubstringPattern(s2));
