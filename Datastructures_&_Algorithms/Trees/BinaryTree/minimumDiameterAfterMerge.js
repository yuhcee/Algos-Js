/**
 * **3203. Find Minimum Diameter After Merging Two Trees**
 *
 * There exist two undirected trees with `n` and `m` nodes, numbered from `0`
 * to `n - 1` and from `0` to `m - 1`, respectively. You are given two 2D
 * integer arrays edges1 and edges2 of lengths `n - 1` and `m - 1`,
 * respectively, where `edges1[i] = [ai, bi]` indicates that there is an edge
 * between nodes `ai` and `bi` in the first tree and `edges2[i] = [ui, vi]`
 * indicates that there is an edge between nodes `ui` and `vi` in the second
 * tree.
 *
 * You must connect one node from the first tree with another node from the
 * second tree with an edge.
 *
 * Return the minimum possible **diameter** of the resulting tree.
 *
 * The **diameter** of a tree is the length of the longest path between any two
 * nodes in the tree.
 *
 * **Constraints:**
 *
 * - `1 <= n, m <= 105`
 * - `edges1.length == n - 1`
 * - `edges2.length == m - 1`
 * - `edges1[i].length == edges2[i].length == 2`
 * - `edges1[i] = [ai, bi]`
 * - `0 <= ai, bi < n`
 * - `edges2[i] = [ui, vi]`
 * - `0 <= ui, vi < m`
 * - The input is generated such that `edges1` and `edges2` represent valid
 * trees.
 *
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
const minimumDiameterAfterMerge = function (edges1, edges2) {
    // Helper function to build the adjacency list
    const buildAdjacencyList = (edges, size) => {
        const adj = Array.from({ length: size }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        return adj;
    };

    // Helper function to perform DFS and find the farthest node and its distance
    const findFarthestNode = (adj, node, distance, visited, farthest) => {
        visited[node] = true;
        if (distance > farthest[1]) {
            farthest[0] = node;
            farthest[1] = distance;
        }
        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                findFarthestNode(adj, neighbor, distance + 1, visited, farthest);
            }
        }
    };

    // Number of nodes in the two trees
    const n1 = edges1.length + 1;
    const n2 = edges2.length + 1;

    // Build adjacency lists for both trees
    const adj1 = buildAdjacencyList(edges1, n1);
    const adj2 = buildAdjacencyList(edges2, n2);

    // Function to calculate the diameter of a tree
    const calculateDiameter = (adj, size) => {
        if (size === 0) return 0;

        const visited = new Array(size).fill(false);
        const farthest = [-1, -Infinity];

        // Find the farthest node from any arbitrary start node (0 here)
        findFarthestNode(adj, 0, 0, visited, farthest);

        // Reset visited array and find the farthest node from the previous farthest node
        visited.fill(false);
        const otherFarthest = [-1, -Infinity];
        findFarthestNode(adj, farthest[0], 0, visited, otherFarthest);

        return otherFarthest[1]; // Diameter is the distance between the two farthest nodes
    };

    // Calculate diameters of the two trees
    const diameter1 = calculateDiameter(adj1, n1);
    const diameter2 = calculateDiameter(adj2, n2);

    // If a tree is empty, its diameter is 0
    const d1 = edges1.length === 0 ? 0 : diameter1;
    const d2 = edges2.length === 0 ? 0 : diameter2;

    // Calculate the minimum possible diameter after merging the trees
    return Math.max(d1, d2, Math.floor((d1 + 1) / 2) + Math.floor((d2 + 1) / 2) + 1);
};
