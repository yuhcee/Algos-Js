/**
 * **873. Length of Longest Fibonacci Subsequence**
 *
 * A sequence `x1, x2, ..., xn` is *Fibonacci-like* if:
 *
 * - `n >= 3`
 * - `xi + xi+1 == xi+2` for all `i + 2 <= n`
 *
 * Given a strictly **increasing** array `arr` of positive integers forming
 * a sequence, return *the **length** of the longest Fibonacci-like
 * subsequence of `arr`*. If one does not exist, return `0`.
 *
 * A **subsequence** is derived from another sequence `arr` by deleting any
 * number of elements (including none) from `arr`, without changing the
 * order of the remaining elements. For example, `[3, 5, 8]` is a
 * subsequence of `[3, 4, 5, 6, 7, 8]`.
 *
 * **Constraints:**
 *
 * - `3 <= arr.length <= 1000`
 * - `1 <= arr[i] < arr[i + 1] <= 109`
 *
 * @param {number[]} arr
 * @return {number}
 */
const lenLongestFibSubseq = function (arr) {
    const n = arr.length;
    const indexMap = new Map();
    for (let i = 0; i < n; i++) {
        indexMap.set(arr[i], i);
    }

    const dp = new Array(n).fill().map(() => new Array(n).fill(2));
    let maxLen = 0;

    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            const prev = arr[j] - arr[i];
            if (prev < arr[i] && indexMap.has(prev)) {
                const k = indexMap.get(prev);
                dp[i][j] = dp[k][i] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }

    return maxLen >= 3 ? maxLen : 0;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Output: 5
// Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
console.log(lenLongestFibSubseq(arr));
