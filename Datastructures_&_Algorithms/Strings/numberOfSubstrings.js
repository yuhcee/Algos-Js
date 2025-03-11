/**
 * **1358. Number of Substrings Containing All Three Characters**
 *
 * Given a string `s` consisting only of characters a, b and c.
 *
 * Return the number of substrings containing **at least** one occurrence of all these characters a, b and c.
 *
 * **Constraints:**
 *
 * - `3 <= s.length <= 5 x 10^4`
 * - `s` only consists of a, b or c characters.
 *
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function (s) {
    // Initialize count of valid substrings
    let count = 0;

    // Array to keep track of character counts (a, b, c)
    let charCount = [0, 0, 0];

    // Left pointer of sliding window
    let left = 0;

    // Iterate through string with right pointer
    for (let right = 0; right < s.length; right++) {
        // Increment count for current character
        charCount[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        // While window has at least one of each character
        while (charCount[0] > 0 && charCount[1] > 0 && charCount[2] > 0) {
            // All substrings from left to end of string are valid
            count += s.length - right;
            // Shrink window by moving left pointer
            charCount[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            left++;
        }
    }

    return count;
};

const s = 'abcabc';
// Output: 10
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again).
console.log(numberOfSubstrings(s));

const s1 = 'aaacb';
// Output: 3
// Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb".
console.log(numberOfSubstrings(s1));
