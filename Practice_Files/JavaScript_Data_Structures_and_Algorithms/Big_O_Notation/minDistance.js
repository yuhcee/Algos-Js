/**
 * **583. Delete Operation for Two Strings**
 *
 * Given two strings `word1` and `word2`, return *the minimum number of **steps** required to make
 * `word1` and `word2` the same.
 *
 * In one *step*, you can delete exactly one character in either string.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (w1, w2) => {
    // set length
    const [n1, n2] = [w1.length, w2.length];

    // set dp
    const dp = [...new Array(n1 + 1)].map(() => new Array(n2 + 1).fill(0));
};
