/**
 * **2685. Count the Number of Complete Components**
 *
 * You are given an integer `n`. There is an **undirected** graph with `n` vertices, numbered from `0` to `n - 1`. You
 * are given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there exists an **undirected** edge
 * connecting vertices `ai` and `bi`.
 *
 * Return the number of **complete connected components** of the graph.
 *
 * A **connected component** is a subgraph of a graph in which there exists a path between any two vertices, and no
 * vertex of the subgraph shares an edge with a vertex outside of the subgraph.
 *
 * A connected component is said to be **complete** if there exists an edge between every pair of its vertices.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 50`
 * - `0 <= edges.length <= n * (n - 1) / 2`
 * - `edges[i].length == 2`
 * - `0 <= ai, bi <= n - 1`
 * - `ai != bi`
 * - There are no repeated edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countCompleteComponents = function (n, edges) {
    let adj = new Map();

    // Initialize adjacency list for each node
    for (let i = 0; i < n; i++) {
        adj.set(i, new Set());
    }

    // Fill adjacency list
    for (let [a, b] of edges) {
        adj.get(a).add(b);
        adj.get(b).add(a);
    }

    let visited = new Set();
    let completeCount = 0;

    // Helper function to explore a component using DFS
    const dfs = (node, componentNodes) => {
        visited.add(node);
        componentNodes.push(node);
        for (let neighbor of adj.get(node)) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, componentNodes);
            }
        }
    };

    // Explore each component
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            let componentNodes = [];
            dfs(i, componentNodes);

            let size = componentNodes.length;
            let edgeCount = 0;

            // Count edges in this component
            for (let node of componentNodes) {
                edgeCount += adj.get(node).size;
            }

            // Each edge was counted twice, so divide by 2
            edgeCount /= 2;

            // Check if component is complete
            if (edgeCount === (size * (size - 1)) / 2) {
                completeCount++;
            }
        }
    }

    return completeCount;
};

const n = 6,
    edges = [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
    ];
// Output: 3
// Explanation: From the picture above, one can see that all of the components of this graph are complete.
console.log(countCompleteComponents(n, edges));

const n1 = 6,
    edges1 = [
        [0, 1],
        [0, 2],
        [1, 2],
        [3, 4],
        [3, 5],
    ];
// Output: 1
/* Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1. */
console.log(countCompleteComponents(n1, edges1));

const n2 = 5,
    edges2 = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
    ];
// Output: 0
// Explanation: None of the components of this graph are complete.
console.log(countCompleteComponents(n2, edges2));
