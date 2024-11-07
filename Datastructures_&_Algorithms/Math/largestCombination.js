/**
 * **2275. Largest Combination With Bitwise AND Greater Than Zero**
 *
 * The **bitwise AND** of an array `nums` is the
 * bitwise AND of all integers in `nums`.
 *
 * - For example, for `nums = [1, 5, 3]`, the
 * bitwise AND is equal to `1 & 5 & 3 = 1`.
 *
 * - Also, for `nums = [7]`, the bitwise AND is
 * `7`.
 * You are given an array of positive integers
 * `candidates`. Evaluate the **bitwise AND** of
 * every **combination** of numbers of
 * `candidates`.
 * Each number in `candidates` may only be used
 * once in each combination.
 *
 * Return *the size of the **largest** combination
 * of candidates with a bitwise AND **greater**
 * than `0`*.
 *
 * **Constraints:**
 *
 * - `1 <= candidates.length <= 105`
 * - `1 <= candidates[i] <= 107`
 *
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function (candidates) {
    const bitCounts = Array(24).fill(0); // Since 2^24 is greater than 10^7

    // Count `1`s for each bit position
    for (const num of candidates) {
        for (let i = 0; i < 24; i++) {
            if ((num & (1 << i)) !== 0) {
                // Check if the ith bit is set
                bitCounts[i]++;
            }
        }
    }

    // The result is the maximum count in any bit position
    return Math.max(...bitCounts);
};

const candidates = [16, 17, 71, 62, 12, 24, 14];
// Output: 4
/* Explanation: The combination [16,17,62,24] has a bitwise AND of 16 & 17 & 62 & 24 = 16 > 0.
The size of the combination is 4.
It can be shown that no combination with a size greater than 4 has a bitwise AND greater than 0.
Note that more than one combination may have the largest size.
For example, the combination [62,12,24,14] has a bitwise AND of 62 & 12 & 24 & 14 = 8 > 0 */
console.log(largestCombination(candidates));

const candidates1 = [8, 8];
// Output: 2
/* Explanation: The largest combination [8,8] has a bitwise AND of 8 & 8 = 8 > 0.
The size of the combination is 2, so we return 2. */
console.log(largestCombination(candidates1));
