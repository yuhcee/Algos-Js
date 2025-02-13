/**
 * **3066. Minimum Operations to Exceed Threshold Value II**
 *
 * You are given a **0-indexed** integer array `nums`, and an integer `k`.
 *
 * You are allowed to perform some operations on `nums`, where in a single
 * operation, you can:
 *
 * - Select the two smallest integers `x` and `y` from `nums`.
 * - Remove `x` and `y` from `nums`.
 * - Insert `(min(x, y) * 2 + max(x, y))` at any position in the array.
 * **Note** that you can only apply the described operation if `nums`
 * contains at least two elements.
 *
 * Return the **minimum** number of operations needed so that all elements
 * of the array are greater than or equal to `k`.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 2 * 105`
 * - `1 <= nums[i] <= 109`
 * - `1 <= k <= 109`
 * - The input is generated such that an answer always exists. That is,
 * there exists some sequence of operations after which all elements of the
 * array are greater than or equal to `k`.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
    // Use a min-heap to efficiently find and remove the smallest elements
    const heap = new MinHeap();
    for (const num of nums) {
        heap.insert(num);
    }

    let operations = 0;

    // Perform operations until all elements are >= k
    while (heap.size() > 1 && heap.peek() < k) {
        const x = heap.extractMin();
        const y = heap.extractMin();
        const newElement = Math.min(x, y) * 2 + Math.max(x, y);
        heap.insert(newElement);
        operations++;
    }

    // If the last element is still less than k, we need one more operation
    if (heap.size() === 1 && heap.peek() < k) {
        operations++;
    }

    return operations;
};


