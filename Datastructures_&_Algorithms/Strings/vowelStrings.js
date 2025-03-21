/**
 * **2559. Count Vowel Strings in Ranges**
 *
 * You are given a **0-indexed** array of strings `words` and a 2D array of
 * integers `queries`.
 *
 * Each query `queries[i] = [li, ri]` asks us to find the number of strings
 * present in the range `li` to `ri` (both **inclusive**) of `words` that start
 * and end with a vowel.
 *
 * Return *an array `ans` of size `queries.length`, where `ans[i]` is the
 * answer to the `ith` query.*
 *
 * **Note** that the vowel letters are 'a', 'e', 'i', 'o', and 'u'.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 105`
 * - `1 <= words[i].length <= 40`
 * - `words[i]` consists only of lowercase English letters.
 * - `sum(words[i].length) <= 3 * 105`
 * - `1 <= queries.length <= 105`
 * - `0 <= li <= ri < words.length`
 *
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
const vowelStrings = function (words, queries) {
    const isVowel = (ch) => "aeiou".includes(ch);

    // Build a prefix sum array for vowel strings
    const n = words.length;
    const prefixSum = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const word = words[i];
        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            prefixSum[i + 1] = prefixSum[i] + 1;
        } else {
            prefixSum[i + 1] = prefixSum[i];
        }
    }

    // Answer each query using the prefix sum array
    const result = [];
    for (const [li, ri] of queries) {
        result.push(prefixSum[ri + 1] - prefixSum[li]);
    }

    return result;
};

const words = ['aba', 'bcb', 'ece', 'aa', 'e'],
    queries = [
        [0, 2],
        [1, 4],
        [1, 1],
    ];
// Output: [2,3,0]
/* Explanation: The strings starting and ending with a vowel are "aba", "ece", "aa" and "e".
The answer to the query [0,2] is 2 (strings "aba" and "ece").
to query [1,4] is 3 (strings "ece", "aa", "e").
to query [1,1] is 0.
We return [2,3,0]. */
console.log(vowelStrings(words, queries));

const words1 = ['a', 'e', 'i'],
    queries1 = [
        [0, 2],
        [0, 1],
        [2, 2],
    ];
// Output: [3,2,1]
// Explanation: Every string satisfies the conditions, so we return [3,2,1].
console.log(vowelStrings(words1, queries1));
