/**
 * **1220. Count Vowels Permutation**
 *
 * Given an integer `n`, your task is to count how many strings of
 * length `n` can be formed under the following rules:
 *
 * - Each character is a lower case vowel (`'a'`, `'e'`, `'i'`, `'o'`,
 * `'u'`)
 * - Each vowel `'a'` may only be followed by an `'e'`.
 * - Each vowel `'e'` may only be followed by an `'a'` or an `'i'`.
 * - Each vowel `'i'` may not be followed by another `'i'`.
 * - Each vowel `'o'` may only be followed by an `'i'` or a `'u'`.
 * - Each vowel `'u'` may only be followed by an `'a'`.
 *
 * Since the answer may be too large, return it modulo `10^9 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 2 * 10^4`
 *
 * @param {number} n
 * @return {number}
 */
const countVowelPermutation = function (n) {
    const MOD = 1000000007;
    let dp = new Array(2).fill(0).map(() => new Array(5).fill(0));
    let curr = 0,
        prev = 1;

    // Initialize for strings of length 1
    for (let i = 0; i < 5; i++) dp[curr][i] = 1;

    for (let i = 1; i < n; i++) {
        [curr, prev] = [prev, curr]; // Swap current and previous

        dp[curr][0] = dp[prev][1]; // 'a' can only be followed by 'e'
        dp[curr][1] = (dp[prev][0] + dp[prev][2]) % MOD; // 'e' can be followed by 'a' or 'i'
        dp[curr][2] = (dp[prev][0] + dp[prev][1] + dp[prev][3] + dp[prev][4]) % MOD; // 'i' can be followed by 'a', 'e', 'o', or 'u'
        dp[curr][3] = (dp[prev][2] + dp[prev][4]) % MOD; // 'o' can be followed by 'i' or 'u'
        dp[curr][4] = dp[prev][0]; // 'u' can only be followed by 'a'
    }

    let result = 0;
    for (let i = 0; i < 5; i++) {
        result = (result + dp[curr][i]) % MOD;
    }

    return result;
};
