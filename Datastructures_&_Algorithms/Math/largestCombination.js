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
