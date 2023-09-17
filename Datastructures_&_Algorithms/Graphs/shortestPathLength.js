/**
 * **847. Shortest Path Visiting All Nodes**
 *
 * You have an undirected, connected graph of `n` nodes labeled
 * from `0` to `n - 1`. You are given an array `graph` where
 * `graph[i]` is a list of all the nodes connected with node `i`
 * by an edge.
 *
 * Return *the length of the shortest path that visits every
 * node*. You may start and stop at any node, you may revisit
 * nodes multiple times, and you may reuse edges.
 *
 * **Constraints:**
 *
 * - `n == graph.length`
 * - `1 <= n <= 12`
 * - `0 <= graph[i].length < n`
 * - `graph[i]` does not contain `i`.
 * - If `graph[a]` contains `b`, then `graph[b]` contains `a`.
 * - The input graph is always connected.
 *
 * @param {number[][]} graph
 * @return {number}
 */
const shortestPathLength = function (graph) {
    const n = graph.length;
    const queue = []; // BFS queue
    const visited = new Set(); // Visited set

    // Initialize the BFS queue with starting states
    for (let i = 0; i < n; i++) {
        const mask = 1 << i;
        queue.push([mask, i, 0]); // [mask, node, distance]
        visited.add(mask + ',' + i);
    }

    while (queue.length > 0) {
        const [mask, node, dist] = queue.shift();

        // If all nodes are visited, return the distance
        if (mask === (1 << n) - 1) {
            return dist;
        }

        // Explore neighbors
        for (const next_node of graph[node]) {
            const next_mask = mask | (1 << next_node);
            if (!visited.has(next_mask + ',' + next_node)) {
                visited.add(next_mask + ',' + next_node);
                queue.push([next_mask, next_node, dist + 1]);
            }
        }
    }

    return -1; // This line should never be reached
};
