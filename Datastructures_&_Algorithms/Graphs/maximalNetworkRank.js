/**
 * **1615. Maximal Network Rank**
 *
 * There is an infrastructure of `n` cities with some number of `roads`
 * connecting these cities. Each `roads[i] = [ai, bi]` indicates that there
 * is a bidirectional road between cities `ai` and `bi`.
 *
 * The **network rank** of **two different cities** is defined as the total
 * number of **directly** connected roads to **either** city. If a road is
 * directly connected to both cities, it is only counted once.
 *
 * The **maximal network rank** of the infrastructure is the **maximum
 * network rank** of all pairs of different cities.
 *
 * Given the integer `n` and the array `roads`, return *the **maximal network
 * rank** of the entire infrastructure*.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 100`
 * - `0 <= roads.length <= n * (n - 1) / 2`
 * - `roads[i].length == 2`
 * - `0 <= ai, bi <= n-1`
 * - `ai != bi`
 * - Each pair of cities has **at most one** road connecting them.
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximalNetworkRank = function (n, roads) {
    const roadCounts = new Array(n).fill(0); // Initialize road counts for each city
    const directConnections = Array.from({ length: n }, () => Array(n).fill(false)); // Initialize direct connections matrix

    for (const [city1, city2] of roads) {
        roadCounts[city1]++;
        roadCounts[city2]++;
        directConnections[city1][city2] = true;
        directConnections[city2][city1] = true;
    }

    let maximalRank = 0;

    // Loop through all pairs of cities
    for (let city1 = 0; city1 < n; city1++) {
        for (let city2 = city1 + 1; city2 < n; city2++) {
            // Calculate network rank for each pair
            const networkRank = roadCounts[city1] + roadCounts[city2] - (directConnections[city1][city2] ? 1 : 0);
            maximalRank = Math.max(maximalRank, networkRank);
        }
    }

    return maximalRank;
};

const n = 4,
    roads = [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3],
    ];
// Output: 4
// Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.
console.log(maximalNetworkRank(n, roads));

const n1 = 5,
    roads1 = [
        [0, 1],
        [0, 3],
        [1, 2],
        [1, 3],
        [2, 3],
        [2, 4],
    ];
// Output: 5
// Explanation: There are 5 roads that are connected to cities 1 or 2.
console.log(maximalNetworkRank(n1, roads1));

const n2 = 8,
    roads2 = [
        [0, 1],
        [1, 2],
        [2, 3],
        [2, 4],
        [5, 6],
        [5, 7],
    ];
// Output: 5
// Explanation: The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.
console.log(maximalNetworkRank(n2, roads2));
