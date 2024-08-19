/**
 * **650. 2 Keys Keyboard**
 *
 * There is only one character `'A'` on the screen of a notepad. You can
 * perform one of two operations on this notepad for each step:
 *
 * - Copy All: You can copy all the characters present on the screen (a
 * partial copy is not allowed).
 * - Paste: You can paste the characters which are copied last time.
 *
 * Given an integer `n`, return *the minimum number of operations to get
 * the character `'A'` exactly `n` times on the screen*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 *
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
    let steps = 0;
    let factor = 2;

    while (n > 1) {
        while (n % factor === 0) {
            steps += factor;
            n /= factor;
        }
        factor++;
    }

    return steps;
};

const n = 3;
// Output: 3
/* Explanation: Initially, we have one character 'A'.
In step 1, we use Copy All operation.
In step 2, we use Paste operation to get 'AA'.
In step 3, we use Paste operation to get 'AAA'. */
console.log(minSteps(n));

const n1 = 1;
// Output: 0
console.log(minSteps(n1));
