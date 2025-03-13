/**
 * **3356. Zero Array Transformation II**
 *
 * You are given an integer array `nums` of length `n` and a 2D array `queries` where `queries[i] = [li, ri, vali]`.
 *
 * Each `queries[i]` represents the following action on `nums`:
 *
 * - Decrement the value at each index in the range `[li, ri]` in `nums` by at **mos** vali.
 * - The amount by which each value is decremented can be chosen **independently** for each index.
 *
 * A **Zero Array** is an array with all its elements equal to 0.
 *
 * Return the **minimum** possible **non-negative** value of `k`, such that after processing the first `k` queries
 * in **sequence**, nums becomes a **Zero Array**. If no such `k` exists, return -1.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 5 * 105`
 * - `1 <= queries.length <= 105`
 * - `queries[i].length == 3`
 * - `0 <= li <= ri < nums.length`
 * - `1 <= vali <= 5`
 *
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
const minZeroArray = function (nums, queries) {
    const n = nums.length;
    const q = queries.length;

    // If nums is already all zero, no query is needed.
    if (nums.every((x) => x === 0)) return 0;

    // Function to check if after processing first k queries,
    // each index i has total capacity (from queries) >= nums[i]
    const isFeasible = (k) => {
        // Create a difference array for range updates, length n+1
        let diff = new Array(n + 1).fill(0);

        // Process first k queries
        for (let j = 0; j < k; j++) {
            const [l, r, val] = queries[j];
            diff[l] += val;
            if (r + 1 < n) {
                diff[r + 1] -= val;
            }
        }

        // Convert the difference array to a prefix sum (capacity array)
        let sum = 0,
            minDiff = Infinity;
        for (let i = 0; i < n; i++) {
            sum += diff[i];
            // difference = capacity - required amount
            minDiff = Math.min(minDiff, sum - nums[i]);
        }
        return minDiff >= 0;
    };

    // Binary search for minimal k in [0, q]
    let low = 0,
        high = q,
        ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isFeasible(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};

const nums = [2, 0, 2],
    queries = [
        [0, 2, 1],
        [0, 2, 1],
        [1, 1, 3],
    ];

// Output: 2
/* Explanation:
For i = 0 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [1, 0, 1].
For i = 1 (l = 0, r = 2, val = 1):
Decrement values at indices [0, 1, 2] by [1, 0, 1] respectively.
The array will become [0, 0, 0], which is a Zero Array. Therefore, the minimum value of k is 2.
 */
console.log(minZeroArray(nums, queries));
