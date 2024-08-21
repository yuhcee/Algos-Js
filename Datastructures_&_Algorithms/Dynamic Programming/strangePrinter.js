/**
 * **664. Strange Printer**
 *
 * There is a strange printer with the following two special properties:
 *
 * - The printer can only print a sequence of **the same character**
 * each time.
 * - At each turn, the printer can print new characters starting from
 * and ending at any place and
 * will cover the original existing characters.
 *
 * Given a string `s`, return *the minimum number of turns the printer
 * needed to print it*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 100`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {number}
 *
 */
const strangePrinter = function (s) {
    const n = s.length;

    // Create a 2D DP array to store the minimum number of turns needed for substrings
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // The base case is that the printer needs one turn for each character (single character substring)

    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    // Calculate the minimum number of turns for substrings of increasing lengths
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            // Initialize the minimum turns to print the substring (i to j) to be one more than the minimum turns
            // required to print the substring (i to j-1)
            dp[i][j] = dp[i][j - 1] + 1;

            // Try to reduce the number of turns by combining the substring (i to j) with the previous substrings
            for (let k = i; k < j; k++) {
                if (s[k] === s[j]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j - 1]);
                }
            }
        }
    }

    // The minimum number of turns needed to print the entire string (0 to n-1) is stored in dp[0][n-1]
    return dp[0][n - 1];
};

const s = 'aaabbb';
// Output: 2
// Explanation: Print "aaa" first and then print "bbb".
console.log(strangePrinter(s));

const s1 = 'aba';
// Output: 2
// Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
console.log(strangePrinter(s1));
