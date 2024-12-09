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

const nums = [3, 4, 1, 2, 6],
    queries = [[0, 4]];
// Output: [false]
// Explanation: The subarray is [3,4,1,2,6]. 2 and 6 are both even.
console.log(isArraySpecial(nums, queries));

const nums1 = [4, 3, 1, 6],
    queries1 = [
        [0, 2],
        [2, 3],
    ];
// Output: [false,true]
/* Explanation: The subarray is [4,3,1]. 3 and 1 are both odd. So the answer to this query is false.
The subarray is [1,6]. There is only one pair: (1,6) and it contains numbers with different parity. So the answer to this query is true. */
console.log(isArraySpecial(nums1, queries1));
