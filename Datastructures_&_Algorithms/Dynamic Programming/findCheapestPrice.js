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
const findCheapestPrice = function (n, flights, src, dst, k) {