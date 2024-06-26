/**
 * **140. Word Break II**
 *
 * Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s`
 * to construct a sentence where each word is a valid dictionary word. Return
 * all such possible sentences in **any order**.
 *
 * **Note** that the same word in the dictionary may be reused multiple times in
 * the segmentation.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 20`
 * - `1 <= wordDict.length <= 1000`
 * - `1 <= wordDict[i].length <= 10`
 * - `s` and `wordDict[i]` consist of only lowercase English letters.
 * - All the strings of `wordDict` are **unique**.
 * - Input is generated in a way that the length of the answer doesn't exceed 105
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    const backtrack = (start) => {
        if (memo.has(start)) {
            return memo.get(start);
        }

        const result = [];

        if (start === s.length) {
            result.push('');
        }

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const sublist = backtrack(end);
                for (const sub of sublist) {
                    result.push(word + (sub === '' ? '' : ' ') + sub);
                }
            }
        }

        memo.set(start, result);
        return result;
    };

    return backtrack(0);
};

const s = 'catsanddog',
    wordDict = ['cat', 'cats', 'and', 'sand', 'dog'];
// Output: ["cats and dog","cat sand dog"]
console.log(wordBreak(s, wordDict));

const s1 = 'pineapplepenapple',
    wordDict1 = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.
console.log(wordBreak(s1, wordDict1));

const s2 = 'catsandog',
    wordDict2 = ['cats', 'dog', 'sand', 'and', 'cat'];
// Output: []
console.log(wordBreak(s2, wordDict2));
