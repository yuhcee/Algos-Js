/**
 * **1473. Paint House III**
 *
 * There is a row of `m` houses in a small city, each house must be painted with one of the `n` colors
 * (labeled from `1` to `n`), some houses that have been painted last summer should not be painted
 * again.
 *
 * A neighborhood is a maximal group of continuous houses that are painted with the same color.
 *
 * - For example: `houses = [1,2,2,3,3,2,1,1]` contains `5` neighborhoods `[{1}, {2,2}, {3,3}, {2}, {1,
 * 1}]`.
 *
 * Given an array `houses`, an `m x n` matrix `cost` and an integer `target` where:
 *
 * - `houses[i]`: is the color of the house `i`, and `0` if the house is not painted yet.
 * - `cost[i][j]`: is the cost of paint the house `i` with the color `j + 1`.
 *
 * Return *the minimum cost of painting all the remaining houses in such a way that there are exactly
 * `target` neighborhoods. If it is not possible, return `-1`.*
 *
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
const minCost = function (houses, cost, m, n, target) {
    // Maximum cost possible plus 1
    const MAX_COST = 1000001;

    const findMinCost = function (houses, cost, targetCount, currIndex = 0, neighborhoodCount = 0, prevHouseColor = 0, memo = {}) {
        // init memoization key
        const key = `${currIndex},${neighborhoodCount},${prevHouseColor}`;

        if (currIndex === houses.length) {
            // if all houses are traversed, check if the neighbor count is as expected or not
            return neighborhoodCount === targetCount ? 0 : MAX_COST;
        }

        if (neighborhoodCount > targetCount) {
            // if the neighborhoods are more than the threshold, we can have target neighborhoods
            return MAX_COST;
        }

        // We have already calculated the answer so no need to go into recursion
        if (key in memo) {
            return memo[key];
        }

        let minCost = MAX_COST;

        // if the house is already painted, update the values accordingly
        if (houses[currIndex] !== 0) {
            let newNeighborhoodCount = neighborhoodCount + (houses[currIndex] !== prevHouseColor ? 1 : 0);
            minCost = findMinCost(houses, cost, targetCount, currIndex + 1, newNeighborhoodCount, houses[currIndex], memo);
        } else {
            let totalColors = cost[0].length;

            // If the house is not painted, try every possible color and store the minimum of cost
            for (let color = 1; color <= totalColors; color++) {
                let newNeighborhoodCount = neighborhoodCount + (color !== prevHouseColor ? 1 : 0);

                let currCost = cost[currIndex][color - 1] + findMinCost(houses, cost, targetCount, currIndex + 1, newNeighborhoodCount, color, memo);
                minCost = Math.min(minCost, currCost);
            }
        }

        // Return the minimum cost and also storing it for future reference(memoization)
        return (memo[key] = minCost);
    };

    let answer = findMinCost(houses, cost, target);

    return answer === MAX_COST ? -1 : answer;
};
const houses = [0, 0, 0, 0, 0],
    cost = [
        [1, 10],
        [10, 1],
        [10, 1],
        [1, 10],
        [5, 1],
    ],
    m = 5,
    n = 2,
    target = 3;
// Output: 9
/* Explanation: Paint houses of this way [1,2,2,1,1]
This array contains target = 3 neighborhoods, [{1}, {2,2}, {1,1}].
Cost of paint all houses (1 + 1 + 1 + 1 + 5) = 9. */
console.log(minCost(houses, cost, m, n, target));

const houses1 = [0, 2, 1, 2, 0],
    cost1 = [
        [1, 10],
        [10, 1],
        [10, 1],
        [1, 10],
        [5, 1],
    ],
    m1 = 5,
    n1 = 2,
    target1 = 3;
// Output: 11
/* Explanation: Some houses are already painted, Paint the houses of this way [2,2,1,2,2]
This array contains target = 3 neighborhoods, [{2,2}, {1}, {2,2}]. 
Cost of paint the first and last house (10 + 1) = 11. */
console.log(minCost(houses1, cost1, m1, n1, target1));

const houses2 = [3, 1, 2, 3],
    cost2 = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ],
    m2 = 4,
    n2 = 3,
    target2 = 3;
// Output: -1;
/* Explanation: Houses are already painted with a total of 4 neighborhoods [{3},{1},{2},{3}] different of target = 3. */
console.log(minCost(houses2, cost2, m2, n2, target2));

// =========================== SOLUTION USING MAP ==============================
const minCost1 = function (houses, cost, m, n, target) {
    
    const MAX_VALUE = 1000001;
    const memo = new Map();

    function helper(i, prevCol, groups) {
        if (groups > target) return MAX_VALUE;

        if (i == m) return groups == target ? 0 : MAX_VALUE;

        const key = `${i}-${prevCol}-${groups}`;

        if (memo.has(key)) return memo.get(key);

        let ans = MAX_VALUE;

        if (houses[i] != 0) ans = Math.min(ans, helper(i + 1, houses[i], prevCol == houses[i] ? groups : groups + 1));
        else for (let j = 0; j < n; j++) ans = Math.min(ans, cost[i][j] + helper(i + 1, j + 1, prevCol == j + 1 ? groups : groups + 1));

        memo.set(key, ans);

        return ans;
    }

    const ans = helper(0, 0, 0);

    return ans == MAX_VALUE ? -1 : ans;
};
