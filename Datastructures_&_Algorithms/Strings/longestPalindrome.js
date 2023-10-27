/**
 * **5. Longest Palindromic Substring**
 *
 * Given a string `s`, return *the longest palindromic substring in `s`*.
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    let longest = s[0];

    for (let i = 0; i < s.length; i++) {
        checkPalindrome(i, i); // Check for odd-length palindrome centered at i
        checkPalindrome(i, i + 1); // Check for even-length palindrome centered between i and i + 1
    }
};

const s = 'babad';
// Output: 'bab';
// Explanation: "aba" is also a valid answer.

console.log(longestPalindrome(s));

const s1 = 'cbbd';
// Output: 'bb';
console.log(longestPalindrome(s1));
