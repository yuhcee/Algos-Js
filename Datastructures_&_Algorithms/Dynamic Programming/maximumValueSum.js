/**
 * **3068. Find the Maximum Sum of Node Values**
 *
 * There exists an **undirected** tree with `n` nodes numbered `0` to `n - 1`.
 *
 * You are given a **0-indexed** 2D integer array `edges` of length `n - 1`,
 * where `edges[i] = [ui, vi]` indicates that there is an edge between nodes
 * `ui` and `vi` in the tree. You are also given a **positive** integer k, and a
 * **0-indexed** array of **non-negative** integers nums of length n, where `nums
 * [i]` represents the **value** of the node numbered `i`.
 *
 * Alice wants the sum of values of tree nodes to be **maximum**, for which
 * Alice can perform the following operation **any** number of times
 * (**including zero**) on the tree:
 *
 * - Choose any edge `[u, v]` connecting the nodes `u` and `v`, and update their
 * values as follows:
 *  - `nums[u] = nums[u] XOR k`
 *  - `nums[v] = nums[v] XOR k`
 *
 * Return *the **maximum** possible sum of the values Alice can achieve by
 * performing the operation **any** number of times.*
 *
 * **Constraints:**
 *
 * - `2 <= n == nums.length <= 2 * 104`
 * - `1 <= k <= 109`
 * - `0 <= nums[i] <= 109`
 * - `edges.length == n - 1`
 * - `edges[i].length == 2`
 * - `0 <= edges[i][0], edges[i][1] <= n - 1`
 * - The input is generated such that `edges` represent a valid tree.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumValueSum = function (nums, k) {
    // Step 1: Calculate the initial sum of node values
    let initialSum = nums.reduce((x, y) => x + y, 0);

    // Step 2: Calculate the differences when each node value is XOR-ed with k
    let xorDifferences = nums.map((v) => (v ^ k) - v);

    // Step 3: Sort the differences in descending order
    xorDifferences.sort((a, b) => b - a);

    // Step 4: Sum the positive differences in pairs
    let additionalSum = 0;
    for (let i = 0; i < xorDifferences.length; i += 2) {
        if (i + 1 < xorDifferences.length && xorDifferences[i] + xorDifferences[i + 1] > 0) {
            additionalSum += xorDifferences[i] + xorDifferences[i + 1];
        }
    }

    // Step 5: Return the final maximum sum
    return initialSum + additionalSum;
};
