/**
 * **1971. Find if Path Exists in Graph**
 *
 * There is a **bi-directional** graph with n vertices, where each vertex
 * is labeled from `0` to `n - 1` (**inclusive**). The **edges** in the
 * graph are represented as a 2D integer array `edges`, where each `edges
 * [i] = [ui, vi]` denotes a bi-directional edge between vertex `ui` and
 * vertex `vi`. Every vertex pair is connected by **at most one** edge,
 * and no vertex has an edge to itself.
 *
 * You want to determine if there is a **valid path** that exists from
 * vertex `source` to vertex `destination`.
 *
 * Given `edges` and the integers `n`, `source`, and `destination`, return
 * *`true` if there is a **valid path** from `source` to `destination`, or
 * `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 2 * 105`
 * - `0 <= edges.length <= 2 * 105`
 * - `edges[i].length == 2`
 * - `0 <= ui, vi <= n - 1`
 * - `ui != vi`
 * - `0 <= source, destination <= n - 1`
 * - There are no duplicate edges.
 * - There are no self edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
    // Create an adjacency list to represent the graph
    const graph = new Array(n).fill(null).map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u); // Since the graph is bi-directional
    }
    
    // Create a set to keep track of visited vertices
    const visited = new Set();
    
    // DFS function to traverse the graph
    const dfs = (node) => {
        // If we reach the destination, return true
        if (node === destination) return true;
        
        // Mark the current node as visited
        visited.add(node);
        
        // Visit all neighbors of the current node
        for (const neighbor of graph[node]) {
            // If the neighbor is not visited, visit it and continue the DFS
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) return true; // If we reach the destination through this path, return true
            }
        }
        
        // If we've explored all paths from this node and haven't found the destination, return false
        return false;
    };
    
    // Start DFS from the source vertex
    return dfs(source);
};
