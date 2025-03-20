/**
 * **3108. Minimum Cost Walk in Weighted Graph**
 *
 * There is an undirected weighted graph with `n` vertices labeled from `0` to `n - 1`.
 *
 * You are given the integer `n` and an array `edges`, where `edges[i] = [ui, vi, wi]` indicates that there is an edge
 * between vertices `ui` and `vi` with a weight of `wi`.
 *
 * A walk on a graph is a sequence of vertices and edges. The walk starts and ends with a vertex, and each edge connects
 * the vertex that comes before it and the vertex that comes after it. It's important to note that a walk may visit the \
 * same edge or vertex more than once.
 *
 * The **cost** of a walk starting at node `u` and ending at node `v` is defined as the bitwise `AND` of the weights of
 * the edges traversed during the walk. In other words, if the sequence of edge weights encountered during the walk is
 * `w0, w1, w2, ..., wk`, then the cost is calculated as `w0 & w1 & w2 & ... & wk`, where `&` denotes the bitwise `AND`
 * operator.
 *
 * You are also given a 2D array `query`, where `query[i] = [si, ti]`. For each query, you need to find the minimum cost
 * of the walk starting at vertex `si` and ending at vertex `ti`. If there exists no such walk, the answer is `-1`.
 *
 * Return the array `answer`, where `answer[i]` denotes the **minimum** cost of a walk for query `i`.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 105`
 * - `0 <= edges.length <= 105`
 * - `edges[i].length == 3`
 * - `0 <= ui, vi <= n - 1`
 * - `ui != vi`
 * - `0 <= wi <= 105`
 * - `1 <= query.length <= 105`
 * - `query[i].length == 2`
 * - `0 <= si, ti <= n - 1`
 * - `si != ti`
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
const minimumCost = function (n, edges, query) {
    // Initialize DSU arrays
    let parent = Array.from({ length: n }, (_, i) => i);
    let rank = Array(n).fill(1);
    let component_AND = Array(n).fill(-1); // -1 acts as identity for &

    // Find function with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }

    // Process all edges to build components and compute AND values
    for (let [u, v, w] of edges) {
        let rootU = find(u);
        let rootV = find(v);
        if (rootU === rootV) {
            // Same component: update AND with current edge weight
            component_AND[rootU] &= w;
        } else {
            // Different components: union by rank
            if (rank[rootU] > rank[rootV]) {
                parent[rootV] = rootU;
                component_AND[rootU] &= component_AND[rootV] & w;
            } else if (rank[rootU] < rank[rootV]) {
                parent[rootU] = rootV;
                component_AND[rootV] &= component_AND[rootU] & w;
            } else {
                parent[rootU] = rootV;
                component_AND[rootV] &= component_AND[rootU] & w;
                rank[rootV]++;
            }
        }
    }

    // Process queries
    let answer = [];
    for (let [s, t] of query) {
        let rootS = find(s);
        let rootT = find(t);
        answer.push(rootS === rootT ? component_AND[rootS] : -1);
    }

    return answer;
};

const n = 5,
    edges = [
        [0, 1, 7],
        [1, 3, 7],
        [1, 2, 1],
    ],
    query = [
        [0, 3],
        [3, 4],
    ];
/* Output: [1,-1]
Explanation:
To achieve the cost of 1 in the first query, we need to move on the following edges: 0->1 (weight 7), 1->2 (weight 1), 2->1 (weight 1), 1->3 (weight 7).
In the second query, there is no walk between nodes 3 and 4, so the answer is -1. */
console.log(minimumCost(n, edges, query));

const n1 = 3,
    edges1 = [
        [0, 2, 7],
        [0, 1, 15],
        [1, 2, 6],
        [1, 2, 1],
    ],
    query1 = [[1, 2]];
/* Output: [0]
Explanation:
To achieve the cost of 0 in the first query, we need to move on the following edges: 1->2 (weight 1), 2->1 (weight 6), 1->2 (weight 1). */
console.log(minimumCost(n1, edges1, query1));
