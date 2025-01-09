/**
 * **2185. Counting Words With a Given Prefix**
 *
 * You are given an array of strings `words` and a string `pref`.
 *
 * Return *the number of strings in `words` that contain `pref` as a
 * **prefix**.*
 *
 * A **prefix** of a string s is any leading contiguous substring of s.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length, pref.length <= 100`
 * - `words[i]` and `pref` consist of lowercase English letters.
 *
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
const prefixCount = function (words, pref) {};

const words = ['pay', 'attention', 'practice', 'attend'],
    pref = 'at';
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".
console.log(prefixCount(words, pref));

const words1 = ['leetcode', 'win', 'loops', 'success'],
    pref1 = 'code';
// Output: 0
// Explanation: There are no strings that contain "code" as a prefix.
console.log(prefixCount(words1, pref1));
