/**
 * **78. Subsets**
 *
 * Given an integer array `nums` of **unique** elements, return *all possible
 * subsets (the power set)*.
 *
 * The solution set **must not** contain duplicate subsets. Return the solution
 * in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 10`
 * `-10 <= nums[i] <= 10`
 * - All the numbers of `nums` are **unique**.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
    const result = [];

    // Helper function for backtracking
    function backtrack(start, currentSubset) {
        // Push the current subset to the result
        result.push([...currentSubset]);

        // Iterate through the elements, starting from 'start'
        for (let i = start; i < nums.length; i++) {
            // Include the current element
            currentSubset.push(nums[i]);

            // Recursively call backtrack with the next starting index
            backtrack(i + 1, currentSubset);

            // Exclude the current element to explore other possibilities
            currentSubset.pop();
        }
    }

    // Start backtracking from the first index with an empty subset
    backtrack(0, []);

    return result;
};

const nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums));

const nums1 = [0];
// Output: [[],[0]]
console.log(subsets(nums1));
