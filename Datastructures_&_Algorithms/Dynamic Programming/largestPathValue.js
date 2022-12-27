/**
 * **1857. Largest Color Value in a Directed Graph**
 *
 * There is a **directed graph** of `n` colored nodes and `m` edges. The nodes are numbered
 * from `0` to `n - 1`.
 *
 * You are given a string `colors` where `colors[i]` is a lowercase English letter representing
 * the **color** of the `ith` node in this graph (**0-indexed**). You are also given a 2D array
 * `edges` where `edges[j] = [aj, bj]` indicates that there is a **directed edge** from node
 * `aj` to node `bj`.
 *
 * A valid **path** in the graph is a sequence of nodes `x1 -> x2 -> x3 -> ... -> xk` such that
 * there is a directed edge from `xi` to `xi+1` for every `1 <= i < k`. The color value of the
 * path is the number of nodes that are colored the **most frequently** occurring color along
 * that path.
 *
 * Return the ***largest color value** of any valid path in the given graph, or `-1` if the
 * graph contains a cycle*.
 *
 * **Constraints:**
 *
 * - `n == colors.length`
 * - `m == edges.length`
 * - `1 <= n <= 105`
 * - `0 <= m <= 105`
 * - `colors` consists of lowercase English letters.
 * - `0 <= aj, bj < n`
 *
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = function (colors, edges) {
    
};
