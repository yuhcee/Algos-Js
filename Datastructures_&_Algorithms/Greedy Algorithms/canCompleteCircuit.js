/**
 * **134. Gas Station**
 *
 * There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`.
 *
 * You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `ith` station to its next
 * `(i + 1)th` station. You begin the journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays `gas` and `cost`, return *the starting gas station's index if you can travel around the
 * circuit once in the clockwise direction, otherwise return `-1`*. If there exists a solution, it is **guaranteed** to
 * be **unique**
 *
 * **Constraints:**
 *
 * - `n == gas.length == cost.length`
 * - `1 <= n <= 105`
 * - `0 <= gas[i], cost[i] <= 104`
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = (gas, cost) => {
    const n = gas.length;
    let totalTank = 0;
    let currTank = 0;
    let startingStation = 0;

    for (let i = 0; i < n; i++) {
        totalTank += gas[i] - cost[i];
        currTank += gas[i] - cost[i];
        // If one couldn't get here,
        if (currTank < 0) {
            // Pick up the next station as the starting one.
            startingStation = i + 1;
            // Start with an empty tank.
            currTank = 0;
        }
    }
    return totalTank >= 0 ? startingStation : -1;
};
