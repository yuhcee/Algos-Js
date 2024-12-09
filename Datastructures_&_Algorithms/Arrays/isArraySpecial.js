/**
 * **3152. Special Array II**
 *
 * An array is considered **special** if every pair of its adjacent elements
 * contains two numbers with different parity.
 *
 * You are given an array of integer `nums` and a 2D integer matrix `queries`,
 * where for `queries[i] = [fromi, toi]` your task is to check that
 * subarray `nums[fromi..toi]` is **special** or not.
 *
 * Return an array of booleans `answer` such that `answer[i]` is `true` if `nums
 * [fromi..toi]` is special.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 105`
 * - `1 <= queries.length <= 105`
 * - `queries[i].length == 2`
 * - `0 <= queries[i][0] <= queries[i][1] <= nums.length - 1`
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
const isArraySpecial = function (nums, queries) {
    const n = nums.length();
    const parity = new Array(n).fill(0);

    // Step 1: Compute parity violations
    for (let i = 1; i < n; i++) {
        if (nums[i] % 2 === nums[i - 1] % 2) {
            parity[i] = 1; // Same pariity
        }
    }

    // Step 2: Compute prefix sum of parity
    const prefixParity = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        prefixParity[i] = prefixParity[i - 1] + parity[i];
    }

    // Step 3: Answer queries
    const result = [];
    for (const [from, to] of queries) {
        const violations = prefixParity[to] - (from > 0 ? prefixParity[from] : 0);
        result.push(violations === 0);
    }

    return result;
};
