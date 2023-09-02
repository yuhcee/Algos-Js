/**
 * **338. Counting Bits**
 *
 * Given an integer `n`, return *an array `ans` of length `n + 1` such
 * that for each `i` `(0 <= i <= n)`, `ans[i]` is the number of `1`'s
 * in the binary representation of `i`.
 *
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const result = new Array(n + 1).fill(0); // Initialize an array of length n+1, filled with 0s

    for (let i = 1; i <= n; i++) {
        // Use the property that the number of 1s in a binary number `x` is equal to the number of 1s in `x/2`
        // If `i` is even, then it has the same number of 1s as `i/2`
        // If `i` is odd, then it has one more 1 than `i/2`
        result[i] = result[i >> 1] + (i & 1); // i >> 1 is equivalent to Math.floor(i / 2), and i & 1 checks if i is odd
    }

    return result;
};
