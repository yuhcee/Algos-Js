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

    let l = 0,
        r = 0,
        minI = s.length + 1,
        minL = s.length + 1,
        count = 0;
    const charMap = {};

    for (const char of t) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    while (r < s.length) {
        if (charMap[s[r]]-- >= 1) count += 1;
        r += 1;

        while (count == t.length) {
            if (r - l < minL) {
                minL = r - l;
                minI = l;
            }
            if (charMap[s[l]]++ >= 0) count -= 1;
            l += 1;
        }
    }

    return s.slice(minI, minI + minL);
};

const s = 'ADOBECODEBANC',
    t = 'ABC';
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
console.log(minWindow(s, t));

const s1 = 'a',
    t1 = 'a';
// Output: "a"
// Explanation: The entire string s is the minimum window.
console.log(minWindow(s1, t1));

const s2 = 'a',
    t2 = 'aa';
// Output: ""
/* Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string. */
console.log(minWindow(s2, t2));
