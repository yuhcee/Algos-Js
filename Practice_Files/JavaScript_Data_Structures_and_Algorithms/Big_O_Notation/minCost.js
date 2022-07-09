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
    };
};
