/**
 * **1657. Determine if Two Strings Are Close**
 *
 * Two strings are considered **close** if you can attain one from the
 * other using the following operations:
 *
 * - Operation 1: Swap any two **existing** characters.
 *   - For example, `abcde -> aecdb`
 *
 * - Operation 2: Transform **every** occurrence of one **existing**
 * character into another existing character, and do the same with the
 * other character.
 *   - For example, `aacabb -> bbcbaa` (all `a`'s turn into `b`'s, and
 * all `b`'s turn into `a`'s)
 *
 * You can use the operations on either string as many times as
 * necessary.
 *
 * Given two strings, `word1` and `word2`, return *`true` if `word1` and
 * `word2` are **close**, and `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= word1.length, word2.length <= 105`.
 * - `word1` and `word2` contain only lowercase English letters.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    const freqCount1 = new Array(26).fill(0);
    const freqCount2 = new Array(26).fill(0);
    const existsIn1 = new Array(26).fill(0);
    const existsIn2 = new Array(26).fill(0);

    // Count character frequencies and existence in word1
    for (let char of word1) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freqCount1[idx]++;
        existsIn1[idx] = 1;
    }

    // Count character frequencies and existence in word2
    for (let char of word2) {
        const idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
        freqCount2[idx]++;
        existsIn2[idx] = 1;
    }

    // Compare existence arrays
    for (let i = 0; i < 26; i++) {
        if (existsIn1[i] !== existsIn2[i]) return false;
    }

    // Compare frequency distributions
    freqCount1.sort((a, b) => a - b);
    freqCount2.sort((a, b) => a - b);
    for (let i = 0; i < 26; i++) {
        if (freqCount1[i] !== freqCount2[i]) return false;
    }

    return true;
};

const word1 = 'abc',
    word2 = 'bca';
// Output: true
/* Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca" */
console.log(closeStrings(word1, word2));

const word10 = 'a',
    word20 = 'aa';
// Output: false
/* Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations. */
console.log(closeStrings(word10, word20));

const word11 = 'cabbba',
    word21 = 'abbccc';
// Output: true
/* Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc" */
console.log(closeStrings(word11, word21));
