/**
 * **1514. Path with Maximum Probability**
 *
 * You are given an undirected weighted graph of `n` nodes (0-indexed), represented by an edge list
 * where `edges[i] = [a, b]` is an undirected edge connecting the nodes `a` and `b` with a probability
 * of success of traversing that edge `succProb[i]`.
 *
 * Given two nodes `start` and `end`, find the path with the maximum probability of success to go from
 * `start` to `end` and return its success probability.
 *
 * If there is no path from `start` to `end`, **return 0**. Your answer will be accepted if it differs
 * from the correct answer by at most **1e-5**.
 *
 * **Constraints:**
 * - `2 <= n <= 10^4`
 * - `0 <= start, end < n`
 * - `start != end`
 * - `0 <= a, b < n`
 * - `a != b`
 * - `0 <= succProb.length == edges.length <= 2*10^4`
 * - `0 <= succProb[i] <= 1`
 * - There is at most one edge between every two nodes.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = function (n, edges, succProb, start, end) {};
