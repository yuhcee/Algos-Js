/**
 * **76. Minimum Window Substring**
 *
 * Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window
 * substring** of `s` such that every character in `t` (**including duplicates**) is included in the
 * window. If there is no such substring, return the empty string `""`*.
 *
 * The testcases will be generated such that the answer is **unique**.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 * **Constraints:**
 *
 * - `m == s.length`
 * - `n == t.length`
 * - `1 <= m, n <= 105`
 * - `s` and `t` consist of uppercase and lowercase English letters.
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
    // return "" if substring not possible
    if (!s || !t || s.length < t.length) return '';
};
