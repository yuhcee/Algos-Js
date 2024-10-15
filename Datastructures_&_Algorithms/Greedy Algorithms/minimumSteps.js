/**
 * **2938. Separate Black and White Balls**
 *
 * There are `n` balls on a table, each ball has a color black or white.
 *
 * You are given a **0-indexed** binary string `s` of length `n`, where `1` and
 * `0` represent black and white balls, respectively.
 *
 * In each step, you can choose two adjacent balls and swap them.
 *
 * Return *the **minimum** number of steps to group all the black balls to the
 * right and all the white balls to the left*.
 *
 * **Constraints:**
 *
 * - `1 <= n == s.length <= 105`
 * - `s[i]` is either `'0'` or `'1'`.
 *
 * @param {string} s
 * @return {number}
 */
const minimumSteps = function (s) {
    let onesCount = 0;
    let totalSwaps = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            totalSwaps += onesCount;
        } else {
            onesCount++;
        }
    }

    return totalSwaps;
};

const s = '101';
// Output: 1
/* Explanation: We can group all the black balls to the right in the following way:
- Swap s[0] and s[1], s = "011".
Initially, 1s are not grouped together, requiring at least 1 step to group them to the right. */
console.log(minimumSteps(s));
