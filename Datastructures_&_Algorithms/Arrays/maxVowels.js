/**
 * **1456. Maximum Number of Vowels in a Substring of Given Length**
 *
 * Given a string `s` and an integer `k`, return *the maximum number of
 * vowel letters in any substring of `s` with length `k`.
 *
 * Vowel letters in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of lowercase English letters.
 * - `1 <= k <= s.length`
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    let windowCount = 0;

    // Calculate the vowel count in the initial window of length k
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            windowCount++;
        }
    }

    maxCount = windowCount;

    // Slide the window through the string and update the maximum count
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            windowCount++;
        }
        if (vowels.has(s[i - k])) {
            windowCount--;
        }
        maxCount = Math.max(maxCount, windowCount);
    }

    return maxCount;
};

const s = 'abciiidef',
    k = 3;
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
console.log(maxVowels(s, k));

const s1 = 'aeiou',
    k1 = 2;
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
console.log(maxVowels(s1, k1));
