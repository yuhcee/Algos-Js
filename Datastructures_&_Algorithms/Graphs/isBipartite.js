/**
 * **785. Is Graph Bipartite?**
 *
 * There is an undirected graph with `n` nodes, where each node is numbered between `0` and `n -
 * 1`. You are given a 2D array `graph`, where `graph[u]` is an array of nodes that node `u` is
 * adjacent to. More formally, for each `v` in `graph[u]`, there is an undirected edge between node
 * `u` and node `v`. The graph has the following properties:
 *
 * - There are no self-edges (`graph[u]` does not contain `u`).
 * - There are no parallel edges (`graph[u]` does not contain duplicate values).
 * - If `v` is in `graph[u]`, then `u` is in `graph[v]` (the graph is undirected).
 * - The graph may not be connected, meaning there may be two nodes `u` and `v` such that there is
 * no path between them.
 *
 * A graph is **bipartite** if the nodes can be partitioned into two independent sets `A` and `B`
 * such that every edge in the graph connects a node in set `A` and a node in set `B`.
 *
 * Return *`true` if and only if it is **bipartite***.
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = (graph) => {
    // Map for storing vertices with their corresponding colors
    const visited = {};

    // Traverse graph vertices one by one
    for (let index = 0; index < graph.length; index++) {
        traverse(graph, visited, index);
    }

    // Check if any vertex is not colored
    return !Object.values(visited).some((value) => value === null);
};

const traverse = (graph, visited, index, vertex = graph[index], set = 'A') => {
    // Bail out if vertex already covered
    if (visited[index] !== undefined) {
        return;
    }

    // Set vertex color
    visited[index] = set;

    // Array to store colors of adjacent vertices
    const covered = [];

    for (let i = 0; i < vertex.length; i++) {
        let value = vertex[i];

        // Bail out if adjacent vertex already covered but do store its corresponding color
        if (visited[value] !== undefined) {
            covered.push(visited[value]);
            continue;
        }
        // Traverse adjacent vertex with alternate color
        traverse(graph, visited, value, graph[value], set === 'A' ? 'B' : 'A');
    }

    // If adjacent vertices are already colored with 2 colors (2 sets), set to null
    if (new Set(covered).size === 2) {
        visited[index] = null;
    }
};

const graph = [
    [1, 2, 3],
    [0, 2],
    [0, 1, 3],
    [0, 2],
]; // Output: false
// console.log(isBipartite(graph));

const graph1 = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
]; // Output: true
console.log(isBipartite(graph1));
