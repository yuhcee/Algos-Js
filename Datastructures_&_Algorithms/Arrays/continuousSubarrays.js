/**
 * **2762. Continuous Subarrays**
 *
 * You are given a **0-indexed** integer array `nums`. A subarray of `nums` is
 * called **continuous** if:
 *
 * - Let `i`, `i + 1`, ..., `j` be the indices in the subarray. Then, for each
 * pair of indices `i <= i1`, `i2 <= j`, `0 <= |nums[i1] - nums[i2]| <= 2`.
 *
 * Return *the total number of **continuous** subarrays*.
 *
 * A subarray is a contiguous **non-empty** sequence of elements within an
 * array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const continuousSubarrays = function (nums) {
    let n = nums.length;
    let start = 0;
    let count = 0;

    let minDeque = []; // Monotonic increasing deque
    let maxDeque = []; // Monotonic decreasing deque

    for (let end = 0; end < n; end++) {
        // Update max deque
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[end]) {
            maxDeque.pop();
        }
        maxDeque.push(end);

        // Update min deque
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[end]) {
            minDeque.pop();
        }
        minDeque.push(end);

        // Shrink the window if the condition is violated
        while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
            if (maxDeque[0] === start) maxDeque.shift();
            if (minDeque[0] === start) minDeque.shift();
            start++;
        }

        // Add the number of valid subarrays ending at `end`
        count += end - start + 1;
    }

    return count;
};

const nums = [5, 4, 2, 4];
// Output: 8
/* Explanation: 
Continuous subarray of size 1: [5], [4], [2], [4].
Continuous subarray of size 2: [5,4], [4,2], [2,4].
Continuous subarray of size 3: [4,2,4].
Thereare no subarrys of size 4.
Total continuous subarrays = 4 + 3 + 1 = 8.
It can be shown that there are no more continuous subarrays. */
console.log(continuousSubarrays(nums));

const nums1 = [1, 2, 3];
// Output: 6
/* Explanation: 
Continuous subarray of size 1: [1], [2], [3].
Continuous subarray of size 2: [1,2], [2,3].
Continuous subarray of size 3: [1,2,3].
Total continuous subarrays = 3 + 2 + 1 = 6. */
console.log(continuousSubarrays(nums1));
