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
const minimumFuelCost = function (roads, seats) {
    // Create an array of arrays to represent the graph, with each subarray representing the connected cities for that city
    let graph = Array.from({ length: roads.length + 1 }, () => []);

    // Create a variable to keep track of the total fuel required
    let totalFuel = 0;

    // Populate the graph with the roads
    for (let [i, j] of roads) {
        graph[i].push(j);
        graph[j].push(i);
    }

    /**
     * A helper function to traverse the graph using DFS
     *
     * @param {number} city - the current city node
     * @param {number} parent - the parent city node
     * @return {number} - the total number of people (representatives) in the subtree rooted at the current city node
     */
    const dfsTraversal = (city, parent) => {
        // Start the total number of people at 1 to account for the representative at the current city node
        let totalPeople = 1;

        // Loop through the cities connected to the current city node
        for (let i = 0; i < graph[city].length; i++) {
            // Check if the connected city is the parent node, if it is, skip it
            if (graph[city][i] === parent) continue;

            // Recursively traverse the connected city and add the total number of people in its subtree to the totalPeople
            totalPeople += dfsTraversal(graph[city][i], city);
        }

        // Check if the parent node exists, if it does, then we need to add the fuel required for the representatives from the current city to the parent city
        if (parent > -1) totalFuel += Math.ceil(totalPeople / seats);

        // Return the total number of people in the subtree rooted at the current city node
        return totalPeople;
    };

    // Start the DFS traversal from the capital city (city 0) with -1 as the parent node
    dfsTraversal(0, -1);

    // Return the total fuel required to reach the capital city
    return totalFuel;
};

const roads = [
        [0, 1],
        [0, 2],
        [0, 3],
    ],
    seats = 5;
// Output: 3
/* Explanation: 
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative2 goes directly to the capital with 1 liter of fuel.
- Representative3 goes directly to the capital with 1 liter of fuel.
It costs 3 liters of fuel at minimum. 
It can be proven that 3 is the minimum number of liters of fuel needed. */
console.log(minimumFuelCost(roads, seats));

const roads1 = [
        [3, 1],
        [3, 2],
        [1, 0],
        [0, 4],
        [0, 5],
        [4, 6],
    ],
    seats1 = 2;
// Output: 7
/* Explanation: 
- Representative2 goes directly to city 3 with 1 liter of fuel.
- Representative2 and representative3 go together to city 1 with 1 liter of fuel.
- Representative2 and representative3 go together to the capital with 1 liter of fuel.
- Representative1 goes directly to the capital with 1 liter of fuel.
- Representative5 goes directly to the capital with 1 liter of fuel.
- Representative6 goes directly to city 4 with 1 liter of fuel.
- Representative4 and representative6 go together to the capital with 1 liter of fuel.
It costs 7 liters of fuel at minimum. 
It can be proven that 7 is the minimum number of liters of fuel needed. */
console.log(minimumFuelCost(roads1, seats1));
