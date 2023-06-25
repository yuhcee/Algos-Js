/**
 * **1575. Count All Possible Routes**
 *
 * You are given an array of **distinct** positive integers locations where `locations[i]` represents
 * the position of city `i`. You are also given integers `start`, `finish` and `fuel` representing the
 * starting city, ending city, and the initial amount of fuel you have, respectively.
 *
 * At each step, if you are at city `i`, you can pick any city `j` such that `j != i` and `0 <= j <
 * locations.length` and move to city `j`. Moving from city `i` to city `j` reduces the amount of fuel
 * you have by `|locations[i] - locations[j]|`. Please notice that `|x|` denotes the absolute value of
 * `x`.
 *
 * Notice that `fuel` **cannot** become negative at any point in time, and that you are **allowed** to
 * visit any city more than once (including `start` and `finish`).
 *
 * Return *the count of all possible routes from `start` to `finish`. Since the answer may be too
 * large, return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `2 <= locations.length <= 100`
 * - `1 <= locations[i] <= 109`
 * - All integers in locations are distinct.
 * - `0 <= start, finish < locations.length`
 * - `1 <= fuel <= 200`
 *
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
    const n = locations.length;
    const MOD = Math.pow(10, 9) + 7;

    // Create a memoization table to store computed results
    const dp = new Array(n).fill().map(() => new Array(fuel + 1).fill());

    // Recursive helper function to calculate the number of routes
    function helper(start, fuel) {
        // Check if the result for the current start city and fuel amount is already memoized
        if (dp[start][fuel] !== undefined) {
            return dp[start][fuel];
        }

        let result = start === finish ? 1 : 0;

        // Iterate through each city
        for (let i = 0; i < n; i++) {
            // Skip the current start city
            if (i === start) {
                continue;
            }

            // Calculate the fuel cost to travel from the current start city to city i
            const cost = Math.abs(locations[i] - locations[start]);

            // Check if there is enough fuel to travel from the current start city to city i
            if (fuel >= cost) {
                // Recursively calculate the number of routes from city i to the finish city
                result = (result + helper(i, fuel - cost)) % MOD;
            }
        }

        // Memoize the result for the current start city and fuel amount
        dp[start][fuel] = result;

        return result;
    }

    // Call the helper function to calculate the number of routes from the start city with the given fuel amount
    return helper(start, fuel);
};

const locations = [2, 3, 6, 8, 4],
    start = 1,
    finish = 3,
    fuel = 5;
// Output: 4
/* Explanation: The following are all possible routes, each uses 5 units of fuel:
1 -> 3
1 -> 2 -> 3
1 -> 4 -> 3
1 -> 4 -> 2 -> 3 */
console.log(countRoutes(locations, start, finish, fuel));
