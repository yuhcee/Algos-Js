/**
 * **2285. Maximum Total Importance of Roads**
 *
 * You are given an integer `n` denoting the number of cities in a country.
 * The cities are numbered from `0` to `n - 1`.
 *
 * You are also given a 2D integer array `roads` where `roads[i] = [ai, bi]
 * ` denotes that there exists a **bidirectional** road connecting cities
 * `ai` and `bi`.
 *
 * You need to assign each city with an integer value from `1` to `n`,
 * where each value can only be used **once**. The **importance** of a road
 * is then defined as the **sum** of the values of the two cities it
 * connects.
 *
 * Return *the **maximum total importance** of all roads possible after
 * assigning the values optimally*.
 *
 * **Constraints:**
 *
 * - `2 <= n <= 5 * 104`
 * - `1 <= roads.length <= 5 * 104`
 * - `roads[i].length == 2`
 * - `0 <= ai, bi <= n - 1`
 * - `ai != bi`
 * - There are no duplicate roads.
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const maximumImportance = function (n, roads) {
    // Step 1: Count the number of connections for each city
    let connections = new Array(n).fill(0);
    for (let [u, v] of roads) {
        connections[u]++;
        connections[v]++;
    }

    // Step 2: Sort cities by the number of connections in descending order
    let cities = Array.from({ length: n }, (_, i) => i);
    cities.sort((a, b) => connections[b] - connections[a]);

    // Step 3: Assign values from n to 1 to the cities based on their connections
    let value = new Array(n);
    for (let i = 0; i < n; i++) {
        value[cities[i]] = n - i;
    }

    // Step 4: Calculate the total importance of all roads
    let totalImportance = 0;
    for (let [u, v] of roads) {
        totalImportance += value[u] + value[v];
    }

    return totalImportance;
};

const n = 5,
    roads = [
        [0, 1],
        [1, 2],
        [2, 3],
        [0, 2],
        [1, 3],
        [2, 4],
    ];
// Output: 43;
/* Explanation: The figure above shows the country and the assigned values of [2,4,5,3,1].
- The road (0,1) has an importance of 2 + 4 = 6.
- The road (1,2) has an importance of 4 + 5 = 9.
- The road (2,3) has an importance of 5 + 3 = 8.
- The road (0,2) has an importance of 2 + 5 = 7.
- The road (1,3) has an importance of 4 + 3 = 7.
- The road (2,4) has an importance of 5 + 1 = 6.
The total importance of all roads is 6 + 9 + 8 + 7 + 7 + 6 = 43.
It can be shown that we cannot obtain a greater total importance than 43. */
console.log(maximumImportance(n, roads));

const n1 = 5,
    roads1 = [
        [0, 3],
        [2, 4],
        [1, 3],
    ];
// Output: 20
/* Explanation: The figure above shows the country and the assigned values of [4,3,2,5,1].
- The road (0,3) has an importance of 4 + 5 = 9.
- The road (2,4) has an importance of 2 + 1 = 3.
- The road (1,3) has an importance of 3 + 5 = 8.
The total importance of all roads is 9 + 3 + 8 = 20.
It can be shown that we cannot obtain a greater total importance than 20. */
console.log(maximumImportance(n1, roads1));
