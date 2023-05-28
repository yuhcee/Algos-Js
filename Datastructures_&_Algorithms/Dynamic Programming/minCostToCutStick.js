/**
 * **1547. Minimum Cost to Cut a Stick**
 *
 * Given a wooden stick of length `n` units. The stick is labelled from `0` to `n`. For
 * example, a stick of length **6** is labelled as follows:
 *
 * Given an integer array `cuts` where `cuts[i]` denotes a position you should perform a cut at.
 *
 * You should perform the cuts in order, you can change the order of the cuts as you wish.
 *
 * The cost of one cut is the length of the stick to be cut, the total cost is the sum of costs
 * of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e. the sum of
 * their lengths is the length of the stick before the cut). Please refer to the first example
 * for a better explanation.
 *
 * Return *the minimum total cost* of the cuts.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 106`
 * - `1 <= cuts.length <= min(n - 1, 100)`
 * - `1 <= cuts[i] <= n - 1`
 * - All the integers in `cuts` array are **distinct**.
 *
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCostToCutStick = function (n, cuts) {
    cuts.push(0); // Add 0 at the beginning to represent the left end of the stick
    cuts.push(n); // Add n at the end to represent the right end of the stick
    cuts.sort((a, b) => a - b); // Sort the cuts in ascending order
    const m = cuts.length;
    const dp = new Array(m).fill(0).map(() => new Array(m).fill(0)); // Create a DP array to store minimum costs

    // Calculate the minimum cost for different subproblems
    for (let len = 2; len < m; len++) {
        for (let i = 0; i < m - len; i++) {
            const j = i + len;
            dp[i][j] = Infinity; // Initialize the cost as infinity

            // Calculate the cost for different split points within the current range
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]); // Calculate the cost for the current split point
            }

            dp[i][j] += cuts[j] - cuts[i]; // Add the cost of the current cut
        }
    }

    return dp[0][m - 1];
};

const n = 7,
    cuts = [1, 3, 4, 5];
// Output: 16
// Explanation: Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:

/* The first cut is done to a rod of length 7 so the cost is 7. The second cut is done to a rod of length 6 (i.e. the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3. The total cost is 7 + 6 + 4 + 3 = 20.
Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16). */
console.log(minCostToCutStick(n, cuts));

const n1 = 9,
    cuts1 = [5, 6, 1, 4, 2];
// Output: 22
/* Explanation: If you try the given cuts ordering the cost will be 25.
There are much ordering with total cost <= 25, for example, the order [4, 6, 5, 2, 1] has total cost = 22 which is the minimum possible. */
console.log(minCostToCutStick(n1, cuts1));

const n2 = 5,
    cuts2 = [1, 3, 4, 5, 34];
// Output: 45
console.log(minCostToCutStick(n2, cuts2));
