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

/**
 * Helper function to check if a word can be formed by concatenating other words in a given set
 * @param {string} word - The word to check
 * @param {Set} wordSet - The set of words to check against
 * @return {boolean} - Whether the word can be formed by concatenating words in the set
 */
function canFormWord(word, wordSet) {
    // Initialize an array of booleans with the same length as the word
    const dp = new Array(word.length + 1).fill(false);
    // The empty string can always be formed
    dp[0] = true;
    // Iterate through the word
    for (let i = 1; i <= word.length; i++) {
        // Iterate through all possible substring lengths
        for (let j = 0; j < i; j++) {
            // Check if the current substring is in the set and if the remaining substring can be formed
            if (wordSet.has(word.substring(j, i)) && dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    // Return whether the entire word can be formed
    return dp[word.length];
}

const words = ['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat'];
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
/* Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats"; 
"dogcatsdog" can be concatenated by "dog", "cats" and "dog"; 
"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat". */
console.log(findAllConcatenatedWordsInADict(words));
