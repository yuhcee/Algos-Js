/**
 * **318. Maximum Product of Word Lengths**
 *
 * Given a string array `words`, return *the maximum value of `length(word[i]) * length(word[j])` where the two words
 * do not share common letters*. If no such two words exist, return `0`.
 *
 * @param {string[]} words
 * @return {number}
 */
// Solution #1: Set/Array
const maxProduct = (words) => {
    // get distinct letters of every word
    const letters = words.map((word) => [...new Set(word)]);

    let res = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // if some letter in letters[j](words[j]) is found in letters[i](words[i]), then two words share common letters.
            if (!letters[i].some((item) => letters[j].includes(item))) {
                let prod = words[i].length * words[j].length;
                if (prod > res) res = prod;
            }
        }
    }
    return res;
};

const words = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
// Output: 16;
// Explanation: The two words can be "abcw", "xtfn".
console.log(maxProduct(words));
const words1 = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'];
// Output: 4;
// Explanation: The two words can be "ab", "cd".
console.log(maxProduct(words1));
const words2 = ['a', 'aa', 'aaa', 'aaaa'];
// Output: 0;
// Explanation: No such pair of words.
console.log(maxProduct(words2));
