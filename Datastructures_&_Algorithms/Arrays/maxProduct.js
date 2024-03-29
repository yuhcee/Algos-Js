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

// Solution #2: Array of Letters' Occurrence
var maxProductFC = function (words) {
    const bits = words.map((word) => {
        let bits = new Int8Array(26);
        for (let letter of word) bits[letter.charCodeAt(0) - 97] = 1;
        return bits;
    });

    const shareCommonLetter = (bits1, bits2) => {
        for (let i = 0; i < 26; i++) if (bits1[i] && bits2[i]) return true;

        return false;
    };

    let res = 0;
    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!shareCommonLetter(bits[i], bits[j])) {
                let prod = words[i].length * words[j].length;
                if (prod > res) res = prod;
            }
        }
    }

    return res;
};

const words3 = ['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'];
// Output: 16;
// Explanation: The two words can be "abcw", "xtfn".
console.log(maxProductFC(words3));
const words4 = ['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'];
// Output: 4;
// Explanation: The two words can be "ab", "cd".
console.log(maxProductFC(words4));
const words6 = ['a', 'aa', 'aaa', 'aaaa'];
// Output: 0;
// Explanation: No such pair of words.
console.log(maxProductFC(words6));