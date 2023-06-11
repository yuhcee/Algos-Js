/**
 * **2316. Count Unreachable Pairs of Nodes in an Undirected Graph**
 *
 * You are given an integer `n`. There is an **undirected** graph with `n` nodes, numbered from `0` to
 * `n - 1`. You are given a 2D integer array `edges` where `edges[i] = [ai, bi]` denotes that there
 * exists an **undirected** edge connecting nodes `ai` and `bi`.
 *
 * Return *the **number of pairs** of different nodes that are **unreachable** from each other.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 * - `0 <= edges.length <= 2 * 105`
 * - `edges[i].length == 2`
 * - `0 <= ai, bi < n`
 * - `ai != bi`
 * - There are no repeated edges.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const countPairs = function (n, edges) {
    const adj = [];

    for (let i = 0; i < n; i++) {
        adj.push([]);
    }

    for (let [from, to] of edges) {
        adj[from].push(to);
        adj[to].push(from);
    }

    const visited = new Set();

    function dfs(from) {
        visited.add(from);

        let count = 1;

        for (const to of adj[from]) {
            if (!visited.has(to)) {
                count += dfs(to);
            }
        }

        return count;
    }

    const groups = [];

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            const count = dfs(i);
            groups.push(count);
        }
    }

    let ans = 0;

    for (let i = 0; i < groups.length - 1; i++) {
        for (let j = i + 1; j < groups.length; j++) {
            ans += groups[i] * groups[j];
        }
    }

    return ans;
};

const n = 3,
    edges = [
        [0, 1],
        [0, 2],
        [1, 2],
    ];
// Output: 0
// Explanation: There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.
console.log(countPairs(n, edges));

const n1 = 7,
    edges1 = [
        [0, 2],
        [0, 5],
        [2, 4],
        [1, 6],
        [5, 4],
    ];
// Output: 14
/* Explanation: There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14. */
console.log(countPairs(n1, edges1));
