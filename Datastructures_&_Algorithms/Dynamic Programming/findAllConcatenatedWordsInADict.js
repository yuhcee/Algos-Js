/**
 * **472. Concatenated Words**
 *
 * Given an array of strings `words` **(without duplicates)**, return *all the **concatenated words**
 * in the given list of `words`.
 *
 * A **concatenated word** is defined as a string that is comprised entirely of at least two shorter
 * words in the given array.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 104`
 * - `1 <= words[i].length <= 30`
 * - `words[i]` consists of only lowercase English letters.
 * - All the strings of words are unique.
 * - `1 <= sum(words[i].length) <= 105`
 *
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
    // Create a set to store all the words in the input array
    const wordSet = new Set(words);
    // Initialize an empty array to store the concatenated words
    const concatenatedWords = [];
    // Iterate through the input array of words
    for (let i = 0; i < words.length; i++) {
        // Check if the current word is already a concatenated word
        if (words[i].length === 0) continue;
        wordSet.delete(words[i]);
        // Use a dynamic programming approach to check if the current word can be formed by concatenating other words
        if (canFormWord(words[i], wordSet)) {
            concatenatedWords.push(words[i]);
        }
        wordSet.add(words[i]);
    }
    // Return the array of concatenated words
    return concatenatedWords;
};
