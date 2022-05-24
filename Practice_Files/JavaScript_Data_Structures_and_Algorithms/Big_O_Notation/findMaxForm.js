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
};
