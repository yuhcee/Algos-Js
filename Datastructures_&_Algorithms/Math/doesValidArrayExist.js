/**
 * **2683. Neighboring Bitwise XOR**
 *
 * A **0-indexed** array `derived` with length `n` is derived by computing
 * the **bitwise XOR (⊕)** of adjacent values in a **binary array** `original` of length `n`.
 *
 * Specifically, for each index `i` in the range `[0, n - 1]`:
 *
 * - If `i = n - 1`, then `derived[i] = original[i] ⊕ original[0]`.
 * - Otherwise, `derived[i] = original[i] ⊕ original[i + 1]`.
 *
 * Given an array `derived`, your task is to determine whether there exists
 * a **valid binary array** original that could have formed `derived`.
 *
 * Return ***true** if such an array exists or **false** otherwise*.
 *
 * - A binary array is an array containing only **0's** and **1's**
 *
 * **Constraints:**
 *
 * - `n == derived.length`
 * - `1 <= n <= 105`
 * - The values in `derived` are either **0's** or **1's**
 *
 * @param {number[]} derived
 * @return {boolean}
 */
const doesValidArrayExist = function (derived) {
    const n = derived.length;

    const isValid = (start) => {
        const original = new Array(n);
        original[0] = start;

        for (let i = 1; i < n; i++) {
            original[i] = derived[i - 1] ^ original[i - 1];
        }
        // Check the circular condition
        return (original[n - 1] ^ original[0]) === derived[n - 1];
    };

    // Try both starting values for original[0]
    return isValid(0) || isValid(1);
};
