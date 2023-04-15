/**
 * **2218. Maximum Value of K Coins From Piles**
 *
 * There are `n` **piles* of coins on a table. Each pile consists of a **positive number** of
 * coins of assorted denominations.
 *
 * In one move, you can choose any coin on **top** of any pile, remove it, and add it to your
 * wallet.
 *
 * Given a list `piles`, where `piles[i]` is a list of integers denoting the composition of the
 * `ith` pile from **top to bottom**, and a positive integer `k`, return *the **maximum total
 * value** of coins you can have in your wallet if you choose **exactly** `k` coins optimally.
 *
 * **Constraints:**
 *
 * - `n == piles.length`
 * - `1 <= n <= 1000`
 * - `1 <= piles[i][j] <= 105`
 * - `1 <= k <= sum(piles[i].length) <= 2000`
 *
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */

const maxValueOfCoins = function (piles, k) {
    const n = piles.length; // Number of piles
    const cache = {}; // Cache to store already computed values

    /**
     * Recursive helper function that computes the maximum total value of coins
     * you can have in your wallet if you choose exactly `k` coins optimally
     * from the `i`th pile and onwards.
     *
     * @param {number} i - The index of the current pile.
     * @param {number} k - The number of coins to choose.
     * @return {number} The maximum total value of coins you can have in your wallet.
     */
    function getMaxValue(i, k) {
        // Base case: no more piles or no more coins to choose
        if (i >= n || k <= 0) {
            return 0;
        }

        const key = i + ',' + k; // Create a unique key for the cache
        if (cache[key]) {
            return cache[key]; // Return the cached value if available
        }

        let result = getMaxValue(i + 1, k); // Skip the current pile
        let sum = 0; // Sum of coins from the current pile
        for (let j = 0; j < piles[i].length && j < k; j++) {
            // Iterate through the coins in the current pile
            sum += piles[i][j]; // Add the coin to the sum
            result = Math.max(result, sum + getMaxValue(i + 1, k - j - 1));
            // Recursively compute the maximum total value of coins for the remaining piles
            // and add the current sum to it. Update the result if necessary.
        }

        cache[key] = result; // Store the result in the cache
        return result;
    }

    return getMaxValue(0, k); // Start the recursive computation from the first pile
};

const piles = [
        [1, 100, 3],
        [7, 8, 9],
    ],
    k = 2;
// Output: 101
// Explanation:
// The above diagram shows the different ways we can choose k coins.
// The maximum total we can obtain is 101.
console.log(maxValueOfCoins(piles, k));
