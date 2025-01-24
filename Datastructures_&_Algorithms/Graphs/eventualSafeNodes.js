/**
 * **802. Find Eventual Safe States**
 *
 * There is a directed graph of `n` nodes with each node labeled from `0`
 * to `n - 1`. The graph is represented by a **0-indexed** 2D integer array
 * graph where `graph[i]` is an integer array of nodes adjacent to node
 * `i`, meaning there is an edge from node i to each node in `graph[i]`.
 *
 * A node is a **terminal node** if there are no outgoing edges. A node is
 * a **safe node** if every possible path starting from that node leads to
 * a **terminal node** (or another safe node).
 *
 * Return *an array containing all the **safe nodes** of the graph.* The
 * answer should be sorted in **ascending** order.
 *
 * **Constraints:**
 *
 * - `n == graph.length`
 * - `1 <= n <= 104`
 * - `0 <= graph[i].length <= n`
 * - `0 <= graph[i][j] <= n - 1`
 * - `graph[i]` is sorted in a strictly increasing order.
 * - The graph may contain self-loops.
 * - The number of edges in the graph will be in the range `[1, 4 * 104]`.
 *
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
    const n = graph.length;
    const reverseGraph = Array.from({ length: n }, () => []);
    const inDegree = new Array(n).fill(0);

    // Step 1: Build the reverse graph and calculate in-degrees
    for (let u = 0; u < n; u++) {
        for (const v of graph[u]) {
            reverseGraph[v].push(u); // Reverse edge: v -> u
            inDegree[u]++; // Increment in-degree for u
        }
    }

    // Step 2: Initialize queue with all terminal nodes (in-degree 0 nodes)
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    // Step 3: Perform BFS
    const safeNodes = new Array(n).fill(false);
    while (queue.length > 0) {
        const node = queue.shift();
        safeNodes[node] = true; // Mark as safe

        for (const neighbor of reverseGraph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Step 4: Collect and sort safe nodes
    const result = [];
    for (let i = 0; i < n; i++) {
        if (safeNodes[i]) result.push(i);
    }

    return result;
};
