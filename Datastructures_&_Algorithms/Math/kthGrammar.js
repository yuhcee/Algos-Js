/**
 * **779. K-th Symbol in Grammar**
 *
 * We build a table of n rows (**1-indexed**). We start by writing `0` in the `1st` row. Now in
 * every subsequent row, we look at the previous row and replace each occurrence of `0` with `01`,
 * and each occurrence of `1` with `10`.
 *
 * - For example, for `n = 3`, the `1st` row is `0`, the `2nd` row is `01`, and the `3rd` row is
 * `0110`.
 *
 * Given two integer `n` and `k`, return the `kth` (**1-indexed**) symbol in the `nth` row of a
 * table of `n` rows.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 30`
 * - `1 <= k <= 2n - 1`
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthGrammar = function (n, k) {
    // Base case
    if (n === 1) {
        return 0;
    }

    // Calculate the midpoint of the (n-1)-th row
    const mid = Math.pow(2, n - 2);

    // If k is in the first half of the (n-1)-th row
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        // If k is in the second half, flip the result of the (n-1)-th row
        return 1 - kthGrammar(n - 1, k - mid);
    }
};

const n = 1,
    k = 1;
// Output: 0
// Explanation: row 1: 0
console.log(kthGrammar(n, k));
