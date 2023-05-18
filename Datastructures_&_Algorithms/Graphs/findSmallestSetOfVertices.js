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
