/**
 * **2657. Find the Prefix Common Array of Two Arrays**
 *
 * You are given two **0-indexed** integer permutations `A` and `B` of
 * length `n`.
 *
 * A **prefix common array** of `A` and `B` is an array `C` such that `
 * ` is equal to the count of numbers that are present at or before the
 * index `i` in both `A` and `B`.
 *
 * Return *the **prefix common array** of `A` and `B`*.
 *
 * A sequence of `n` integers is called a **permutation** if it contains
 * all integers from `1` to `n` exactly once.
 *
 * **Constraints:**
 *
 * - `1 <= A.length == B.length == n <= 50`
 * - `1 <= A[i], B[i] <= n`
 * - It is guaranteed that `A` and `B` are both a permutation of `n`
 * integers.
 *
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const findThePrefixCommonArray = function (A, B) {
    const n = A.length;
    const seen = new Set();
    const result = [];
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        if (seen.has(A[i])) {
            commonCount++;
        }

        if (seen.has(B[i])) {
            commonCount++;
        }

        if (A[i] === B[i]) {
            commonCount++;
        }

        seen.add(A[i]);
        seen.add(B[i]);
        result.push(commonCount);
    }

    return result;
};
