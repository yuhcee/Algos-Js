/**
 * **1192. Critical Connections in a Network**
 *
 * There are `n` servers numbered from `0` to `n - 1` connected by undirected server-to-server
 * `connections` forming a network where `connections[i] = [ai, bi]` represents a connection
 * between servers `ai` and `bi`. Any server can reach other servers directly or indirectly
 * through the network.
 *
 * A **critical connection** is a connection that, if removed, will make some servers unable to reach some other server.
 *
 * Return all critical connections in the network in any order.
 *
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = (n, connections) => {
    const adj = buildAdjList(n, connections);

    const visited = Array(n).fill(false);
    const discovery = Array(n).fill(0);
    const min = Array(n).fill(0);
    const parent = Array(n).fill(-1);
    const results = [];

    let distance = 1;

    function traverse(i) {
        visited[i] = true;

        discovery[i] = min[i] = distance++;

        for (const v of adj[i]) {
            if (!visited[v]) {
                parent[v] = i;

                traverse(v);

                min[i] = Math.min(min[i], min[v]);

                if (min[v] > discovery[i]) {
                    results.push([i, v]);
                }
            } else if (v !== parent[i]) {
                min[i] = Math.min(min[i], discovery[v]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            traverse(i);
        }
    }

    return results;
};

const buildAdjList = (n, connections) => {
    const adj = [];

    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (let [a, b] of connections) {
        adj[a].push(b);
        adj[b].push(a);
    }

    return adj;
};

const n = 4,
    connections = [
        [0, 1],
        [1, 2],
        [2, 0],
        [1, 3],
    ];
// Output: [[1, 3]];
console.log(criticalConnections(n, connections));
