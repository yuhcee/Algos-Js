/**
 * **279. Perfect Squares**
 *
 * Given an integer `n`, return *the least number of perfect square numbers
 * that sum to `n`*.
 *
 * A **perfect square** is an integer that is the square of an integer; in
 * other words, it is the product of some integer with itself. For example,
 * `1`, `4`, `9`, and `16` are perfect squares while `3` and `11` are not.
 *
 * **Constraints:**
 *
 * `1 <= n <= 104`
 *
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

const n = 12;
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
console.log(numSquares(n));

const n1 = 13;
// Output: 2
// Explanation: 13 = 4 + 9.
console.log(numSquares(n1));
