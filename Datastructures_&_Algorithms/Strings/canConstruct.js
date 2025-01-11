/**
 * **1400. Construct K Palindrome Strings**
 *
 * Given a string `s` and an integer `k`, return *`true` if you can use all
 * the characters in `s` to construct `k` palindrome strings or `false`
 * otherwise.*
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of lowercase English letters.
 * - `1 <= k <= 105`
 *
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function (s, k) {
    // If k is greater than the length of s, it's impossible
    if (k > s.length) return false;

    // Count character frequencies
    const freq = {};
    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Count characters with odd frequencies
    let oddCount = 0;
    for (const count of Object.values(freq)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    // Check if we can form k palindromes
    return oddCount <= k;
};

const s = 'annabelle',
    k = 2;
// Output: true
/* Explanation: You can construct two palindromes using all characters in s.
Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b" */
console.log(canConstruct(s, k));

const s1 = 'leetcode',
    k1 = 3;
// Output: false
/* Explanation: It is impossible to construct 3 palindromes using all the characters of s. */
console.log(canConstruct(s1, k1));
