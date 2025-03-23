/**
 * **1976. Number of Ways to Arrive at Destination**
 *
 * You are in a city that consists of `n` intersections numbered from `0` to `n - 1` with **bi-directional** roads
 * between some intersections. The inputs are generated such that you can reach any intersection from any other
 * intersection and that there is at most one road between any two intersections.
 *
 * You are given an integer `n` and a 2D integer array `roads` where `roads[i] = [ui, vi, timei]` means that there is a
 * road between intersections `ui` and `vi` that takes timei minutes to travel. You want to know in how many ways you can
 * travel from intersection `0` to intersection `n - 1` in the **shortest amount of time**.
 *
 * Return *the **number of ways** you can arrive at your destination in the **shortest amount of time**.* Since the
 * answer may be large, return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 200`
 * - `n - 1 <= roads.length <= n * (n - 1) / 2`
 * - `roads[i].length == 3`
 * - `0 <= ui, vi <= n - 1`
 * - `1 <= timei <= 109`
 * - `ui != vi`
 * - There is at most one road connecting any two intersections.
 * - You can reach any intersection from any other intersection.
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const countPaths = function (n, roads) {
    const mod = 1e9 + 7;

    // Build graph as an adjacency list.
    const graph = Array.from({ length: n }, () => []);
    for (const [u, v, t] of roads) {
        graph[u].push([v, t]);
        graph[v].push([u, t]);
    }

    // Initialize distances and ways arrays.
    const dist = Array(n).fill(Infinity);
    const ways = Array(n).fill(0);
    dist[0] = 0;
    ways[0] = 1;

    // Priority queue: we'll use a simple array and sort it.
    // Each element is [distance, node].
    const pq = [[0, 0]];

    while (pq.length > 0) {
        // Extract the node with the smallest distance.
        pq.sort((a, b) => a[0] - b[0]);
        const [d, u] = pq.shift();

        // If this distance is outdated, skip.
        if (d > dist[u]) continue;

        // Relax edges out of u.
        for (const [v, t] of graph[u]) {
            const nd = d + t;
            if (nd < dist[v]) {
                dist[v] = nd;
                ways[v] = ways[u];
                pq.push([nd, v]);
            } else if (nd === dist[v]) {
                ways[v] = (ways[v] + ways[u]) % mod;
            }
        }
    }

    return ways[n - 1];
};

const n = 7,
    roads = [
        [0, 6, 7],
        [0, 1, 2],
        [1, 2, 3],
        [1, 3, 3],
        [6, 3, 3],
        [3, 5, 1],
        [6, 5, 1],
        [2, 5, 1],
        [0, 4, 5],
        [4, 6, 2],
    ];
// Output: 4
/* Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6 */
console.log(countPaths(n, roads));

const n1 = 2,
    roads1 = [[1, 0, 10]];
// Output: 1
// Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.
