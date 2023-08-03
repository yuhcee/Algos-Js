/**
 * **712. Minimum ASCII Delete Sum for Two Strings**
 *
 * Given two strings `s1` and `s2`, return *the lowest **ASCII** sum of deleted characters to make two
 * strings equal*.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 1000`
 * - `s1` and `s2` consist of lowercase English letters.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = function (s1, s2) {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D DP array to store the minimum ASCII sum of deleted characters for substrings
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialize the base cases for the empty substrings
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }

    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }

    // Calculate the minimum ASCII sum of deleted characters for substrings
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                // If the characters are equal, no deletion is needed, and the result is the same as the previous substrings
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // If the characters are not equal, we need to delete one of them (either from s1 or s2)
                // We choose the minimum ASCII value among the two options
                dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
            }
        }
    }

    // The result is stored in dp[m][n], which represents the minimum ASCII sum of deleted characters to make both strings equal
    return dp[m][n];
};

const s1 = 'sea',
    s2 = 'eat';
// Output: 231
/* Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
Deleting "t" from "eat" adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this. */
console.log(minimumDeleteSum(s1, s2));

const s11 = 'delete',
    s22 = 'leet';
// Output: 403
// Explanation: Deleting "dee" from "delete" to turn the string into "let",
// adds 100[d] + 101[e] + 101[e] to the sum.
// Deleting "e" from "leet" adds 101[e] to the sum.
// At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
// If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.
console.log(minimumDeleteSum(s11, s22));
