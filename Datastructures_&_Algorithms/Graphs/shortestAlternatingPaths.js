/**
 * **1129. Shortest Path with Alternating Colors**
 *
 * You are given an integer `n`, the number of nodes in a directed graph where the
 * nodes are labeled from `0` to `n - 1`. Each edge is red or blue in this graph,
 * and there could be self-edges and parallel edges.
 *
 * You are given two arrays `redEdges` and `blueEdges` where:
 *
 * - `redEdges[i] = [ai, bi]` indicates that there is a directed red edge from node
 * `ai` to node `bi` in the graph, and
 * - `blueEdges[j] = [uj, vj]` indicates that there is a directed blue edge from
 * node `uj` to node `vj` in the graph.
 *
 * Return an array `answer` of length `n`, where each `answer[x]` is the length of
 * the shortest path from node `0` to node `x` such that the edge colors alternate
 * along the path, or `-1` if such a path does not exist.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 100`
 * - `0 <= redEdges.length, blueEdges.length <= 400`
 * - `redEdges[i].length == blueEdges[j].length == 2`
 * - `0 <= ai, bi, uj, vj < n`
 *
 *
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    // Create a dictionary to store all the red and blue edges as separate lists
    const neighbors = {
        red: getNeighbors(n, redEdges),
        blue: getNeighbors(n, blueEdges),
    };

    // Create sets to keep track of visited nodes for red and blue edges
    const visited = {
        red: new Set(),
        blue: new Set(),
    };

    // Initialize an array to store the shortest distances from node 0 to all nodes
    const res = new Array(n).fill(Infinity);

    // Add node 0 to the queue for both red and blue edges
    // dist, node, lastColor
    const queue = [
        [0, 0, 'red'],
        [0, 0, 'blue'],
    ];

    // BFS to find the shortest alternating paths
    while (queue.length) {
        // Dequeue the first element in the queue
        const [dist, node, lastColor] = queue.shift();

        // Check if we've seen this edge before
        if (visited[lastColor].has(node)) {
            continue;
        }
        visited[lastColor].add(node);

        // Update the minimum path so far
        res[node] = Math.min(res[node], dist);

        // Queue the neighbors of the opposite color edge
        const nextColor = lastColor !== 'red' ? 'red' : 'blue';
        for (const neighbor of neighbors[nextColor][node]) {
            queue.push([dist + 1, neighbor, nextColor]);
        }
    }

    // Replace all the Infinity values in the result array with -1
    for (let i = 0; i < res.length; i++) {
        if (res[i] === Infinity) {
            res[i] = -1;
        }
    }

    return res;
};

// Helper function to get the neighbors of each node for a given set of edges
function getNeighbors(n, edges) {
    const neighbors = new Array(n);

    // Initialize an empty array for each node
    for (let i = 0; i < n; i++) {
        neighbors[i] = [];
    }

    // Add the neighbors to the corresponding node
    for (const [source, dest] of edges) {
        neighbors[source].push(dest);
    }

    return neighbors;
}

const n = 3,
    redEdges = [
        [0, 1],
        [1, 2],
    ],
    blueEdges = [];
// Output: [0,1,-1]
console.log(shortestAlternatingPaths(n, redEdges, blueEdges));

const n1 = 3,
    redEdges1 = [[0, 1]],
    blueEdges1 = [[2, 1]];
// Output: [0,1,-1]
console.log(shortestAlternatingPaths(n1, redEdges1, blueEdges1));
