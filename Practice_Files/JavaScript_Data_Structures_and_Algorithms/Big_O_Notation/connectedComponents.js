/**
 * **323. Number of Connected Components in an Undirected Graph**
 *
 * You have a graph of `n` nodes. You are given an integer `n` and an array edges where
 * `edges[i] = [ai, bi]` indicates that there is an edge between `ai` and `bi` in the graph.
 *
 * Return the *number of connected components in the graph*.
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

const countComponents = (n, edges) => {
    const graph = buildGraph(n, edges);
    const visited = new Set();
    const count = 0;

    for (let node in graph) {
        if (!visited.has(String(node))) {
            if (hasPath(graph, node, visited)) count += 1;
        }
    }

    return count;
};

const buildGraph = (n, edges) => {
    const graph = {};

    for (let i = 0; i < n; i++) {
        graph[i] = [];
    }

    for (let edge of edges) {
        const [a, b] = edge;
        graph[a].pus(b);
        graph[b].push(a);
    }

    return graph;
};

const n = 5,
    edges = [
        [0, 1],
        [1, 2],
        [3, 4],
    ]; // Output: 2
const n1 = 5,
    edges1 = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
    ]; // Output: 1

console.log(countComponents(n, edges));
console.log(countComponents(n1, edges1));
