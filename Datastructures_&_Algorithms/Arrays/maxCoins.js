/**
 * **1561. Maximum Number of Coins You Can Get**
 *
 * There are `3n` piles of coins of varying size, you and your friends will take piles of coins as
 * follows:
 *
 * - In each step, you will choose **any** `3` piles of coins (not necessarily consecutive).
 * - Of your choice, Alice will pick the pile with the maximum number of coins.
 * - You will pick the next pile with the maximum number of coins.
 * - Your friend Bob will pick the last pile.
 * - Repeat until there are no more piles of coins.
 *
 * Given an array of integers `piles` where `piles[i]` is the number of coins in the `ith` pile.
 *
 * Return *the maximum number of coins that you can have*.
 *
 * **Constraints:**
 *
 * - `3 <= piles.length <= 105`
 * - `piles.length % 3 == 0`
 * - `1 <= piles[i] <= 104`
 *
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function (piles) {
    // Sort the piles in descending order
    piles.sort((a, b) => b - a);

    let maxCoins = 0;
    let n = piles.length / 3;

    for (let i = 0; i < n; i++) {
        // You always take the second pile in each triplet
        // Since the array is sorted, these will be at indices 1, 3, 5, ...
        maxCoins += piles[i * 2 + 1];
    }

    return maxCoins;
};

const piles = [2, 4, 1, 2, 7, 8];
// Output: 9
/* Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
The maximum number of coins which you can have are: 7 + 2 = 9.
On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal. */
console.log(maxCoins(piles));

const piles1 = [2, 4, 5];
// Output: 4
console.log(maxCoins(piles1));

const piles2 = [9, 8, 7, 6, 5, 1, 2, 3, 4];
// Output: 18
console.log(maxCoins(piles2));
