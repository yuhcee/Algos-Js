/**
 *
 * **956. Tallest Billboard**
 *
 * You are installing a billboard and want it to have the largest height. The billboard will have two
 * steel supports, one on each side. Each steel support must be an equal height.
 *
 * You are given a collection of `rods` that can be welded together. For example, if you have rods of
 * lengths `1`, `2`, and `3`, you can weld them together to make a support of length `6`.
 *
 * Return *the largest possible height of your billboard installation. If you cannot support the
 * billboard, return `0`*.
 *
 * **Constraints:**
 *
 * - `1 <= rods.length <= 20`
 * - `1 <= rods[i] <= 1000`
 * - `sum(rods[i]) <= 5000`
 *
 * @param {number[]} rods
 * @return {number}
 */
const tallestBillboard = function (rods) {
    // Create a dynamic programming (DP) object to store the maximum heights
    // Key: Difference in heights between the two steel supports
    // Value: Maximum height achievable with the given difference
    const dp = { 0: 0 };

    // Iterate through each rod
    for (const rod of rods) {
        // Iterate through each existing difference in the DP object
        for (let [diff, val] of Object.entries({ ...dp })) {
            // Convert the difference from string to number
            diff = parseInt(diff);

            // Calculate the height when the rod is added to the positive difference side
            dp[diff + rod] = Math.max(dp[diff + rod] || 0, val);

            // Calculate the height when the rod is added to the negative difference side
            const newDiff = Math.abs(diff - rod);
            const min = Math.min(diff, rod);
            dp[newDiff] = Math.max(dp[newDiff] || 0, val + min);
        }
    }

    // Return the maximum height achievable with a difference of 0
    return dp[0];
};

const rods = [1, 2, 3, 6];
// Output: 6
// Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
console.log(tallestBillboard(rods));

const rods1 = [1, 2, 3, 4, 5, 6];
// Output: 10
// Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
console.log(tallestBillboard(rods1));
