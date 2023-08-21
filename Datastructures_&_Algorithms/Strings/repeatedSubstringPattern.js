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

// ===============SOLUTION 2 ==================
/* const repeatedSubstringPattern = function (s) {
    // Start checking patterns from 1 character up to half the length of the string
    for (let i = 1; i <= s.length / 2; i++) {
        // If the current pattern length divides the string length evenly
        if (s.length % i === 0) {
            // Form the potential pattern from the beginning of the string
            const pattern = s.slice(0, i);
            let formedString = '';

            // Create a new string by repeating the pattern
            for (let j = 0; j < s.length / i; j++) {
                formedString += pattern;
            }

            // If the formed string is equal to the original string, we found a pattern
            if (formedString === s) {
                return true;
            }
        }
    }

    // No repeating pattern found
    return false;
}; */

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
