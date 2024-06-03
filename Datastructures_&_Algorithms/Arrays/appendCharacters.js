/**
 * **2486. Append Characters to String to Make Subsequence**
 *
 * You are given two strings `s` and `t` consisting of only lowercase English
 * letters.
 *
 * Return *the minimum number of characters that need to be appended to the end
 * of `s` so that `t` becomes a **subsequence** of `s`*.
 *
 * A **subsequence** is a string that can be derived from another string by
 * deleting some or no characters without changing the order of the remaining
 * characters.
 *
 * **Constraints:**
 *
 * - `1 <= s.length, t.length <= 105`
 * - `s` and `t` consist only of lowercase English letters.
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const appendCharacters = function (s, t) {
    let i = 0,
        j = 0;

    // Traverse through both strings
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            j++; // Move pointer j if characters match
        }
        i++; // Always move pointer i
    }

    // If t is not completely traversed, return the remaining length of t
    return t.length - j;
};

const s = 'coaching',
    t = 'coding';
// Output: 4
/* Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence. */
console.log(appendCharacters(s, t));

const s1 = 'abcde',
    t1 = 'a';
// Output: 0
// Explanation: t is already a subsequence of s ("abcde").
console.log(appendCharacters(s1, t1));
