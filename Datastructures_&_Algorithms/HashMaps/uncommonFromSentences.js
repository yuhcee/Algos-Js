/**
 * **884. Uncommon Words from Two Sentences**
 *
 * A **sentence** is a string of single-space separated words where each
 * word consists only of lowercase letters.
 *
 * A word is **uncommon** if it appears exactly once in one of the
 * sentences, and **does not appear** in the other sentence.
 *
 * Given two **sentences** `s1` and `s2`, return a list of all the
 * **uncommon words**. You may return the answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 200`
 * - `s1` and `s2` consist of lowercase English letters and spaces.
 * - `s1` and `s2` do not have leading or trailing spaces.
 * - All the words in `s1` and `s2` are separated by a single space.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
const uncommonFromSentences = function (s1, s2) {
    const wordCount = {};

    const combinedWords = [...s1.split(' '), ...s2.split(' ')];

    for (let word of combinedWords) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return Object.keys(wordCount).filter((word) => wordCount[word] === 1);
};

const s1 = 'this apple is sweet',
    s2 = 'this apple is sour';

// Output: ["sweet","sour"]

// Explanation: The word "sweet" appears only in s1, while the word "sour" appears only in s2.
console.log(uncommonFromSentences(s1, s2));

const s112 = 'banana';
console.log(uncommonFromSentences(s11, s22));

// Output: ["banana"]
