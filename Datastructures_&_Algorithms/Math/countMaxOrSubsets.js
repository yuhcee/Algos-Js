/**
 * **2044. Count Number of Maximum Bitwise-OR Subsets**
 *
 * Given an integer array `nums`, find the **maximum** possible
 * **bitwise OR** of a subset of `nums` and return *the number of
 * **different non-empty subsets** with the maximum bitwise OR*.
 *
 * An array `a` is a **subset** of an array `b` if `a` can be obtained
 * from `b` by deleting some (possibly zero) elements of `b`. Two
 * subsets are considered **different** if the indices of the elements
 * chosen are different.
 *
 * The bitwise OR of an array `a` is equal to `a[0] OR a[1] OR ... OR a
 * [a.length - 1]` **(0-indexed)**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 16`
 * - `1 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
    let maxOr = 0;
    let count = 0;

    // Helper function to calculate bitwise OR of a subset
    function backtrack(i, currentOr) {
        // Base case: if we've considered all elements
        if (i === nums.length) {
            // Check if the current OR is the maximum
            if (currentOr > maxOr) {
                maxOr = currentOr;
                count = 1; // Reset count as we found a new maximum
            } else if (currentOr === maxOr) {
                count++; // Increment count for this max OR subset
            }
            return;
        }

        // Recursive case: Include or exclude the current element
        backtrack(i + 1, currentOr | nums[i]); // Include nums[i]
        backtrack(i + 1, currentOr); // Exclude nums[i]
    }

    // Start the backtracking process from the first element with an initial OR of 0
    backtrack(0, 0);

    return count;
};
