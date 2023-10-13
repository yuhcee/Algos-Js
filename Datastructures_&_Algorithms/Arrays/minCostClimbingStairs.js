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
// const minCostClimbingStairs = (cost) => {
//     // The array's length should be 1 longer than the length of cost
//     // This is because we can treat the "top floor" as a step to reach
//     let len = cost.length,
//         minimumCost = Array(len + 1).fill(0);

//     // Start iteration from step 2, since the minimum cost of reaching
//     // step 0 and step 1 is 0
//     for (let i = 2; i < minimumCost.length; i++) {
//         let takeOneStep = minimumCost[i - 1] + cost[i - 1];
//         let takeTwoSteps = minimumCost[i - 2] + cost[i - 2];

//         // apply the recurrence relation
//         minimumCost[i] = Math.min(takeOneStep, takeTwoSteps);
//     }
//     // The final element in minimumCost refers to the top floor
//     return minimumCost.at(-1);
// };

const cost = [10, 15, 20];
// Output: 15
/* Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15. */

console.log(minCostClimbingStairs(cost));

const cost1 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// Output: 6
/* Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
 */
console.log(minCostClimbingStairs(cost1));
