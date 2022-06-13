/**
 * **583. Delete Operation for Two Strings**
 *
 * Given two strings `word1` and `word2`, return *the minimum number of **steps** required to make
 * `word1` and `word2` the same.
 *
 * In one *step*, you can delete exactly one character in either string.
 *
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (w1, w2) => {
    // set length
    const [n1, n2] = [w1.length, w2.length];

    // set dp
    const dp = [...new Array(n1 + 1)].map(() => new Array(n2 + 1).fill(0));

    // 2d loop
    for (let i = 1; i <= n1; i++) {
        for (let j = 1; j <= n2; j++) {
            // less 1
            const [r1, r2] = [i - 1, j - 1];

            // set dp
            dp[i][j] = w1[r1] === w2[r2] ? dp[r1][r2] + 1 : Math.max(dp[r1][j], dp[i][r2]);
        }
    }
};
