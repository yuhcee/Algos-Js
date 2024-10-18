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

const nums = [3, 1];
// Output: 2
/* Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1] */
console.log(countMaxOrSubsets(nums));

const nums1 = [2, 2, 2];
// Output: 7
/* Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 23 - 1 = 7 total subsets. */
console.log(countMaxOrSubsets(nums1));

const nums2 = [3, 2, 1, 5];
// Output: 6
/* Explanation: The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:
- [3,5]
- [3,1,5]
- [3,2,5]
- [3,2,1,5]
- [2,5]
- [2,1,5] */
console.log(countMaxOrSubsets(nums2));
