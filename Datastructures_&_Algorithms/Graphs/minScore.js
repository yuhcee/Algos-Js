/**
 * **2492. Minimum Score of a Path Between Two Cities**
 *
 * You are given a positive integer `n` representing `n` cities numbered from `1` to `n`. You are
 * also given a **2D** array `roads` where `roads[i] = [ai, bi, distancei]` indicates that there
 * is a **bidirectional** road between cities `ai` and `bi` with a distance equal to `distancei`.
 * The cities graph is not necessarily connected.
 *
 * The **score** of a path between two cities is defined as the **minimum** distance of a road in
 * this path.
 *
 * Return *the **minimum** possible score of a path between cities `1` and `n`.
 *
 * **Note**:
 *
 * - A path is a sequence of roads between two cities.
 * - It is allowed for a path to contain the same road **multiple** times, and you can visit
 * cities `1` and `n` multiple times along the path.
 * - The test cases are generated such that there is **at least** one path between `1` and `n`.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 105`
 * - `1 <= roads.length <= 105`
 * - `roads[i].length == 3`
 * - `1 <= ai, bi <= n`
 * - `ai != bi`
 * - `1 <= distancei <= 104`
 * - There are no repeated edges.
 * - There is at least one path between `1` and `n`.
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function (n, roads) {
    const map = new Map();
    for (const [a, b, d] of roads) {
        if (!map.has(a)) map.set(a, []);
        if (!map.has(b)) map.set(b, []);
        map.get(a).push([b, d]);
        map.get(b).push([a, d]);
    }

    // Perform BFS starting from city 1
    const queue = [1]; // Initialize the queue with city 1
    const visited = {}; // Keep track of visited cities
    visited[1] = true;
    let min = Infinity; // Initialize the minimum score to Infinity

    while (queue.length > 0) {
        const node = queue.shift(); // Get the next city from the queue

        if (map.has(node)) {
            for (const [next, d] of map.get(node)) {
                min = Math.min(d, min); // Update the minimum score

                // If the neighboring city hasn't been visited, add it to the queue
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }
    }

    return min === Infinity ? -1 : min; // Return the minimum score or -1 if no path exists
};

const n = 4,
    roads = [
        [1, 2, 9],
        [2, 3, 6],
        [2, 4, 5],
        [1, 4, 7],
    ];
// Output: 5
/* Explanation: The path from city 1 to 4 with the minimum score is: 1 -> 2 -> 4. The score of this path is min(9,5) = 5.
It can be shown that no other path has less score. */
console.log(minScore(n, roads));
