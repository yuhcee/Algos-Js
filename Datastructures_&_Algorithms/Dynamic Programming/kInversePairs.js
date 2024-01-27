/**
 * **629. K Inverse Pairs Array**
 *
 * For an integer array `nums`, an **inverse pair** is a pair of integers `
 * [i, j]` where `0 <= i < j < nums.length` and `nums[i] > nums[j]`.
 *
 * Given two integers `n` and `k`, return the number of different arrays
 * consist of numbers from `1` to `n` such that there are exactly `k`
 * **inverse pairs**. Since the answer can be huge, return it **modulo** `109
 * + 7`.
 *
 * **Constraints:**
 * - `1 <= n <= 1000`
 * - `0 <= k <= 1000`
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = function (n, k, MOD = 10 ** 9 + 7) {
    const [dp, pr] = [new Array(k + 2).fill(0), new Array(k + 2).fill(0)];

    for (let i = 1; i <= n; i++) {
        dp[1] = 1;

        for (let j = 2; j <= k + 1; j++) {
            dp[j] = (pr[j] - Math.max(0, j - 1) + MOD) % MOD;
        }

        for (let l = 1; l <= k + 1; l++) {
            pr[l] = pr[l - 1] + dp[l] + MOD;
        }
    }

    return dp[k + 1];
};

const n = 3,
    k = 0;
// Output: 1
// Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
console.log(kInversePairs(n, k));
