/**
 * **516. Longest Palindromic Subsequence**
 *
 * Given a string `s`, find *the longest palindromic **subsequence's** length in
 * `s`*.
 *
 * A **subsequence** is a sequence that can be derived from another sequence by
 * deleting some or no elements without changing the order of the remaining
 * elements.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 1000`
 * - `s` consists only of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function (s) {
    const n = s.length; // Get the length of the string s
    const dp = Array.from({ length: n }, () => Array(n).fill(0)); // Create a 2D array dp with dimensions n x n and initialize all its elements to 0

    for (let i = n - 1; i >= 0; i--) {
        // Loop through the string s from the end
        dp[i][i] = 1; // Set the diagonal elements of dp to 1, since a single character is always a palindrome
        for (let j = i + 1; j < n; j++) {
            // Loop through the string s from the i-th character to the end
            if (s[i] === s[j]) {
                // If the i-th and j-th characters of s are equal
                dp[i][j] = dp[i + 1][j - 1] + 2; // Set dp[i][j] to dp[i + 1][j - 1] + 2, which represents the length of the longest palindrome that can be formed by adding the i-th and j-th characters to a palindrome formed by the characters between them
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]); // If the i-th and j-th characters of s are not equal, set dp[i][j] to the maximum of dp[i + 1][j] and dp[i][j - 1], which represent the length of the longest palindromic subsequence that can be formed by excluding either the i-th or j-th character from the string
            }
        }
    }

    return dp[0][n - 1]; // Return the length of the longest palindromic subsequence that can be formed from the entire string s, which is stored in dp[0][n - 1]
};

const s = 'bbbab';
// Output: 4
// Explanation: One possible longest palindromic subsequence is "bbbb".
console.log(longestPalindromeSubseq(s));

const s2 = 'cbbd';
// Output: 2
// Explanation: One possible longest palindromic subsequence is "bb".
console.log(longestPalindromeSubseq(s2));
