/**
 * **3306. Count of Substrings Containing Every Vowel and K Consonants II**
 *
 * You are given a string `word` and a **non-negative** integer `k`.
 *
 * Return the total number of substrings of `word` that contain every vowel (`'a'`,
 * `'e'`, `'i'`, `'o'`, and `'u'`) **at least** once and **exactly** `k` consonants.
 *
 * **Constraints:**
 *
 * - `5 <= word.length <= 2 * 105`
 * - `word` consists only of lowercase English letters.
 * - `0 <= k <= word.length - 5`
 *
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
const countOfSubstrings = function (word, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = word.length;

    // Helper function to count substrings with all vowels and at most m consonants
    function countWithAtMostM(m) {
        // Step 1: Build prefix sum array for consonants
        const prefix = [0];
        for (let i = 0; i < n; i++) {
            prefix.push(prefix[i] + (vowels.has(word[i]) ? 0 : 1));
        }

        // Step 2: Initialize last positions of vowels
        const lastPosition = { a: -1, e: -1, i: -1, o: -1, u: -1 };
        let result = 0;

        // Step 3: Iterate over all possible right endpoints
        for (let right = 0; right < n; right++) {
            if (vowels.has(word[right])) {
                lastPosition[word[right]] = right;
            }
            // Check if all vowels have appeared
            if (['a', 'e', 'i', 'o', 'u'].every((v) => lastPosition[v] >= 0)) {
                const leftMin = Math.min(...Object.values(lastPosition));
                const target = prefix[right + 1] - m;
                const smallestLeft = binarySearch(prefix, target);
                if (smallestLeft <= leftMin) {
                    result += leftMin - smallestLeft + 1;
                }
            }
        }
        return result;
    }

    // Binary search to find the smallest index where prefix[left] >= target
    function binarySearch(prefix, target) {
        let left = 0;
        let right = prefix.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (prefix[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }

    // Step 4: Compute substrings with exactly k consonants
    return k === 0 ? countWithAtMostM(0) : countWithAtMostM(k) - countWithAtMostM(k - 1);
};

const word = 'aeioqq',
    k = 1;
// Output: 0
// Explanation: There is no substring with every vowel.
console.log(countOfSubstrings(word, k));

const word1 = 'aeiou',
    k1 = 0;
// Output: 1
// Explanation: The only substring with every vowel and zero consonants is word[0..4], which is "aeiou".
console.log(countOfSubstrings(word1, k1));

const word2 = 'ieaouqqieaouqq',
    k2 = 1;
Output: 3;
/* Explanation: The substrings with every vowel and one consonant are:
word[0..5], which is "ieaouq".
word[6..11], which is "qieaou".
word[7..12], which is "ieaouq".
 */
console.log(countOfSubstrings(word2, k2));
