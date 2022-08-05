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
};
