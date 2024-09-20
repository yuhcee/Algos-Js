/**
 * **214. Shortest Palindrome**
 *
 * You are given a string `s`. You can convert `s` to a palindrome
 * by adding characters in front of it.
 *
 * Return *the shortest palindrome you can find by performing this
 * transformation*.
 *
 * **Constraints:**
 *
 * - `0 <= s.length <= 5 * 104`
 * - `s` consists of lowercase English letters only.
 *
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
    if (s.length === 0) return s;

    // Construct a new string combining s, a separator, and the reverse of s
    let revS = s.split('').reverse().join('');
    let combined = s + '#' + revS;

    // KMP table to track longest prefix which is also suffix
    let table = new Array(combined.length).fill(0);

    for (let i = 1; i < combined.length; i++) {
        let j = table[i - 1];

        while (j > 0 && combined[i] !== combined[j]) {
            j = table[j - 1];
        }

        if (combined[i] === combined[j]) {
            table[i] = j + 1;
        }
    }

    // Find the palindromic part by using the KMP table
    let longestPalPrefixLength = table[combined.length - 1];

    // The part of the string that needs to be added to the front
    let toAdd = revS.substring(0, s.length - longestPalPrefixLength);

    return toAdd + s;
};
