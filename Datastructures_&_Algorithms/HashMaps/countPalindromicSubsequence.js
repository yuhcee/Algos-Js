/**
 * **1930. Unique Length-3 Palindromic Subsequences**
 *
 * Given a string `s`, return *the number of **unique palindromes of
 * length three** that are a **subsequence** of s*.
 *
 * Note that even if there are multiple ways to obtain the same
 * subsequence, it is still only counted **once**.
 *
 * A **palindrome** is a string that reads the same forwards and
 * backwards.
 *
 * A **subsequence** of a string is a new string generated from the
 * original string with some characters (can be none) deleted without
 * changing the relative order of the remaining characters.
 *
 * For example, `"ace"` is a subsequence of `"abcde"`.
 *
 * **Constraints:**
 *
 * - `3 <= s.length <= 105`
 * - `s` consists of only lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function (s) {
    let uniquePalindromes = new Set();
    let charIndices = new Map();

    // Store the indices of each character's occurrences
    for (let i = 0; i < s.length; i++) {
        if (!charIndices.has(s[i])) {
            charIndices.set(s[i], []);
        }
        charIndices.get(s[i]).push(i);
    }

    // Iterate over each unique character
    for (let [char, indices] of charIndices) {
        if (indices.length > 1) {
            let firstIndex = indices[0];
            let lastIndex = indices[indices.length - 1];
            let middleChars = new Set(s.slice(firstIndex + 1, lastIndex));
            for (let middleChar of middleChars) {
                uniquePalindromes.add(char + middleChar + char);
            }
        }
    }

    return uniquePalindromes.size;
};

const s = 'aabca';
// Output: 3
/* Explanation: The 3 palindromic subsequences of length 3 are:
- "aba" (subsequence of "aabca")
- "aaa" (subsequence of "aabca")
- "aca" (subsequence of "aabca") */
console.log(countPalindromicSubsequence(s));

const s1 = 'adc';
// Output: 0
// Explanation: There are no palindromic subsequences of length 3 in "adc".
console.log(countPalindromicSubsequence(s1));
