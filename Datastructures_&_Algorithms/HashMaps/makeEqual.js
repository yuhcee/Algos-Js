/**
 * **1897. Redistribute Characters to Make All Strings Equal**
 *
 * You are given an array of strings `words` (**0-indexed**).
 *
 * In one operation, pick two **distinct** indices `i` and `j`, where
 * `words[i]` is a non-empty string, and move **any** character from
 * `words[i]` to **any** position in `words[j]`.
 *
 * Return `true` if you can make **every** string in words **equal**
 * using **any** number of operations, and false otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length <= 100`
 * - `words[i]` consists of lowercase English letters.
 *
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = function (words) {
    const charCount = new Map();

    // Count the frequency of each character in all words
    for (const word of words) {
        for (const char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
    }

    // Check if the frequency of each character is a multiple of the total number of words
    const totalWords = words.length;
    for (const count of charCount.values()) {
        if (count % totalWords !== 0) {
            return false;
        }
    }

    return true;
};
