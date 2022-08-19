/**
 * **474. Ones and Zeroes**
 * 
 * You are given an array of binary strings `strs` and two integers `m` and `n`.
 * Return *the size of the largest subset of `strs` such that there are **at most** `m` `0`'s and 
 * `n` `1`'s in the subset*.
 * 
 * A set `x` is a **subset** of a set `y` if all elements of `x` are also elements of `y`.

 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm = (S, M, N) => {
    let dp = Array.from({ length: M + 1 }, () => new Uint8Array(N + 1));

    for (let i = 0; i < S.length; i++) {
        let str = S[i],
            zeros = 0,
            ones = 0;
        for (let j = 0; j < str.length; j++) str.charAt(j) === '0' ? zeros++ : ones++;
        for (let j = M; j >= zeros; j--) for (let k = N; k >= ones; k--) dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
    }
    return dp[M][N];
};

const strs = ['10', '0001', '111001', '1', '0'],
    m = 5,
    n = 3;
// Output: 4
/* Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3. */
console.log(findMaxForm(strs, m, n));
const strs1 = ['10', '0', '1'],
    m1 = 1,
    n1 = 1;
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.
console.log(findMaxForm(strs1, m1, n1));
