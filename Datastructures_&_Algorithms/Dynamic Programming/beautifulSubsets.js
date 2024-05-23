/**
 * **2597. The Number of Beautiful Subsets**
 *
 * You are given an array `nums` of positive integers and a **positive** integer
 * `k`.
 *
 * A subset of `nums` is **beautiful** if it does not contain two integers with
 * an absolute difference equal to `k`.
 *
 * Return *the number of **non-empty beautiful** subsets of the array `nums`*.
 *
 * A **subset** of `nums` is an array that can be obtained by deleting some
 * (possibly none) elements from `nums`. Two subsets are different if and only
 * if the chosen indices to delete are different.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 20`
 * - `1 <= nums[i], k <= 1000`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const beautifulSubsets = function (nums, k) {
    let count = 0;

    // Helper function for backtracking
    const backtrack = (start, subset) => {
        if (subset.length > 0) {
            count++;
        }

        for (let i = start; i < nums.length; i++) {
            // Check if adding nums[i] violates the beautiful condition
            let canAdd = true;
            for (let num of subset) {
                if (Math.abs(num - nums[i]) === k) {
                    canAdd = false;
                    break;
                }
            }

            if (canAdd) {
                subset.push(nums[i]);
                backtrack(i + 1, subset);
                subset.pop(); // Backtrack
            }
        }
    };

    backtrack(0, []);
    return count;
};

const nums = [2, 4, 6],
    k = 2;
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].
console.log(beautifulSubsets(nums, k));
