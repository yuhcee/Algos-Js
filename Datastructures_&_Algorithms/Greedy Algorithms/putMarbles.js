/**
 * **2551. Put Marbles in Bags**
 *
 * You have `k` bags. You are given a **0-indexed** integer array weights where weights[i] is the
 * weight of the ith marble. You are also given the integer `k`.
 *
 * Divide the marbles into the `k` bags according to the following rules:
 *
 * - No bag is empty.
 * - If the `ith` marble and `jth` marble are in a bag, then all marbles with an index between the
 * `ith` and `jth` indices should also be in that same bag.
 * - If a bag consists of all the marbles with an index from `i` to `j` inclusively, then the cost
 * of the bag is `weights[i] + weights[j]`.
 *
 * The **score** after distributing the marbles is the sum of the costs of all the `k` bags.
 *
 * Return *the **difference** between the **maximum** and **minimum** scores among marble
 * distributions*.
 *
 * **Constraints:**
 *
 * - `1 <= k <= weights.length <= 105`
 * - `1 <= weights[i] <= 109`
 *
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
const putMarbles = function (weights, k) {
    const n = weights.length;
    if (k === n) return 0; // Each marble in its own bag, all scores equal
    if (k === 1) return 0; // All marbles in one bag, only one possible score

    // Create array of adjacent pair sums
    const pairSums = [];
    for (let i = 0; i < n - 1; i++) {
        pairSums.push(weights[i] + weights[i + 1]);
    }

    // Sort the pair sums
    pairSums.sort((a, b) => a - b);

    // For minimum score: take k-1 smallest pair sums
    let minScore = weights[0] + weights[n - 1]; // First and last elements always included
    for (let i = 0; i < k - 1; i++) {
        minScore += pairSums[i];
    }

    // For maximum score: take k-1 largest pair sums
    let maxScore = weights[0] + weights[n - 1]; // First and last elements always included
    for (let i = 0; i < k - 1; i++) {
        maxScore += pairSums[n - 2 - i];
    }

    return maxScore - minScore;
};

const weights = [1, 3, 5, 1],
    k = 2;
// Output: 4
/* Explanation: 
The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6. 
The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10. 
Thus, we return their difference 10 - 6 = 4. */
console.log(putMarbles(weights, k));

const weights1 = [1, 3],
    k1 = 2;
// Output: 0
/* Explanation: The only distribution possible is [1],[3]. 
Since both the maximal and minimal score are the same, we return 0. */
console.log(putMarbles(weights1, k1));

const weights2 = [1, 5, 3, 2],
    k2 = 3;
// Output: 3
/* Explanation: The only distribution possible is [1],[3]. 
Since both the maximal and minimal score are the same, we return 0. */
console.log(putMarbles(weights2, k2));
