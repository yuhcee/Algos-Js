/**
 * **1579. Remove Max Number of Edges to Keep Graph Fully Traversable**
 *
 * Alice and Bob have an undirected graph of `n` nodes and three types of
 * edges:
 *
 * - Type 1: Can be traversed by Alice only.
 * - Type 2: Can be traversed by Bob only.
 * - Type 3: Can be traversed by both Alice and Bob.
 *
 * Given an array `edges` where `edges[i] = [typei, ui, vi]` represents a
 * bidirectional edge of type `typei` between nodes `ui` and `vi`, find the
 * maximum number of edges you can remove so that after removing the edges,
 * the graph can still be fully traversed by both Alice and Bob. The graph
 * is fully traversed by Alice and Bob if starting from any node, they can
 * reach all other nodes.
 *
 * Return the maximum number of edges you can remove, or return `-1` if
 * Alice and Bob cannot fully traverse the graph.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 * - `1 <= edges.length <= min(105, 3 * n * (n - 1) / 2)`
 * - `edges[i].length == 3`
 * - `1 <= typei <= 3`
 * - `1 <= ui < vi <= n`
 * - All tuples `(typei, ui, vi)` are distinct.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UnionFind {
    constructor(size) {
        this.parent = Array(size)
            .fill(0)
            .map((_, index) => index);
        this.rank = Array(size).fill(1);
        this.componentCount = size;
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
            this.componentCount -= 1;
            return true;
        }
        return false;
    }
}
const maxNumEdgesToRemove = function (n, edges) {
    // Initialize Union-Find structures for Alice and Bob
    let ufAlice = new UnionFind(n + 1);
    let ufBob = new UnionFind(n + 1);

    let edgesUsed = 0;

    // First pass: Handle type 3 edges (both Alice and Bob can use)
    for (let [type, u, v] of edges) {
        if (type === 3) {
            if (ufAlice.union(u, v) | ufBob.union(u, v)) {
                edgesUsed++;
            }
        }
    }

    // Second pass: Handle type 1 edges (Alice only)
    for (let [type, u, v] of edges) {
        if (type === 1) {
            if (ufAlice.union(u, v)) {
                edgesUsed++;
            }
        }
    }

    // Third pass: Handle type 2 edges (Bob only)
    for (let [type, u, v] of edges) {
        if (type === 2) {
            if (ufBob.union(u, v)) {
                edgesUsed++;
            }
        }
    }

    // Check if both Alice and Bob can traverse the entire graph
    if (ufAlice.componentCount > 2 || ufBob.componentCount > 2) {
        return -1;
    }

    return edges.length - edgesUsed;
};
