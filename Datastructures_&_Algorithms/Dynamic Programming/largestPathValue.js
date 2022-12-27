/**
 * **1857. Largest Color Value in a Directed Graph**
 *
 * There is a **directed graph** of `n` colored nodes and `m` edges. The nodes are numbered
 * from `0` to `n - 1`.
 *
 * You are given a string `colors` where `colors[i]` is a lowercase English letter representing
 * the **color** of the `ith` node in this graph (**0-indexed**). You are also given a 2D array
 * `edges` where `edges[j] = [aj, bj]` indicates that there is a **directed edge** from node
 * `aj` to node `bj`.
 *
 * A valid **path** in the graph is a sequence of nodes `x1 -> x2 -> x3 -> ... -> xk` such that
 * there is a directed edge from `xi` to `xi+1` for every `1 <= i < k`. The color value of the
 * path is the number of nodes that are colored the **most frequently** occurring color along
 * that path.
 *
 * Return the ***largest color value** of any valid path in the given graph, or `-1` if the
 * graph contains a cycle*.
 *
 * **Constraints:**
 *
 * - `n == colors.length`
 * - `m == edges.length`
 * - `1 <= n <= 105`
 * - `0 <= m <= 105`
 * - `colors` consists of lowercase English letters.
 * - `0 <= aj, bj < n`
 *
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
const largestPathValue = function (colors, edges) {
    const n = colors.length;
    const graph = Array(n)
        .fill(null)
        .map(() => []);
    const indegree = Array(n).fill(0);
    const colorCounts = Array(n)
        .fill(null)
        .map(() => Array(26).fill(0));

    for (const [u, v] of edges) {
        graph[u].push(v);
        indegree[v]++;
    }

    const stack = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            stack.push(i);
        }
    }

    let visitedCount = 0;
    while (stack.length > 0) {
        const u = stack.pop();
        visitedCount++;

        colorCounts[u][colors.charCodeAt(u) - 97]++;

        for (const v of graph[u]) {
            if (--indegree[v] === 0) {
                stack.push(v);
            }

            for (let i = 0; i < 26; i++) {
                colorCounts[v][i] = Math.max(colorCounts[v][i], colorCounts[u][i]);
            }
        }
    }

    if (visitedCount < n) {
        return -1;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 26; j++) {
            result = Math.max(result, colorCounts[i][j]);
        }
    }

    return result;
};

const colors = 'abaca',
    edges = [
        [0, 1],
        [0, 2],
        [2, 3],
        [3, 4],
    ];
// Output: 3
// Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored "a" (red in the above image).
console.log(largestPathValue(colors, edges));

const colors2 = 'a',
    edges2 = [[0, 0]];
// Output: -1
// Explanation: There is a cycle from 0 to 0.
console.log(largestPathValue(colors2, edges2));
