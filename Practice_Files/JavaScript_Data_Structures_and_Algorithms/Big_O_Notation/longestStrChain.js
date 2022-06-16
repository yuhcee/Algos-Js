/**
 * **1048. Longest String Chain**
 *
 * You are given an array of `words` where each word consists of lowercase English letters.
 *
 * `wordA` is a **predecessor** of `wordB` if and only if we can insert **exactly one** letter anywhere
 * in `wordA` **without changing the order of the other characters** to make it equal to `wordB`.
 *
 * - For example, `"abc"` is a **predecessor** of `"abac"`, while `"cba"` is not a **predecessor** of
 * `"bcad"`.
 *
 * A **word chain** is a sequence of words [`word1, word2, ..., wordk`] with `k >= 1`, where `word1` is a
 * **predecessor** of `word2`, `word2` is a **predecessor** of `word3`, and so on. A single word is
 * trivially a **word chain** with `k == 1`.
 *
 * Return *the **length** of the **longest possible word chain** with words chosen from the given list of
 * words*.
 *
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = (words) => {
    let map = {};

    words.sort((a, b) => a.length - b.length);

    for (let word of words) {
        let count = 0;

        for (let i = 0; i < word.length; i++) {
            let prev = word.slice(0, i) + word.slice(i + 1);

            count = Math.max(count, (map[prev] || 0) + 1);
        }
        map[word] = count;
    }

    return Math.max(...Object.values(map));
};

const words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];
// Output: 4;
// Explanation: One of the longest word chains is ["a","ba","bda","bdca"].
console.log(longestStrChain(words));

const words1 = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'];
// Output: 5;
// Explanation: All the words can be put in a word chain ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
console.log(longestStrChain(words1));
