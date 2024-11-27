/**
 * **3243. Shortest Distance After Road Addition Queries I**
 *
 * You are given an integer `n` and a 2D integer array `queries`.
 *
 * There are `n` cities numbered from `0` to `n - 1`. Initially, there is a
 * **unidirectional** road from city `i` to city `i + 1` for all `0 <= i < n -
 * 1`.
 *
 * `queries[i] = [ui, vi]` represents the addition of a new **unidirectional**
 * road from city `ui` to city `vi`. After each query, you need to find the
 * **length** of the **shortest path** from city `0` to `city n - 1`.
 *
 * Return an array `answer` where for each `i` in the range `[0, queries.length
 * - 1]`, `answer[i]` is the *length of the shortest path* from city `0` to
 * city `n - 1` after processing the **first** `i + 1` queries.
 *
 * **Constraints:**
 *
 * - `3 <= n <= 500`
 * - `1 <= queries.length <= 500`
 * - `queries[i].length == 2`
 * - `0 <= queries[i][0] < queries[i][1] < n`
 * - `1 < queries[i][1] - queries[i][0]`
 * - There are no repeated roads among the queries.
 *
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
const shortestDistanceAfterQueries = function (n, queries) {
    const INF = Infinity;

    // Build initial graph as adjacency list
    const graph = Array.from({ length: n }, () => []);
    for (let i = 0; i < n - 1; i++) {
        graph[i].push([i + 1, 1]); // Initial roads with weight 1
    }

    // Dijkstra's algorithm to find shortest path from src to all other nodes
    const dijkstra = (src, target) => {
        const dist = Array(n).fill(INF);
        const pq = new MinPriorityQueue({ priority: (x) => x[0] }); // [distance, node]

        dist[src] = 0;
        pq.enqueue([0, src]);

        while (!pq.isEmpty()) {
            const [currDist, currNode] = pq.dequeue().element;

            // Skip if we already found a shorter path to currNode
            if (currDist > dist[currNode]) continue;

            for (const [nextNode, weight] of graph[currNode]) {
                const newDist = currDist + weight;
                if (newDist < dist[nextNode]) {
                    dist[nextNode] = newDist;
                    pq.enqueue([newDist, nextNode]);
                }
            }
        }

        return dist[target] === INF ? -1 : dist[target];
    };

    const result = [];
    for (const [u, v] of queries) {
        // Add the new road
        graph[u].push([v, 1]);

        // Compute shortest path from 0 to n - 1
        result.push(dijkstra(0, n - 1));
    }

    return result;
};
