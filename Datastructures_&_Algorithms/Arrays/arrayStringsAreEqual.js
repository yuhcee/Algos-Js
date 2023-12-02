/**
 * **1662. Check If Two String Arrays are Equivalent**
 *
 * Given two string arrays `word1` and `word2`, return *`true` if the two arrays **represent** the 
 * same string, and `false` otherwise.
 *
 * A string is **represented** by an array if the array elements concatenated **in order** forms the
 * string.
 *
 * **Constraints:**
 *
 * - `1 <= word1.length, word2.length <= 103`
 * - `1 <= word1[i].length, word2[i].length <= 103`
 * - `1 <= sum(word1[i].length), sum(word2[i].length) <= 103`
 * - `word1[i]` and `word2[i]` consist of lowercase letters.
 *
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
// const arrayStringsAreEqual = function (word1, word2) {
//     return word1.join('') === word2.join('');
// };

const arrayStringsAreEqual = (word1, word2) => {
    let word1Chars = '',
        word2Chars = '';

    for (let char of word1) {
        word1Chars += char;
    }

    for (let char of word2) {
        word2Chars += char;
    }

    return word1Chars === word2Chars;
};

const word1 = ['ab', 'c'],
    word2 = ['a', 'bc'];
// Output: true
/* Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true. */
console.log(arrayStringsAreEqual(word1, word2));

const word11 = ['a', 'cb'],
    word22 = ['ab', 'c'];
// Output: false
console.log(arrayStringsAreEqual(word11, word22));

const word13 = ['abc', 'd', 'defg'],
    word23 = ['abcddefg'];
// Output: true
console.log(arrayStringsAreEqual(word13, word23));
