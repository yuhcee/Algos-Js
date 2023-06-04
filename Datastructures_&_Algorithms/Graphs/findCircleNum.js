/**
 * **547. Number of Provinces**
 *
 * There are `n` cities. Some of them are connected, while some are not. If city `a` is
 * connected directly with city `b`, and city `b` is connected directly with city `c`, then
 * city `a` is connected indirectly with city `c`.
 *
 * A **province** is a group of directly or indirectly connected cities and no other cities
 * outside of the group.
 *
 * You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `ith`
 * city and the `jth` city are directly connected, and `isConnected[i][j] = 0` otherwise
 *
 * Return *the total number of **provinces***.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 200`
 * - `n == isConnected.length`
 * - `n == isConnected[i].length`
 * - `isConnected[i][j]` is `1` or `0`.
 * - `isConnected[i][i] == 1`
 * - `isConnected[i][j] == isConnected[j][i]`
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false); // Track visited cities
    let count = 0; // Initialize province count

    // Depth-first search to find connected cities
    function dfs(city) {
        visited[city] = true; // Mark current city as visited

        // Iterate over all cities and recursively visit unvisited connected cities
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    // Iterate over all cities and perform DFS to find provinces
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++; // Increment province count
        }
    }

    return count;
};
