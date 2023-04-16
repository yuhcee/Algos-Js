/**
 * **1639. Number of Ways to Form a Target String Given a Dictionary**
 *
 * You are given a list of strings of the **same length** `words` and a string `target`.
 *
 * Your task is to form `target` using the given `words` under the following rules:
 *
 * - `target` should be formed from left to right.
 * - To form the `ith`character (**0-indexed**) of `target`, you can choose the `kth` character
 * of the `jth` string in `words` if `target[i] = words[j][k]`.
 * - Once you use the `kth` character of the `jth` string of `words`, you can no longer use the
 * `xth` character of any string in `words` where `x <= k`. In other words, all characters to
 * the left of or at index `k` become unusuable for every string.
 * - Repeat the process until you form the string `target`.
 *
 * **Notice** that you can use **multiple characters** from the **same string** in words
 * provided the conditions above are met.
 *
 * Return *the number of ways to form `target` from `words`*. Since the answer may be too
 * large, return it **modulo** 109 + 7.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 1000`
 * - `1 <= words[i].length <= 1000`
 * - All strings in `words` have the same length.
 * - `1 <= target.length <= 1000`
 * - `words[i]` and `target` contain only lowercase English letters.
 *
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
    const n = words[0].length;
    const m = target.length;
    const mod = 10 ** 9 + 7;
    const dp = Array(m)
        .fill(null)
        .map(() => Array(n).fill(0));
    const charCounts = Array(n)
        .fill(null)
        .map(() => Array(26).fill(0));

    for (const word of words) {
        for (let i = 0; i < n; i++) {
            charCounts[i][word.charCodeAt(i) - 97]++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (target.charCodeAt(0) === words[0].charCodeAt(i)) {
            dp[0][i] = 1;
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = i; j < n; j++) {
            for (let k = 0; k < j; k++) {
                dp[i][j] = (dp[i][j] + dp[i - 1][k] * charCounts[j][target.charCodeAt(i) - 97]) % mod;
            }
        }
    }

    return dp[m - 1].reduce((a, b) => (a + b) % mod, 0);
};
