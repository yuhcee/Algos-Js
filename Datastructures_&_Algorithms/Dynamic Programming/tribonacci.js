/**
 * **1137. N-th Tribonacci Number**
 *
 * The Tribonacci sequence `Tn` is defined as follows:
 *
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 *
 * Given `n`, return the value of Tn.
 *
 * **Constraints:**
 *
 * - `0 <= n <= 37`
 * - The answer is guaranteed to fit within a 32-bit integer, ie. `answer <= 2^31 - 1`.
 *
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) => {
    // If n is 0, return 0
    if (n === 0) return 0;

    // If n is 1 or 2, return 1
    if (n === 1 || n === 2) return 1;

    // Initialize variables for first three terms in the sequence
    let a = 0,
        b = 1,
        c = 1;

    // Loop through to calculate the next terms in the sequence
    for (let i = 3; i <= n; i++) {
        // Shift the values of a, b, and c to calculate the next term
        let d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    // Return the nth term
    return c;
};
