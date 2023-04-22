/**
 * **1312. Minimum Insertion Steps to Make a String Palindrome**
 *
 * Given a string `s`. In one step you can insert any character at any index of the string.
 *
 * Return *the minimum number of steps to make `s` palindrome*.
 *
 * A **Palindrome String** is one that reads the same backward as well as forward.
 *
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 500`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
    // reverse the input string
    const reversedS = s.split('').reverse().join('');
    // get the length of the input string
    const n = s.length;
    // create a 2D array to store the LCS of substrings
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

    // fill up the dp array using dynamic programming approach
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === reversedS[j - 1]) {
                // if characters match, add 1 to LCS
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // otherwise, take maximum LCS of two substrings
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // return the minimum number of insertions required to make s a palindrome
    // this is the difference between the length of s and the length of its LCS
    return n - dp[n][n];
};

const s = 'zzazz';
// Output: 0
// Explanation: The string "zzazz" is already palindrome we do not need any insertions.
console.log(minInsertions(s));

const s1 = 'mbadm';
// Output: 2
// Explanation: String can be "mbdadbm" or "mdbabdm".
console.log(minInsertions(s1));

const s2 = 'leetcode';
// Output: 5
// Explanation: Inserting 5 characters the string becomes "leetcodocteel".
console.log(minInsertions(s2));

const s3 = 'g';
// Output: 0
console.log(minInsertions(s3));
