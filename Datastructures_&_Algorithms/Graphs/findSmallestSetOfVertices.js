/**
 * **1557. Minimum Number of Vertices to Reach All Nodes**
 *
 * Given a **directed acyclic graph**, with `n` vertices numbered from `0` to
 * `n-1`, and an array `edges` where `edges[i] = [fromi, toi]` represents a
 * directed edge from node `fromi` to node `toi`.
 *
 * *Find the smallest set of vertices from which all nodes in the graph are
 * reachable. It's guaranteed that a unique solution exists.*
 *
 * Notice that you can return the vertices in any order.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 10^5`
 * - `1 <= edges.length <= min(10^5, n * (n - 1) / 2)`
 * - `edges[i].length == 2`
 * - `0 <= fromi, toi < n`
 * - All pairs `(fromi, toi)` are distinct.
 *
 * @param {number} n - The number of vertices in the graph.
 * @param {number[][]} edges - The array of directed edges.
 * @return {number[]} - The smallest set of vertices from which all nodes
 * are reachable.
 */
const findSmallestSetOfVertices = function (n, edges) {
    // Create an array to store the incoming edge counts for each vertex.
    const incomingEdges = new Array(n).fill(0);

    // Iterate through the edges and count the incoming edges for each vertex.
    for (const [from, to] of edges) {
        incomingEdges[to]++;
    }

    const smallestSet = [];

    // Iterate through the vertices and add the ones with no incoming edges to the smallest set.
    for (let i = 0; i < n; i++) {
        if (incomingEdges[i] === 0) {
            smallestSet.push(i);
        }
    }

    return smallestSet;
};

const n = 6;
const edges = [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
];
// Output: [0, 3]
/* Explanation: It's not possible to reach all the nodes from a single vertex.
From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3]. */
console.log(findSmallestSetOfVertices(n, edges));

const n1 = 5;
const edges1 = [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
];
// Output: [0, 2, 3]
/* Explanation: Notice that vertices 0, 3 and 2 are not reachable from any other node,
so we must include them. Also any of these vertices can reach nodes 1 and 4. */
console.log(findSmallestSetOfVertices(n1, edges1));

const n2 = 2;
const edges2 = [
    [0, 1],
    [1, 0],
];
// Output: [0, 1]
/* Explanation: Graphs with multiple edges between nodes are allowed */
console.log(findSmallestSetOfVertices(n2, edges2));
