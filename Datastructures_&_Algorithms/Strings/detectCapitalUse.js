/**
 * **520. Detect Capital**
 *
 * We define the usage of capitals in a word to be right when one of the following
 * cases holds:
 *
 * - All letters in this word are capitals, like `"USA"`.
 * - All letters in this word are not capitals, like `"leetcode"`.
 * - Only the first letter in this word is capital, like `"Google"`.
 * - Given a string `word`, return `true` if the usage of capitals in it is right.
 *
 * **Constraints:**
 *
 * - `1 <= word.length <= 100`
 * - `word` consists of lowercase and uppercase English letters.
 *
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
    return word === word.toUpperCase() || word === word[0] + word.substring(1).toLowerCase();
};

const word = 'USA';
// Output: true
console.log(detectCapitalUse(word));

const word1 = 'FlaG';
// Output: false
console.log(detectCapitalUse(word1));
