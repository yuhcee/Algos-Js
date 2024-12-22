/**
 * **2940. Find Building Where Alice and Bob Can Meet**
 *
 * You are given a **0-indexed** array `heights` of positive integers, where
 * `heights[i]` represents the height of the `ith` building.
 *
 * If a person is in building `i`, they can move to any other building `j` if
 * and only if `i < j` and `heights[i] < heights[j]`.
 *
 * You are also given another array `queries` where `queries[i] = [ai, bi]`. On
 * the `ith` query, Alice is in building `ai` while Bob is in building `bi`.
 *
 * Return *an array `ans` where `ans[i]` is **the index of the leftmost
 * building** where Alice and Bob can meet on the `ith` query.* If Alice and Bob
 * cannot move to a common building on query `i`, set `ans[i]` to `-1`.
 *
 * **Constraints:**
 *
 * - `1 <= heights.length <= 5 * 104`
 * - `1 <= heights[i] <= 109`
 * - `1 <= queries.length <= 5 * 104`
 * - `queries[i] = [ai, bi]`
 * - `0 <= ai, bi <= heights.length - 1`
 *
 * @param {number[]} heights
 * @param {number[][]} queries
 * @return {number[]}
 */
const leftmostBuildingQueries = function (heights, queries) {
    const n = heights.length;

    // Sparse table for range maximum queries
    const st = Array.from({ length: n }, () => Array(20).fill(0));
    const log = Array(n + 1).fill(0);

    // Precompute log values
    log[0] = -1; // To handle log[1] correctly
    for (let i = 1; i <= n; i++) {
        log[i] = log[i >> 1] + 1;
    }

    // Initialize sparse table with heights
    for (let i = 0; i < n; i++) {
        st[i][0] = heights[i];
    }

    // Build sparse table using dynamic programming
    for (let j = 1; j < 20; j++) {
        for (let i = 0; i + (1 << j) <= n; i++) {
            st[i][j] = Math.max(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
        }
    }

    const result = [];

    // Process each query
    for (const [start, end] of queries) {
        let l = Math.min(start, end);
        let r = Math.max(start, end);

        // Case 1: Alice and Bob are already in the same building
        if (l === r) {
            result.push(l);
            continue;
        }

        // Case 2: Bob's building is taller than Alice's
        if (heights[r] > heights[l]) {
            result.push(r);
            continue;
        }

        // Case 3: Find the leftmost building that is taller
        const maxHeight = Math.max(heights[l], heights[r]);
        let left = r + 1,
            right = n,
            mid;

        while (left < right) {
            mid = Math.floor((left + right) / 2);

            // Use sparse table to find the maximum height in the range [r, mid]
            const range = mid - r + 1;
            const k = log[range];
            const maxInRange = Math.max(st[r][k], st[mid - (1 << k) + 1][k]);

            if (maxInRange > maxHeight) {
                right = mid; // Move left to find the smallest index
            } else {
                left = mid + 1; // Move right
            }
        }

        // If no valid building is found, append -1
        result.push(left === n ? -1 : left);
    }

    return result;
};

const heights = [6, 4, 8, 5, 2, 7],
    queries = [
        [0, 1],
        [0, 3],
        [2, 4],
        [3, 4],
        [2, 2],
    ];
// Output: [2,5,-1,5,2]
/* Explanation: In the first query, Alice and Bob can move to building 2 since heights[0] < heights[2] and heights[1] < heights[2]. 
In the second query, Alice and Bob can move to building 5 since heights[0] < heights[5] and heights[3] < heights[5]. 
In the third query, Alice cannot meet Bob since Alice cannot move to any other building.
In the fourth query, Alice and Bob can move to building 5 since heights[3] < heights[5] and heights[4] < heights[5].
In the fifth query, Alice and Bob are already in the same building.  
For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet. */
console.log(leftmostBuildingQueries(heights, queries));

const heights1 = [5, 3, 8, 2, 6, 1, 4, 6],
    queries1 = [
        [0, 7],
        [3, 5],
        [5, 2],
        [3, 0],
        [1, 6],
    ];
// Output: [7,6,-1,4,6]
/* Explanation: In the first query, Alice can directly move to Bob's building since heights[0] < heights[7].
In the second query, Alice and Bob can move to building 6 since heights[3] < heights[6] and heights[5] < heights[6].
In the third query, Alice cannot meet Bob since Bob cannot move to any other building.
In the fourth query, Alice and Bob can move to building 4 since heights[3] < heights[4] and heights[0] < heights[4].
In the fifth query, Alice can directly move to Bob's building since heights[1] < heights[6].
For ans[i] != -1, It can be shown that ans[i] is the leftmost building where Alice and Bob can meet.
For ans[i] == -1, It can be shown that there is no building where Alice and Bob can meet. */
console.log(leftmostBuildingQueries(heights1, queries1));
