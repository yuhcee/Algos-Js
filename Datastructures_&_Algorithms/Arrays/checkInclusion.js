/**
 * **567. Permutation in String**
 *
 * Given two strings `s1` and `s2`, return *`true` if `s2` contains a permutation of s1, or `false`
 * otherwise*.
 *
 * In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 104`
 * - `s1` and `s2` consist of lowercase English letters.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {};

// Helper function to check if the frequency of characters in two arrays match
function matches(s1Freq, s2Freq) {
    for (let i = 0; i < 26; i++) {
        if (s1Freq[i] !== s2Freq[i]) {
            return false;
        }
    }
    return true;
}
