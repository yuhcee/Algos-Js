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
