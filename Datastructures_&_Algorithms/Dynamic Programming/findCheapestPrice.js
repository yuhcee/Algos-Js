/**
 * **787. Cheapest Flights Within K Stops**
 *
 * There are `n` cities connected by some number of flights. You are given an array `flights` where
 * `flights[i] = [fromi, toi, pricei]` indicates that there is a flight from city `fromi` to city
 * `toi` with cost `pricei`.
 *
 * You are also given three integers `src`, `dst`, and `k`, return *the **cheapest price** from `src`
 * to `dst` with at most `k` stops. If there is no such route, return `-1`.
 *
 * **Constraints**:
 *
 * - `1 <= n <= 100`
 * - `0 <= flights.length <= (n * (n - 1) / 2)`
 * - `flights[i].length == 3`
 * - `0 <= fromi, toi < n`
 * - `fromi != toi`
 * - `1 <= pricei <= 104`
 * - There will not be any multiple flights between two cities.
 * - `0 <= src, dst, k < n`
 * - `src != dst`
 *
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
/* 
The problem is to find the cheapest price from one city (src) to another city (dst) while making at most k stops. If there is no such route, we should return -1.

We start by initializing a 2D array called dp. It has n rows and k+2 columns, where n is the number of cities and k is the maximum number of stops allowed. Each element of the array is set to the maximum safe integer value at the beginning.

Then we set the first element of the array, dp[src][0], to 0, because the cost of reaching the source city from the source city is 0.

We then use a nested loop to iterate over the number of stops and the number of cities.
In the outer loop, we iterate from 1 to k+1, where k+1 is the maximum number of stops allowed + 1.
In the inner loop, we iterate over all the cities.

For each iteration of the outer loop, we copy the values of the previous iteration to the current iteration.

After that, we iterate over all the flights (fromi, toi, pricei) and update the minimum cost to reach each city by adding the price of the flight to the cost of the previous city.

Finally, we check the last column of the array and if it's still the maximum safe integer value, we return -1, otherwise, we return the last element of the array.

So this solution uses a dynamic programming approach, where we keep track of the minimum cost to reach each city with a certain number of stops and updating the cost as we go through the flights.
And it's based on Bellman-Ford algorithm which is a similar algorithm to Dijkstra, but it allows negative edges, and also it takes into account the number of stops.
*/
const findCheapestPrice = (n, flights, src, dst, k) => {
    // Initialize a 2D array with n rows and k+2 columns
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(k + 2).fill(Number.MAX_SAFE_INTEGER);
    }
    // The cost of reaching the source city from the source city is 0
    dp[src][0] = 0;
    // Iterate over the number of stops
    for (let i = 1; i <= k + 1; i++) {
        // Iterate over the number of cities
        for (let j = 0; j < n; j++) {
            // Copy the values of the previous iteration to the current iteration
            dp[j][i] = dp[j][i - 1];
        }
        // Iterate over all flights
        for (let [from, to, price] of flights) {
            // Update the minimum cost to reach each city by adding the price of the flight to the cost of the previous city
            dp[to][i] = Math.min(dp[to][i], dp[from][i - 1] + price);
        }
    }
    // Return -1 if the last element of the array is still the maximum safe integer value
    // Otherwise, return the last element of the array
    return dp[dst][k + 1] === Number.MAX_SAFE_INTEGER ? -1 : dp[dst][k + 1];
};

const n = 4,
    flights = [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
    ],
    src = 0,
    dst = 3,
    k = 1;
// Output: 700
/* Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 3 is marked in red and has cost 100 + 600 = 700.
Note that the path through cities [0,1,2,3] is cheaper but is invalid because it uses 2 stops. */
console.log(findCheapestPrice(n, flights, src, dst, k));

const n1 = 3,
    flights1 = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
    ],
    src1 = 0,
    dst1 = 2,
    k1 = 1;
// Output: 200
/* Explanation:
The graph is shown above.
The optimal path with at most 1 stop from city 0 to 2 is marked in red and has cost 100 + 100 = 200. */
console.log(findCheapestPrice(n1, flights1, src1, dst1, k1));
