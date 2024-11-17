/**
 * **862. Shortest Subarray with Sum at Least K**
 *
 * Given an integer array `nums` and an integer `k`, return *the length of the shortest non-empty
 * **subarray** of `nums` with a sum of at least `k`*. If there is no such **subarray**, return `-1`.
 *
 * A **subarray** is a **contiguous** part of an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-105 <= nums[i] <= 105`
 * - `1 <= k <= 109`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const shortestSubarray = function (nums, k) {
    const n = nums.length;
    const prefixSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + nums[i];
    }

    let minLength = Infinity;
    const deque = []; // To store indices of prefix sums

    for (let i = 0; i <= n; i++) {
        // Check if any subarray starting from deque[0] satisfies the condition
        while (deque.length > 0 && prefixSum[i] - prefixSum[deque[0]] >= k) {
            minLength = Math.min(minLength, i - deque.shift());
        }

        // Remove indices from the back of the deque to maintain monotonicity
        while (deque.length > 0 && prefixSum[i] <= prefixSum[deque[deque.length - 1]]) {
            deque.pop();
        }

        // Add the current index to the deque
        deque.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
};
