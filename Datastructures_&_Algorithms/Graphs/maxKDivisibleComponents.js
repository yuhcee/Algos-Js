/**
 * **2872. Maximum Number of K-Divisible Components**
 *
 * There is an undirected tree with n nodes labeled from `0` to `n - 1`. You are given the
 * integer `n` and a 2D integer array `edges` of length `n - 1`, where `edges[i] = [ai, bi]`
 * indicates that there is an edge between nodes `ai` and `bi` in the tree.
 *
 * You are also given a **0-indexed** integer array `values` of length `n`, where `values[i]
 * ` is the **value** associated with the `ith` node, and an integer `k`.
 *
 * A **valid split** of the tree is obtained by removing any set of edges, possibly empty,
 * from the tree such that the resulting components all have values that are divisible by
 * `k`, where the **value of a connected component** is the sum of the values of its nodes.
 *
 * Return *the **maximum number of components** in any valid split.*
 *
 * **Constraints:**
 *
 * - `1 <= n <= 3 * 104`
 * - `edges.length == n - 1`
 * - `edges[i].length == 2`
 * - `0 <= ai, bi < n`
 * - `values.length == n`
 * - `0 <= values[i] <= 109`
 * - `1 <= k <= 109`
 * - Sum of `values` is divisible by `k`.
 * - The input is generated such that `edges` represents a valid tree.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
const maxKDivisibleComponents = function (n, edges, values, k) {
    // Build the adjacency list for the tree
    const adjList = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let components = 0;

    // DFS to traverse the tree and compute the k-divisible components
    const dfs = (node, parent) => {
        let sum = values[node];

        for (const neighbor of adjList[node]) {
            if (neighbor === parent) continue;
            sum += dfs(neighbor, node);
        }

        // If the sum of the subtree rooted at this node is divisible by k,
        // we can form a valid component
        if (sum % k === 0) {
            components++;
            return 0; // Return 0 because we "cut" this subtree
        }

        return sum;
    };

    dfs(0, -1); // Start DFS from the root (node 0)

    return components;
};

const n = 5,
    edges = [
        [0, 2],
        [1, 2],
        [1, 3],
        [2, 4],
    ],
    values = [1, 8, 1, 4, 4],
    k = 6;
// Output: 2
/* Explanation: We remove the edge connecting node 1 with 2. The resulting split is valid because:
- The value of the component containing nodes 1 and 3 is values[1] + values[3] = 12.
- The value of the component containing nodes 0, 2, and 4 is values[0] + values[2] + values[4] = 6.
It can be shown that no other valid split has more than 2 connected components. */
console.log(maxKDivisibleComponents(n, edges, values, k));

const n1 = 7,
    edges1 = [
        [0, 1],
        [0, 2],
        [1, 3],
        [1, 4],
        [2, 5],
        [2, 6],
    ],
    values1 = [3, 0, 6, 1, 5, 2, 1],
    k1 = 3;
// Output: 3
/* Explanation: We remove the edge connecting node 0 with 2, and the edge connecting node 0 with 1. The resulting split is valid because:
- The value of the component containing node 0 is values[0] = 3.
- The value of the component containing nodes 2, 5, and 6 is values[2] + values[5] + values[6] = 9.
- The value of the component containing nodes 1, 3, and 4 is values[1] + values[3] + values[4] = 6.
It can be shown that no other valid split has more than 3 connected components. */
console.log(maxKDivisibleComponents(n1, edges1, values1, k1));
