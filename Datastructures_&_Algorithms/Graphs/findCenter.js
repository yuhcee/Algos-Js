/**
 * **1791. Find Center of Star Graph**
 *
 * There is an undirected **star** graph consisting of `n` nodes labeled
 * from `1` to `n`. A star graph is a graph where there is one **center**
 * node and **exactly** `n - 1` edges that connect the center node with
 * every other node.
 *
 * You are given a 2D integer array `edges` where each `edges[i] = [ui, vi]
 * ` indicates that there is an edge between the nodes `ui` and `vi`.
 * Return *the center of the given star graph*.
 *
 * **Constraints:**
 *
 * - `3 <= n <= 105`
 * - `edges.length == n - 1`
 * - `edges[i].length == 2`
 * - `1 <= ui, vi <= n`
 * - `ui != vi`
 * - The given `edges` represent a valid star graph.
 *
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = function (edges) {
    // The center node must be in the first edge
    const [u1, v1] = edges[0];
    // Check if either u1 or v1 is in the second edge
    const [u2, v2] = edges[1];
    if (u1 === u2 || u1 === v2) {
        return u1;
    }
    return v1;
};

const edges = [
    [1, 2],
    [2, 3],
    [4, 2],
];
// Output: 2
// Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
console.log(findCenter(edges));

const edges1 = [
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
];
// Output: 1
console.log(findCenter(edges1));
