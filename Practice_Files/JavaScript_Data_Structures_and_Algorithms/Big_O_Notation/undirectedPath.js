/**
 * **undirected path**
 *
 * Write a function, *undirectedPath*, that takes in an array of edges for an undirected graph and two
 * (nodeA, nodeB).
 *
 * The function should return a *boolean indicating whether or not there exists a path
 * between `nodeA` and `nodeB`*.
 *
 * @param {*} edges
 * @param {*} nodeA
 * @param {*} nodeB
 */

// Iterative Approach - DFS
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set(nodeA);
    const stack = [nodeA];

    
};

// build graph on the edges
const buildGraph = (edges) => {
    const graph = {};

    for (const [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
};
