/**
 * **2192. All Ancestors of a Node in a Directed Acyclic Graph**
 *
 * You are given a positive integer n representing the number of nodes of a
 * **Directed Acyclic Graph** (DAG). The nodes are numbered from `0` to ```
 * (**inclusive**).
 *
 * You are also given a 2D integer array `edges`, where `edges[i] = [fromi,
 * toi]` denotes that there is a **unidirectional** edge from `fromi` to
 * `toi` in the graph.
 *
 * Return a list `answer`, where `answer[i]` is the **list of ancestors**
 * of the `ith` node, sorted in **ascending order**.
 *
 * A node `u` is an **ancestor** of another node `v` if `u` can reach `v`
 * via a set of edges.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 * - `0 <= edges.length <= min(2000, n * (n - 1) / 2)`
 * - `edges[i].length == 2`
 * - `0 <= fromi, toi <= n - 1`
 * - `fromi != toi`
 * - There are no duplicate edges.
 * - The graph is **directed** and **acyclic**.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function (n, edges) {
    // Step 1: Build the graph and in-degree array
    const graph = Array.from({ length: n }, () => []);
    const inDegree = Array(n).fill(0);

    for (let [from, to] of edges) {
        graph[from].push(to);
        inDegree[to]++;
    }

    // Step 2: Perform Topological Sort using Kahn's algorithm
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const ancestors = Array.from({ length: n }, () => new Set());

    while (queue.length > 0) {
        const node = queue.shift();

        for (let neighbor of graph[node]) {
            ancestors[neighbor].add(node);
            for (let ancestor of ancestors[node]) {
                ancestors[neighbor].add(ancestor);
            }
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // Convert sets to sorted arrays
    const result = ancestors.map((ancestorSet) => Array.from(ancestorSet).sort((a, b) => a - b));
    return result;
};
