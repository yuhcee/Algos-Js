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

const A = [1, 3, 2, 4],
    B = [3, 1, 2, 4];
// Output: [0,2,3,4]
/* Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4. */
console.log(findThePrefixCommonArray(A, B));

const A1 = [2, 3, 1],
    B1 = [3, 1, 2];
// Output: [0,1,3]
/* Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: only 3 is common in A and B, so C[1] = 1.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3. */
console.log(findThePrefixCommonArray(A1, B1));

const A2 = [1, 2, 3],
    B2 = [1, 2, 3];
// Output: [1,2,3]
/* Explanation: At i = 0: only 1 is common in A and B, so C[0] = 1.
At i = 1: 1 and 2 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3. */
console.log(findThePrefixCommonArray(A2, B2));
