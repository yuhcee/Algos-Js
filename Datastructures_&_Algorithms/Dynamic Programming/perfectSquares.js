/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
    //dp[i] represents the least number of perfect square numbers that sum to i
    var dp = new Array(n + 1).fill(n);
    dp[0] = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
};
