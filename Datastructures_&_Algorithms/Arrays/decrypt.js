/**
 * **1652. Defuse the Bomb**
 *
 * You have a bomb to defuse, and your time is running out! Your informer will provide you with a
 * **circular** array `code` of length of `n` and a key `k`.
 *
 * To decrypt the code, you must replace every number. All the numbers are replaced **simultaneously**.
 *
 * - If `k > 0`, replace the `ith` number with the sum of the **next** `k` numbers.
 * - If `k < 0`, replace the `ith` number with the sum of the **previous** `k` numbers.
 * - If `k == 0`, replace the `ith` number with `0`.
 *
 * As `code` is circular, the next element of `code[n-1]` is `code[0]`, and the previous element of `
 * ` is `code[n-1]`.
 *
 * Given the **circular** array code and an integer key `k`, return *the decrypted code to defuse the bomb!*
 *
 * **Constraints:**
 *
 * - `n == code.length`
 * - `1 <= n <= 100`
 * - `1 <= code[i] <= 100`
 * - `-(n - 1) <= k <= n - 1`
 *
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
    const n = code.length;
    if (k === 0) return new Array(n).fill(0); // Case when k = 0

    const result = new Array(n).fill(0);
    const extendedCode = [...code, ...code]; // Create a circular array by doubling it

    for (let i = 0; i < n; i++) {
        if (k > 0) {
            for (let j = 1; j <= k; j++) {
                result[i] += extendedCode[i + j];
            }
        } else {
            // k < 0
            for (let j = 1; j <= Math.abs(k); j++) {
                result[i] += extendedCode[i + n - j];
            }
        }
    }

    return result;
};

const code = [5, 7, 1, 4],
    k = 3;
// Output: [12,10,16,13]
/* Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around. */
console.log(decrypt(code, k));
