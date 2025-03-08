/**
 * **2379. Minimum Recolors to Get K Consecutive Black Blocks**
 *
 * You are given a **0-indexed** string `blocks` of length `n`, where `blocks[i]` is
 * either `'W'` or `'B'`, representing the color of the `ith` block. The characters
 * `'W'` and `'B'` denote the colors white and black, respectively.
 *
 * You are also given an integer `k`, which is the desired number of **consecutive**
 * black blocks.
 *
 * In one operation, you can **recolor** a white block such that it becomes a black
 * block.
 *
 * Return *the **minimum** number of operations needed such that there is at least
 * **one** occurrence of k consecutive black blocks*.
 *
 * **Constraints:**
 *
 * - `n == blocks.length`
 * - `1 <= n <= 100`
 * - `blocks[i]` is either `'W'` or `'B'`.
 * - `1 <= k <= n`
 *
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
const minimumRecolors = function (blocks, k) {
    let minOperations = Infinity;
    let countWOccurences = 0;

    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') countWOccurences++;
    }

    minOperations = countWOccurences;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i - k] === 'W') countWOccurences--;
        if (blocks[i] === 'W') countWOccurences++;

        minOperations = Math.min(minOperations, countWOccurences);
    }

    return minOperations;
};

const blocks = 'WBBWWBBWBW',
    k = 7;
// Output: 3
/* Explanation:
One way to achieve 7 consecutive black blocks is to recolor the 0th, 3rd, and 4th blocks
so that blocks = "BBBBBBBWBW". 
It can be shown that there is no way to achieve 7 consecutive black blocks in less than 3 operations.
Therefore, we return 3. */
console.log(minimumRecolors(blocks, k));
