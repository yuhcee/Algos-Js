/**
 * **2924. Find Champion II**
 *
 * There are `n` teams numbered from `0` to `n - 1` in a tournament; each team
 * is also a node in a **DAG**.
 *
 * You are given the integer `n` and a **0-indexed 2D** integer array `edges`
 * of length `m` representing the **DAG**, where `edges[i] = [ui, vi]`
 * indicates that there is a directed edge from team `ui` to team `vi` in the
 * graph.
 *
 * A directed edge from `a` to `b` in the graph means that team `a` is
 * **stronger** than team `b` and team `b` is **weaker** than team `a`.
 *
 * Team `a` will be the **champion** of the tournament if there is no team `b`
 * that is **stronger** than team a.
 *
 * Return *the team that will be the **champion** of the tournament if there is
 * a **unique** champion, otherwise, return `-1`.*
 *
 * **Notes**
 *
 * - A **cycle** is a series of nodes `a1, a2, ..., an, an+1` such that node
 * `a1` is the same node as node `an+1`, the nodes `a1, a2, ..., an` are
 * distinct, and there is a directed edge from the node `ai` to node `ai+1` for
 * every `i` in the range `[1, n]`.
 * - A **DAG** is a directed graph that does not have any **cycle**.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 100`
 * - `m == edges.length`
 * - `0 <= m <= n * (n - 1) / 2`
 * - `edges[i].length == 2`
 * - `0 <= edge[i][j] <= n - 1`
 * - `edges[i][0] != edges[i][1]`
 * - The input is generated such that if team `a` is stronger than team `b`,
 * team `b` is not stronger than team `a`.
 * - The input is generated such that if team `a` is stronger than team `b` and
 * team `b` is stronger than team `c`, then team `a` is stronger than team `c`.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const findChampion = function (n, edges) {
    const inDegree = Array(n).fill(0); // Array to track incoming edges for each node

    // Calculate in-degree for each node
    for (const [u, v] of edges) {
        inDegree[v]++;
    }

    // Find nodes with in-degree 0
    let champion = -1;
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            if (champion !== -1) {
                // More than one node with in-degree 0
                return -1;
            }
            champion = i;
        }
    }

    return champion;
};
