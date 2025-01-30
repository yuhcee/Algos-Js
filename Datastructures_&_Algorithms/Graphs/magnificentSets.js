/**
 * **2493. Divide Nodes Into the Maximum Number of Groups**
 *
 * You are given a positive integer `n` representing the number of nodes in
 * an **undirected** graph. The nodes are labeled from `1` to `n`.
 *
 * You are also given a 2D integer array `edges`, where `edges[i] = [ai, bi]
 * ` indicates that there is a **bidirectional** edge between nodes `ai`
 * and `bi`. **Notice** that the given graph may be disconnected.
 *
 * Divide the nodes of the graph into `m` groups (**1-indexed**) such that:
 *
 * - Each node in the graph belongs to exactly one group.
 * - For every pair of nodes in the graph that are connected by an edge `
 * [ai, bi]`, if `ai` belongs to the group with index `x`, and `bi` belongs
 * to the group with index `y`, then `|y - x| = 1`.
 *
 * Return *the maximum number of groups (i.e., maximum `m`) into which you
 * can divide the nodes. Return `-1` if it is impossible to group the nodes
 * with the given conditions.*
 *
 * **Constraints:**
 *
 * - `1 <= n <= 500`
 * - `1 <= edges.length <= 104`
 * - `edges[i].length == 2`
 * - `1 <= ai, bi <= n`
 * - `ai != bi`
 * - There is at most one edge between any pair of vertices.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
const magnificentSets = function (n, edges) {
    let uf = new UnionFind(n + 1);
    let graph = Array(n + 1)
        .fill(0)
        .map(() => []);
    for (let [a, b] of edges) {
        // 1. Build graph, connect nodes
        graph[a].push(b);
        graph[b].push(a);
        uf.union(a, b);
    }

    let groups = {};
    for (let i = 1; i <= n; i++) {
        // 2. Find groups of connected nodes
        let parent = uf.find(i);
        if (!groups[parent]) groups[parent] = [];
        groups[parent].push(i);
    }

    let totalGroups = 0;
    for (let parent in groups) {
        // 3. Find the maximum groups to divide for each connected group
        let group = groups[parent];
        let maxGroups = 0;
        for (let node of group) {
            let numGroups = bfs(graph, node);
            if (numGroups === -1) return -1;
            maxGroups = Math.max(maxGroups, numGroups);
        }
        totalGroups += maxGroups;
    }
    return totalGroups;
};

function bfs(graph, startNode) {
    let queue = [startNode],
        n = graph.length;
    let levels = Array(n).fill(-1),
        level = 0;
    levels[startNode] = 0;
    while (queue.length) {
        for (let i = queue.length; i > 0; i--) {
            let node = queue.shift();
            for (let nei of graph[node]) {
                if (levels[nei] === -1) {
                    levels[nei] = level + 1;
                    queue.push(nei);
                } else if (levels[nei] === level) {
                    // found an odd-lengthed cycle, we can't divide into groups
                    return -1;
                }
            }
        }
        level++;
    }
    return level;
}

class UnionFind {
    constructor(size) {
        this.root = Array(size);
        this.rank = Array(size);
        for (var i = 0; i < size; i++) {
            this.root[i] = i;
            this.rank[i] = 1;
        }
    }
    find(x) {
        if (this.root[x] === x) {
            return x;
        }
        return (this.root[x] = this.find(this.root[x]));
    }
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}
