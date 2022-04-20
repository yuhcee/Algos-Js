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
/* const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    const visited = new Set(nodeA);
    const stack = [nodeA];

    // begin DFS
    while (stack.length > 0) {
        const node = stack.pop();

        // if current node is equal to nodeB, return true - found
        if (node === nodeB) return true;

        // iterate through neigbhors of current node
        for (let neighbor of graph[node]) {
            // check if neighbor is visited already
            if (!visited.has(neighbor)) {
                // visit and push node to stack
                visited.add(neighbor);
                stack.push(neighbor);
            }
        }
    }
    return false;
}; */

// build graph on the edges
/* const buildGraph = (edges) => {
    const graph = {};

    for (const [a, b] of edges) {
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}; */


// Recursive Approach
const undirectedPath = (edges, nodeA, nodeB) => {
    
}

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];
const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n'],
];

console.log(undirectedPath(edges, 'j', 'm')); // -> true
console.log(undirectedPath(edges1, 'k', 'o')); // -> false

