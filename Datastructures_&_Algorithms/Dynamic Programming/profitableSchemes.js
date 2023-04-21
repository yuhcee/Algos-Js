/**
 * **879. Profitable Schemes**
 *
 * There is a group of `n` members, and a list of various crimes they could commit. The `ith` crime
 * generates a `profit[i]` and requires `group[i]` members to participate in it. If a member
 * participates in one crime, that member can't participate in another crime.
 *
 * Let's call a **profitable scheme** any subset of these crimes that generates at least `minProfit`
 * profit, and the total number of members participating in that subset of crimes is at most `n`.
 *
 * Return the number of schemes that can be chosen. Since the answer may be very large, **return it
 * modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 100`
 * - `0 <= minProfit <= 100`
 * - `1 <= group.length <= 100`
 * - `1 <= group[i] <= 100`
 * - `profit.length == group.length`
 * - `0 <= profit[i] <= 100`
 *
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
// dp[i][j] denote number of schemes having profit i with j members
const profitableSchemes = function (n, minProfit, group, profit) {
    // Initialize the memo to be an array of length minProfit + 1, each element of which is an array
    // of length n + 1, each element of which is 0
    const memo = Array.from({ length: minProfit + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    // Set the first element of the memo to 1
    memo[0][0] = 1;

    // Loop through the profits
    for (let i = 0; i < profit.length; i++) {
        // Get the current profit
        const currentProfit = profit[i];

        // Get the current group size
        const currentGroupSize = group[i];

        // Loop through the profits in reverse
        for (let j = minProfit; j >= 0; j--) {
            // Loop through the group sizes in reverse
            for (let k = n; k >= currentGroupSize; k--) {
                // Add the number of schemes having profit j with k members to the number of schemes
                // having profit j - currentProfit with k - currentGroupSize members
                memo[j][k] += memo[Math.max(0, j - currentProfit)][k - currentGroupSize];
                memo[j][k] %= 1000000007;
            }
        }
    }

    // Initialize the number of schemes to 0
    let numberOfSchemes = 0;

    // Loop through the group sizes
    for (let i = 0; i <= n; i++) {
        // Add the number of schemes having profit minProfit with i members to the number of schemes
        numberOfSchemes += memo[minProfit][i];
        numberOfSchemes %= 1000000007;
    }

    // Return the number of schemes
    return numberOfSchemes;
};

const n = 5,
    minProfit = 3,
    group = [2, 2],
    profit = [2, 3];
// Output: 2
/* Explanation: To make a profit of at least 3, the group could either commit crimes 0 and 1, or just crime 1.
In total, there are 2 schemes. */
console.log(profitableSchemes(n, minProfit, group, profit));
