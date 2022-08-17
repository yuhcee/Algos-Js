/**
 * **890. Find and Replace Pattern**
 *
 * Given a list of strings `words` and a string `pattern`, return a list of `words[i]` that match
 * `pattern`. You may return the answer in **any order**.
 *
 * A word matches the pattern if there exists a permutation of letters `p` so that after replacing every
 * letter `x` in the pattern with `p(x)`, we get the desired word.
 *
 * Recall that a permutation of letters is a bijection from letters to letters: every letter maps to
 * another letter, and no two letters map to the same letter.
 *
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
    const getPattern = (s, memo = {}) => {
        let id = 0;
        const res = [];

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (memo[char] === undefined) {
                memo[char] = ++id;
            }

            res.push(memo[char]);
        }

        return res.join(',');
    };

    const match = getPattern(pattern);

    return words.filter((word) => getPattern(word) === match);
};

const words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'],
    pattern = 'abb';
// Output: ["mee","aqq"];
/* Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter. */
console.log(findAndReplacePattern(words, pattern));

const words1 = ['a', 'b', 'c'],
    pattern1 = 'a';
// Output: ['a', 'b', 'c'];
console.log(findAndReplacePattern(words1, pattern1));
