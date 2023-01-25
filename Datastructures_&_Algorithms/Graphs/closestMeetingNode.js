/**
 * **2359. Find Closest Node to Given Two Nodes**
 *
 * You are given a **directed** graph of `n` nodes numbered from `0` to `n - 1`, where each node has
 * **at most one** outgoing edge.
 *
 * The graph is represented with a given **0-indexed** array edges of size `n`, indicating that there
 * is a directed edge from node `i` to node `edges[i]`. If there is no outgoing edge from `i`, then
 * `edges[i] == -1`.
 *
 * You are also given two integers `node1` and `node2`.
 *
 * Return *the **index** of the node that can be reached from both `node1` and `node2`, such that the
 * **maximum** between the distance from `node1` to that node, and from `node2` to that node is
 * **minimized***. If there are multiple answers, return the node with the **smallest** index, and if
 * no possible answer exists, return `-1`.
 *
 * Note that `edges` may contain cycles.
 *
 * **Constraints**:
 *
 * - `n == edges.length`
 * - `2 <= n <= 105`
 * - `-1 <= edges[i] < n`
 * - `edges[i] != i`
 * - `0 <= node1, node2 < n`
 *
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
// function to find the closest meeting node between two nodes in a graph represented by an array of edges
// edges: array of integers representing the edges in the graph, with each index representing a node and the value at that index representing the next node in the edge
// node1: integer representing the first node
// node2: integer representing the second node
// returns: integer representing the closest meeting node between node1 and node2
const closestMeetingNode = function (edges, node1, node2) {
    // get the distances from node1 to all other nodes in the graph
    const distances1 = getDistances(node1, edges);
    // get the distances from node2 to all other nodes in the graph
    const distances2 = getDistances(node2, edges);

    // initialize variables to keep track of the closest meeting node and the minimum distance
    let minPath = Number.MAX_SAFE_INTEGER;
    let target = -1;

    // loop through all nodes in the graph
    for (let i = 0; i < edges.length; i++) {
        // if either node1 or node2 have not reached this node, continue
        if (!distances1.has(i) || !distances2.has(i)) continue;
        // calculate the maximum distance between node1 and node2 to this node
        const localMinPath = Math.max(distances1.get(i), distances2.get(i));
        // if this distance is greater than the current minimum distance, continue
        if (minPath <= localMinPath) continue;
        // update the minimum distance and closest meeting node
        minPath = localMinPath;
        target = i;
    }
    // return the closest meeting node
    return target;
};

// function to calculate the distance from a starting node to all other nodes in the graph
// index: integer representing the starting node
// edges: array of integers representing the edges in the graph, with each index representing a node and the value at that index representing the next node in the edge
// returns: Map object with keys as the node and values as the distance from the starting node
function getDistances(index, edges) {
    // create a Map to store the distances
    const distances = new Map();
    // initialize distance to 0
    let distance = 0;
    // loop until we have reached the starting node or a node that has already been visited
    while (!distances.has(index) && index !== -1) {
        // store the distance for this node
        distances.set(index, distance);
        // increment distance
        distance++;
        // update index to the next node in the edge
        index = edges[index];
    }
    // return the Map of distances
    return distances;
}

const edges = [2, 2, 3, -1],
    node1 = 0,
    node2 = 1;
// Output: 2
// Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
// The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.

console.log(closestMeetingNode(edges, node1, node2));

const edges1 = [1, 2, -1],
    node11 = 0,
    node21 = 2;
// Output: 2
/* Explanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
The maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2. */
console.log(closestMeetingNode(edges1, node11, node21));
