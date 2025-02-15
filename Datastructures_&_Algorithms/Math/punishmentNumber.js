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
const punishmentNumber = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        const square = i * i;
        if (canPartition(square.toString(), i)) {
            sum += square;
        }
    }
    return sum;
};

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

const n = 10;
// Output: 182
/* Explanation: There are exactly 3 integers i in the range [1, 10] that satisfy the conditions in the statement:
- 1 since 1 * 1 = 1
- 9 since 9 * 9 = 81 and 81 can be partitioned into 8 and 1 with a sum equal to 8 + 1 == 9.
- 10 since 10 * 10 = 100 and 100 can be partitioned into 10 and 0 with a sum equal to 10 + 0 == 10.
Hence, the punishment number of 10 is 1 + 81 + 100 = 182 */
console.log(punishmentNumber(n));
