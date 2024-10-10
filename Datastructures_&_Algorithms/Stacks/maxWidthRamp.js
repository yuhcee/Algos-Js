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
