/**
 * **837. New 21 Game**
 *
 * Alice plays the following game, loosely based on the card game *"21"*.
 *
 * Alice starts with `0` points and draws numbers while she has less than `k` points. During each draw,
 * she gains an integer number of points randomly from the range `[1, maxPts]`, where `maxPts` is an
 * integer. Each draw is independent and the outcomes have equal probabilities.
 *
 * Alice stops drawing numbers when she gets `k` **or more points**.
 *
 * Return the probability that Alice has `n` or fewer points.
 *
 * Answers within `10-5` of the actual answer are considered accepted.
 *
 * **Constraints:**
 *
 * - `0 <= k <= n <= 104`
 * - `1 <= maxPts <= 104`
 *
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
const new21Game = function (n, k, maxPts) {
    // Create an array to store the probabilities
    let dp = new Array(n + 1);

    // Initialize the first element of the array to 1
    dp[0] = 1;

    // Initialize the sum variable
    let s = k > 0 ? 1 : 0;

    // Calculate the probabilities using dynamic programming
    for (let i = 1; i <= n; i++) {
        // Calculate the probability at index i
        dp[i] = s / maxPts;

        // If i is less than k, add the probability to the sum
        if (i < k) {
            s += dp[i];
        }

        // If i - maxPts is within the range [0, k), subtract the probability from the sum
        if (i - maxPts >= 0 && i - maxPts < k) {
            s -= dp[i - maxPts];
        }
    }

    // Calculate the total probability from k to n
    let ans = 0;
    for (let i = k; i <= n; i++) {
        ans += dp[i];
    }

    return ans;
};

const n = 10,
    k = 1,
    maxPts = 10;
// Output: 1.00000
// Explanation: Alice gets a single card, then stops.
console.log(new21Game(n, k, maxPts));

const n1 = 6,
    k1 = 1,
    maxPts1 = 10;
// Output: 0.60000
/* Explanation: Alice gets a single card, then stops.
In 6 out of 10 possibilities, she is at or below 6 points. */
console.log(new21Game(n1, k1, maxPts1));

const n2 = 21,
    k2 = 17,
    maxPts2 = 10;
// Output: 0.73278
console.log(new21Game(n2, k2, maxPts2));
