/**
 * **1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence**
 *
 * Given a `sentence` that consists of some words separated by a **single
 * space**, and a `searchWord`, check if `searchWord` is a prefix of any word
 * in `sentence`.
 *
 * Return *the index of the word in `sentence` (**1-indexed**) where
 * `searchWord`is a prefix of this word*. If `searchWord` is a prefix of more
 * than one word, return the index of the first word (**minimum index**). If
 * there is no such word return `-1`.
 *
 * **prefix** of a string `s` is any leading contiguous substring of `s`.
 *
 * **Constraints:**
 *
 * - `1 <= sentence.length <= 100`
 * - `1 <= searchWord.length <= 10`
 * - `sentence` consists of lowercase English letters and spaces.
 * - `searchWord` consists of lowercase English letters.
 *
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
const isPrefixOfWord = function (sentence, searchWord) {
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1; // Return 1-indexed position
        }
    }

    return -1; // No matching word found
};

const sentence = 'i love eating burger',
    searchWord = 'burg';
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
console.log(isPrefixOfWord(sentence, searchWord));
