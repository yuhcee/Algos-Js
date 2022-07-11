/**
 * **746. Min Cost Climbing Stairs**
 *
 * You are given an integer array cost where `cost[i]` is the cost of `ith` step on a staircase. Once
 * you pay the cost, you can either climb one or two steps.
 *
 * You can either start from the step with index `0`, or the step with index `1`.
 *
 * Return *the minimum cost to reach the top of the floor*.
 *
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = (cost) => {
    // The array's length should be 1 longer than the length of cost
    // This is because we can treat the "top floor" as a step to reach
    let len = cost.length,
        minimumCost = Array(len + 1).fill(0);

    // Start iteration from step 2, since the minimum cost of reaching
    // step 0 and step 1 is 0
    for (let i = 2; i < minimumCost.length; i++) {
        let takeOneStep = minimumCost[i - 1] + cost[i - 1];
        let takeTwoSteps = minimumCost[i - 2] + cost[i - 2];

       
    }

    
};
