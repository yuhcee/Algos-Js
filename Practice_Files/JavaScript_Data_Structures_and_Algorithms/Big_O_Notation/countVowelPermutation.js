/**
 * **1220. Count Vowels Permutation**
 *
 * Given an integer `n`, your task is to count how many strings of length `n` can be formed under the following rules:
 *
 * - Each character is a lower case vowel (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`)
 * - Each vowel `'a'` may only be followed by an `'e'`.
 * - Each vowel `'e'` may only be followed by an `'a'` or an `'i'`.
 * - Each vowel `'i'` may not be followed by another `'i'`.
 * - Each vowel `'o'` may only be followed by an `'i'` or a `'u'`.
 * - Each vowel `'u'` may only be followed by an `'a'`.
 *
 * Since the answer may be too large, return it modulo `10^9 + 7`.
 *
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
    const adj = {
        a: ['e'],
        e: ['a', 'i'],
        i: ['a', 'e', 'o', 'u'],
        o: ['i', 'u'],
        u: ['a'],
    };

    const MOD = Math.pow(10, 9) + 7;
    const memo = {};

    let res = 0;

    function dfs(currLetter, remainingCount) {
        const cacheKey = `${currLetter},${remainingCount}`;
        if (cacheKey in memo) return memo[cacheKey];

        if (remainingCount === 0) {
            return 1;
        }

        const nextLetters = adj[currLetter];

        let count = 0;

        for (const letter of nextLetters) {
            count = (count + dfs(letter, remainingCount - 1)) % MOD;
        }

        return (memo[cacheKey] = count);
    }

    for (const key in adj) {
        res += dfs(key, n - 1);
    }

    return res % MOD;
};

const n = 1;
// Output: 5
// Explanation: All possible strings are: "a", "e", "i" , "o" and "u".
console.log(countVowelPermutation(n));
