/**
 * **2477. Minimum Fuel Cost to Report to the Capital**
 *
 * There is a tree (i.e., a connected, undirected graph with no cycles) structure country network
 * consisting of `n` cities numbered from `0` to `n - 1` and exactly `n - 1` roads. The capital
 * city is city `0`. You are given a 2D integer array roads where `roads[i] = [ai, bi]` denotes
 * that there exists a **bidirectional road** connecting cities `ai` and `bi`.
 *
 * There is a meeting for the representatives of each city. The meeting is in the capital city.
 *
 * There is a car in each city. You are given an integer `seats` that indicates the number of
 * seats in each car.
 *
 * A representative can use the car in their city to travel or change the car and ride with
 * another representative. The cost of traveling between two cities is one liter of fuel.
 *
 * Return *the minimum number of liters of fuel to reach the capital city*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 * - `roads.length == n - 1`
 * - `roads[i].length == 2`
 * - `0 <= ai, bi < n`
 * - `ai != bi`
 * - `roads` represents a valid tree.
 * - `1 <= seats <= 105`
 *
 * @param {number[][]} roads - a 2D array that represents the roads in the network, each element of the array is a road represented as [ai, bi], indicating a bidirectional road between cities ai and bi
 * @param {number} seats - an integer that represents the number of seats in each car
 * @return {number} - returns the minimum number of liters of fuel required to reach the capital city
 */
const minimumFuelCost = function (roads, seats) {};
