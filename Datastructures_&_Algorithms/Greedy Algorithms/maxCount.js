/**
 * **2554. Maximum Number of Integers to Choose From a Range I**
 *
 * You are given an integer array `banned` and two integers `n` and `maxSum`.
 * You are choosing some number of integers following the below rules:
 *
 * - The chosen integers have to be in the range `[1, n]`.
 * - Each integer can be chosen **at most once**.
 * - The chosen integers should not be in the array `banned`.
 * - The sum of the chosen integers should not exceed `maxSum`.
 *
 * Return *the **maximum** number of integers you can choose following the
 * mentioned rules.*
 *
 * **Constraints:**
 *
 * - `1 <= banned.length <= 104`
 * - `1 <= banned[i], n <= 104`
 * - `1 <= maxSum <= 109`
 *
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
const maxCount = function (banned, n, maxSum) {
    // Create a set of banned numbers for O(1) lookups
    const bannedSet = new Set(banned);

    // Filter valid numbers in range [1, n]
    const validNumbers = [];
    for (let i = 1; i <= n; i++) {
        if (!bannedSet.has(i)) {
            validNumbers.push(i);
        }
    }

    // Sort valid numbers
    validNumbers.sort((a, b) => a - b);

    // Pick numbers while maintaining maxSum constraint
    let count = 0,
        currentSum = 0;
    for (const num of validNumbers) {
        if (currentSum + num > maxSum) {
            break;
        }
        currentSum += num;
        count++;
    }

    return count;
};

const banned = [1, 6, 5],
    n = 5,
    maxSum = 6;
// Output: 2
/* Explanation: You can choose the integers 2 and 4.
2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum. */
console.log(maxCount(banned, n, maxSum));
