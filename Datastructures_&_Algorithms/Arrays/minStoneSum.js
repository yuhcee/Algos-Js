/**
 * **1962. Remove Stones to Minimize the Total**
 *
 * You are given a **0-indexed** integer array `piles`, where `piles[i]
 * ` represents the number of stones in the `ith` pile, and an integer
 * `k`. You should apply the following operation **exactly** `k` times:
 *
 * - Choose any `piles[i]` **and remove** `floor(piles[i] / 2)` stones
 * from it.
 * **Notice** that you can apply the operation on the **same** pile
 * more than once.
 *
 * Return *the **minimum** possible total number of stones remaining
 * after applying the `k` operations*.
 *
 * `floor(x)` is the **greatest** integer that is **smaller** than or
 * **equal** to `x` (i.e., rounds `x` down).
 *
 * **Constraints:
 *
 * - `1 <= piles.length <= 105`
 * - `1 <= piles[i] <= 104`
 * - `1 <= k <= 105`
 *
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
const minStoneSum = function (piles, k) {
    let pq = new MaxPriorityQueue({ priority: (x) => x });
    for (const pile of piles) pq.enqueue(pile);
    while (k--) {
        let cur = pq.dequeue().element;
        let remove = parseInt(cur / 2);
        pq.enqueue(cur - remove);
    }
    let res = 0;
    while (pq.size()) res += pq.dequeue().element; // difference, parse pq directly
    return res;
};

const piles = [5, 4, 9],
    k = 2;
// Output: 12;
/* Explanation: Steps of a possible scenario are:
- Apply the operation on pile 2. The resulting piles are [5,4,5].
- Apply the operation on pile 0. The resulting piles are [3,4,5].
The total number of stones in [3,4,5] is 12. */
console.log(minStoneSum(piles, k));
