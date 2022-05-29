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
    const letters = words.map(word => [...new Set(word)]);
};
