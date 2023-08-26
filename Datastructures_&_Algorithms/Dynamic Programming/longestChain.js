/**
 * **646. Maximum Length of Pair Chain**
 *
 * You are given an array of `n` pairs `pairs` where `pairs[i] =
 * [lefti, righti]` and `lefti < righti`.
 *
 * A pair `p2 = [c, d]` **follows** a pair `p1 = [a, b]` if `b < c`. A
 * **chain** of pairs can be formed in this fashion.
 *
 * Return *the length longest chain which can be formed*.
 *
 * You do not need to use up all the given intervals. You can select
 * pairs in any order.
 *
 * **Constraints:**
 *
 * - `n == pairs.length`
 * - `1 <= n <= 1000`
 * - `-1000 <= lefti < righti <= 1000`
 *
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
    pairs.sort((a, b) => a[1] - b[1]);
    const n = pairs.length;
    const dp = new Array(n).fill(1); // Initialize dp array with all elements set to 1

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            // Check if the first element of the current pair is greater than the second element of the previous pair
            if (pairs[i][0] > pairs[j][1]) {
                // Update the dp array by taking the maximum of the current value and the value at the previous pair plus 1
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Return the maximum value in the dp array, which represents the length of the longest chain that can be formed
    return Math.max(...dp);
};

const pairs = [
    [1, 2],
    [2, 3],
    [3, 4],
];
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4].
console.log(findLongestChain(pairs));

