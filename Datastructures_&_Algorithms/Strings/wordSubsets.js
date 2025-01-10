/**
 * **916. Word Subsets**
 *
 * You are given two string arrays `words1` and `words2`.
 *
 * A string `b` is a **subset** of string `a` if every letter in `b` occurs
 * in `a` including multiplicity.
 *
 * - For example, `"wrr"` is a subset of `"warrior"` but is not a subset of
 * `"world"`.
 *
 * A string `a` from `words1` is **universal** if for every string `b` in
 * `words2`, `b` is a subset of `a`.
 *
 * Return an array of all the **universal** strings in `words1`. You may
 * return the answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= words1.length, words2.length <= 104`
 * - `1 <= words1[i].length, words2[i].length <= 10`
 * - `words1[i]` and `words2[i]` consist only of lowercase English letters.
 * - All the strings of `words1` are unique.
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
const wordSubsets = function (words1, words2) {
    // Helper function to count character frequencies
    const getFrequency = (word) => {
        const freq = Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    };

    // Step 1: Create the combined frequency map for words2
    const maxFreq = Array(26).fill(0);
    for (const word of words2) {
        const freq = getFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    // Step 2: Find all universal strings in words1
    const result = [];
    for (const word of words1) {
        const freq = getFrequency(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) {
            result.push(word);
        }
    }

    return result;
};
