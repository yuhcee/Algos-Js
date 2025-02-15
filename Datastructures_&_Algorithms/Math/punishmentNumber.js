/**
 * **2698. Find the Punishment Number of an Integer**
 *
 * Given a positive integer `n`, return the **punishment number**
 * of `n`.
 *
 * The **punishment number** of n is defined as the sum of the
 * squares of all integers `i` such that:
 *
 * - `1 <= i <= n`
 * - The decimal representation of `i * i` can be partitioned into
 * contiguous substrings such that the sum of the integer values
 * of these substrings equals `i`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 *
 * @param {number} n
 * @return {number}
 */
const punishmentNumber = function (n) {};

function canPartition(s, target) {
    if (s.length === 0) return target === 0;
    for (let i = 1; i <= s.length; i++) {
        const current = parseInt(s.substring(0, i), 10);
        if (current > target) break;
        if (canPartition(s.substring(i), target - current)) {
            return true;
        }
    }
    return false;
}
