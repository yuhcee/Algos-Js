/**
 * **647. Palindromic Substrings**
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
    const len = s.length;
    const dp = [];
    let count = 0;

    for (let i = 0; i < len; i++) {
        dp[i] = Array(n).fill(false);
        dp[i][i] = true;
        count++;
    }
};
