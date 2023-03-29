/**
 * **2360. Longest Cycle in a Graph**
 *
 * You are given a **directed** graph of `n` nodes numbered from `0` to `n - 1`, where
 * each node has **at most one** outgoing edge.
 *
 * The graph is represented with a given **0-indexed** array `edges` of size `n`,
 * indicating that there is a directed edge from node `i` to node `edges[i]`. If there
 * is no outgoing edge from node `i`, then `edges[i] == -1`.
 *
 * Return *the length of the **longest** cycle in the graph*. If no cycle exists,
 * return `-1`.
 *
 * A cycle is a path that starts and ends at the `same` node.
 *
 * **Constraints:**
 *
 * - `n == edges.length`
 * - `2 <= n <= 105`
 * - `-1 <= edges[i] < n`
 * - `edges[i] != i`
 *
 * @param {number[]} edges
 * @return {number}
 */
const longestCycle = function (edges) {
    const n = edges.length;
    const visited = Array(n).fill(false);
    let max = -1;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const cycle = dfs(i, edges, visited);
            max = Math.max(max, cycle);
        }
    }

    return max;
};

const dfs = function (i, edges, visited) {
    let cycle = 0;
    while (i !== -1 && !visited[i]) {
        visited[i] = true;
        cycle++;
        i = edges[i];
    }

    return i === -1 ? -1 : cycle - 1;
};

