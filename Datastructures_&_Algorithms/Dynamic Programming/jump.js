/**
 * **45. Jump Game II**
 *
 * You are given a **0-indexed** array of integers `nums` of length `n`. You are
 * initially positioned at `nums[0]`.
 *
 * Each element `nums[i]` represents the maximum length of a forward jump from
 * index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i
 * + j]` where:
 *
 * - `0 <= j <= nums[i]` and
 * - `i + j < n`
 *
 * Return *the minimum number of jumps to reach `nums[n - 1]`. The test cases are
 * generated such that you can reach `nums[n - 1]`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 104`
 * - `0 <= nums[i] <= 1000`
 * - It's guaranteed that you can reach `nums[n - 1]`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
    // Edge case: if the length of the array is less than 2, then we don't need to make any jumps
    if (nums.length < 2) return 0;

    // Create a queue to store the indices of the elements that we need to check
    let queue = [0];
    // Create a set to store the indices of the elements that have been visited
    let visited = new Set([0]);
    // Create a variable to store the number of jumps
    let jumps = 0;

    while (queue.length > 0) {
        // Increase the number of jumps
        jumps++;
        // Calculate the size of the current level
        let size = queue.length;
        // Loop through the elements in the current level
        for (let i = 0; i < size; i++) {
            // Get the current element
            let curr = queue.shift();
            // Loop through the possible next elements
            for (let j = nums[curr]; j > 0; j--) {
                let next = curr + j;
                // Check if the next element is the last element
                if (next === nums.length - 1) return jumps;
                // Check if the next element has not been visited
                if (!visited.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
    }
};
