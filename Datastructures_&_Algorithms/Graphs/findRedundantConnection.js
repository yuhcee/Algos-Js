/**
 * **684. Redundant Connection**
 *
 * In this problem, a tree is an **undirected graph** that is connected and
 * has no cycles.
 *
 * You are given a graph that started as a tree with `n` nodes labeled from
 * `1` to `n`, with one additional edge added. The added edge has two
 * **different** vertices chosen from `1` to `n`, and was not an edge that
 * already existed. The graph is represented as an array `edges` of length
 * `n` where `edges[i] = [ai, bi]` indicates that there is an edge between
 * nodes `ai` and `bi` in the graph.
 *
 * Return *an edge that can be removed so that the resulting graph is a
 * tree of `n` nodes*. If there are multiple answers, return the answer
 * that occurs last in the input.
 *
 * **Constraints:**
 *
 * - `n == edges.length`
 * - `3 <= n <= 1000`
 * - `edges[i].length == 2`
 * - `1 <= ai < bi <= edges.length`
 * - `ai != bi`
 * - There are no repeated edges.
 * - The given graph is connected.
 *
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function (edges) {
    // Helper function to find the parent of a node with path compression
    function find(parent, i) {
        if (parent[i] !== i) {
            parent[i] = find(parent, parent[i]); // Path compression
        }
        return parent[i];
    }

    // Union function to connect two sets
    function union(parent, rank, x, y) {
        let xroot = find(parent, x);
        let yroot = find(parent, y);

        // Attach smaller rank tree under root of high rank tree
        if (rank[xroot] < rank[yroot]) {
            parent[xroot] = yroot;
        } else if (rank[xroot] > rank[yroot]) {
            parent[yroot] = xroot;
        } else {
            parent[yroot] = xroot;
            rank[xroot]++;
        }
    }

    let n = edges.length;
    let parent = Array(n + 1)
        .fill(0)
        .map((_, i) => i);
    let rank = Array(n + 1).fill(0);

    for (let [u, v] of edges) {
        // If the roots of u and v are the same, there's a cycle; this edge is redundant
        if (find(parent, u) === find(parent, v)) {
            return [u, v];
        }
        // Union the sets containing u and v
        union(parent, rank, u, v);
    }

    // This line should not be reached if the input is valid, but included for completeness
    return [];
};

const edges = [
    [1, 2],
    [1, 3],
    [2, 3],
];
// Output: [2,3]
console.log(findRedundantConnection(edges));

const edges1 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
];
// Output: [1,4]
console.log(findRedundantConnection(edges1));
