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
