/**
 * **962. Maximum Width Ramp**
 *
 * A **ramp** in an integer array `nums` is a pair `(i, j)` for which `i < j`
 * and `nums[i] <= nums[j]`. The **width** of such a ramp is `j - i`.
 *
 * Given an integer array `nums`, return *the maximum width of a **ramp** in
 * `nums`. If there is no **ramp** in `nums`, return `0`*.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 5 * 104`
 * - `0 <= nums[i] <= 5 * 104`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxWidthRamp = function (nums) {
    let stack = [];
    let maxWidth = 0;

    // Step 1: Build a decreasing stack with indices of nums
    for (let i = 0; i < nums.length; i++) {
        if (stack.length === 0 || nums[stack[stack.length - 1]] > nums[i]) {
            stack.push(i);
        }
    }

    // Step 2: Traverse from the end and check for ramps
    for (let j = nums.length - 1; j >= 0; j--) {
        // Find the farthest i such that nums[i] <= nums[j]
        while (stack.length > 0 && nums[stack[stack.length - 1]] <= nums[j]) {
            let i = stack.pop();
            maxWidth = Math.max(maxWidth, j - i);
        }
    }

    return maxWidth;
};

const nums = [6, 0, 8, 2, 1, 5];
// Output: 4
// Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.
console.log(maxWidthRamp(nums));

const nums1 = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1];
// Output: 7
// Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
console.log(maxWidthRamp(nums1));
