/**
 * **2642. Design Graph With Shortest Path Calculator**
 *
 * There is a **directed weighted** graph that consists of `n` nodes
 * numbered from `0` to `n - 1`. The edges of the graph are initially
 * represented by the given array `edges` where `edges[i] = [fromi,
 * toi, edgeCosti]` meaning that there is an edge from `fromi` to
 * `toi` with the cost `edgeCosti`.
 *
 * Implement the `Graph` class:
 *
 * - `Graph(int n, int[][] edges)` initializes the object with `n`
 * nodes and the given edges.
 *
 * - `addEdge(int[] edge)` adds an edge to the list of edges where
 * `edge = [from, to, edgeCost]`. It is guaranteed that there is no
 * edge between the two nodes before adding this one.
 *
 * - `int shortestPath(int node1, int node2)` returns the **minimum**
 * cost of a path from `node1` to `node2`. If no path exists, return
 * `-1`. The cost of a path is the sum of the costs of the edges in
 * the path.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 100`
 * - `0 <= edges.length <= n * (n - 1)`
 * - `edges[i].length == edge.length == 3`
 * - `0 <= fromi, toi, from, to, node1, node2 <= n - 1`
 * - `1 <= edgeCosti, edgeCost <= 106`
 * - There are no repeated edges and no self-loops in the graph at any
 * point.
 * - At most `100` calls will be made for `addEdge`.
 * - At most `100` calls will be made for `shortestPath`.
 *
 * @param {number} n
 * @param {number[][]} edges
 */
const Graph = function (n, edges) {
    // Step 1: Initialize the graph with nodes and edges.
    this.adjList = new Map();
    for (let i = 0; i < n; i++) {
        this.adjList.set(i, []);
    }
    edges.forEach((edge) => {
        this.adjList.get(edge[0]).push({ node: edge[1], cost: edge[2] });
    });
};

Graph.prototype.addEdge = function (edge) {
    // Step 2: Add a new edge to the graph.
    this.adjList.get(edge[0]).push({ node: edge[1], cost: edge[2] });
};

Graph.prototype.shortestPath = function (node1, node2) {
    // Step 3: Use Dijkstra's algorithm to find the shortest path.
    const minHeap = new MinHeap();
    const distances = new Array(this.adjList.size).fill(Infinity);
    const visited = new Set();

    distances[node1] = 0;
    minHeap.insert({ node: node1, cost: 0 });

    while (!minHeap.isEmpty()) {
        const { node, cost } = minHeap.extractMin();
        if (node === node2) return cost;
        if (visited.has(node)) continue;
        visited.add(node);

        const neighbors = this.adjList.get(node);
        neighbors.forEach((neighbor) => {
            const newCost = cost + neighbor.cost;
            if (newCost < distances[neighbor.node]) {
                distances[neighbor.node] = newCost;
                minHeap.insert({ node: neighbor.node, cost: newCost });
            }
        });
    }

    return distances[node2] === Infinity ? -1 : distances[node2];
};

// We'll need a MinHeap class to efficiently get the node with the smallest cost.
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0 && this.heap[parentIndex].cost > this.heap[index].cost) {
            // Swap
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            // Move up
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    extractMin() {
        if (this.isEmpty()) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size() - 1];
        this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        if (leftChildIndex < this.size() && this.heap[leftChildIndex].cost < this.heap[smallest].cost) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.size() && this.heap[rightChildIndex].cost < this.heap[smallest].cost) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            // Swap
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            // Move down
            this.heapifyDown(smallest);
        }
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.heap.length;
    }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

const graph = ['Graph', 'shortestPath', 'shortestPath', 'addEdge', 'shortestPath'];
/* [[4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]], [3, 2], [0, 3], [[1, 3, 4]], [0, 3]] */
// Output
// [null, 6, -1, null, 6]

// Explanation
/* Graph g = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
g.shortestPath(3, 2); // return 6. The shortest path from 3 to 2 in the first diagram above is 3 -> 0 -> 1 -> 2 with a total cost of 3 + 2 + 1 = 6.
g.shortestPath(0, 3); // return -1. There is no path from 0 to 3.
g.addEdge([1, 3, 4]); // We add an edge from node 1 to node 3, and we get the second diagram above.
g.shortestPath(0, 3); // return 6. The shortest path from 0 to 3 now is 0 -> 1 -> 3 with a total cost of 2 + 4 = 6. */
