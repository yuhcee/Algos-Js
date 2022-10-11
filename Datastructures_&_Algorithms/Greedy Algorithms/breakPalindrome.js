/**
 * **1328. Break a Palindrome**
 *
 * Given a palindromic string of lowercase English letters `palindrome`, replace **exactly one**
 * character with any lowercase English letter so that the resulting string is not a palindrome
 * and that it is **the lexicographically smallest** one possible.
 *
 * Return *the resulting string. If there is no way to replace a character to make it not a
 * palindrome, return an **empty string***.
 *
 * A string `a` is lexicographically smaller than `a` string `b` (of the same length) if in the
 * first position where `a` and `b` differ, `a` has `a` character strictly smaller than the
 * corresponding character in `b`. For example, `"abcc"` is lexicographically smaller than
 * `"abcd"` because the first position they differ is at the fourth character, and `'c'` is
 * smaller than `'d'`.
 *
 * **Constraints:**
 * - `1 <= palindrome.length <= 1000`
 * - `palindrome` consists of only lowercase English letters.
 *
 * @param {string} palindrome
 * @return {string}
 */
const breakPalindrome = (palindrome) => {
    if (palindrome.length > 1) {
        const p = palindrome.split(``);

        for (var i = 0, n = p.length; i < n; i++) {
            if (p[i] !== `a` && i !== (n - 1) / 2) {
                p[i] = `a`;
                return p.join(``);
            }
        }

        p[n - 1] = 'b';

        return p.join(``);
    } else return ``;
};

const palindrome = 'abccba';
// Output: "aaccba"
/* Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
Of all the ways, "aaccba" is the lexicographically smallest. */
console.log(breakPalindrome(palindrome));

const palindrome1 = 'a';
// Output: ""
/* Explanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string. */
console.log(breakPalindrome(palindrome1));
