/**
 * ****1832. Check if the Sentence Is Pangram
 *
 * A **pangram** is a sentence where every letter of the English alphabet appears at least once.
 *
 * Given a string `sentence` containing only lowercase English letters, return *`true` if sentence
 * is a **pangram**, or `false` otherwise*.
 *
 * Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = function (sentence) {
    const seen = new Set();

    for (let char of sentence) {
        seen.add(char);
    }
    return seen.size() === 26;
};
