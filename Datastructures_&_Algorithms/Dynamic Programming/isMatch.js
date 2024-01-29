/**
 * **Regex Matcher**
 *
 * Given a string `text` and a `pattern`. Evaluate if the given string
 * matches matches the full text of the pattern. Check if a given pattern
 * exists in a given string or not including wild cards * and .
 *
 * In this problem, we are given a string (text) and a pattern, which can
 * contain wildcard characters '*' and '.', and we need to check if the
 * pattern matches the text or not.
 *
 * Matching criteria:
 * - `"."` represents any single character.
 * - `"*"` represents zero or more repeating times of the character just
 * before it.
 *
 * **Constraints**
 *
 * - `1 <= text.length <= 20`
 * - `1 <= pattern.length <= 20`
 * - `text` and `pattern` are lowercase English letters.
 *
 */
function isMatch(text, pattern) {
    const dp = Array(text.length + 1)
        .fill(false)
        .map(() => Array(pattern.length + 1).fill(false));
    dp[0][0] = true;

    for (let j = 1; j <= pattern.length; j++) {
        if (pattern[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= text.length; i++) {
        for (let j = 1; j <= pattern.length; j++) {
            if (pattern[j - 1] === '.' || pattern[j - 1] === text[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (pattern[j - 1] === '*') {
                dp[i][j] = dp[i][j - 2] || ((pattern[j - 2] === '.' || pattern[j - 2] === text[i - 1]) && dp[i - 1][j]);
            } else {
                dp[i][j] = false;
            }
        }
    }

    return dp[text.length][pattern.length];
}
