/**
 * **1514. Path with Maximum Probability**
 *
 * You are given an undirected weighted graph of `n` nodes (0-indexed), represented by an edge list
 * where `edges[i] = [a, b]` is an undirected edge connecting the nodes `a` and `b` with a probability
 * of success of traversing that edge `succProb[i]`.
 *
 * Given two nodes `start` and `end`, find the path with the maximum probability of success to go from
 * `start` to `end` and return its success probability.
 *
 * If there is no path from `start` to `end`, **return 0**. Your answer will be accepted if it differs
 * from the correct answer by at most **1e-5**.
 *
 * **Constraints:**
 * - `2 <= n <= 10^4`
 * - `0 <= start, end < n`
 * - `start != end`
 * - `0 <= a, b < n`
 * - `a != b`
 * - `0 <= succProb.length == edges.length <= 2*10^4`
 * - `0 <= succProb[i] <= 1`
 * - There is at most one edge between every two nodes.
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
const maxProbability = function (n, edges, succProb, start, end) {
    // Build the graph using the edge list and success probabilities
    const graph = buildGraph(n, edges, succProb);

    // Initialize the probabilities array with all elements set to 0, except for the start node which is set to 1
    const probabilities = new Array(n).fill(0);
    probabilities[start] = 1;

    // Create a queue and enqueue the start node
    const queue = [];
    queue.push(start);

    while (queue.length > 0) {
        // Dequeue a node from the front of the queue
        const node = queue.shift();

        // Get the neighbors of the current node from the graph
        const neighbors = graph[node];

        // Traverse the neighbors and calculate new probabilities
        for (const [neighbor, prob] of neighbors) {
            // Calculate the new probability by multiplying the probability of the current node with the success probability of the edge to the neighbor
            const newProb = probabilities[node] * prob;

            // Update the probability if the new probability is greater than the current probability at the neighbor
            if (newProb > probabilities[neighbor]) {
                probabilities[neighbor] = newProb;

                // Enqueue the neighbor to continue exploring its neighbors
                queue.push(neighbor);
            }
        }
    }

    // Return the probability at the end node
    return probabilities[end];
};

// Function to build the graph using the edge list and success probabilities
function buildGraph(n, edges, succProb) {
    // Create an array of arrays to represent the graph
    const graph = new Array(n).fill().map(() => []);

    // Traverse the edge list and add edges to the graph along with their success probabilities
    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        const prob = succProb[i];

        // Add the edge (a, b) with probability prob
        graph[a].push([b, prob]);

        // Add the edge (b, a) with probability prob (since the graph is undirected)
        graph[b].push([a, prob]);
    }

    return graph;
}

const n = 3,
    edges = [
        [0, 1],
        [1, 2],
        [0, 2],
    ],
    succProb = [0.5, 0.5, 0.2],
    start = 0,
    end = 2;
// Output: 0.25000
/* Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25. */
console.log(maxProbability(n, edges, succProb, start, end));

const n1 = 3,
    edges1 = [
        [0, 1],
        [1, 2],
        [0, 2],
    ],
    succProb1 = [0.5, 0.5, 0.3],
    start1 = 0,
    end1 = 2;
// Output: 0.30000
console.log(maxProbability(n1, edges1, succProb1, start1, end1));
