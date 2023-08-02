/**
 * **46. Permutations**
 *
 * Given an array `nums` of distinct integers, return *all the possible permutations*. You can return
 * the answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 6`
 * - `-10 <= nums[i] <= 10`
 * - All the integers of `nums` are **unique**.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    const result = [];

    // Helper function to backtrack and generate permutations
    function backtrack(start) {
        if (start === nums.length) {
            // If we have reached the end of the array, add the current permutation to the result
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Swap elements to create a new permutation
            [nums[start], nums[i]] = [nums[i], nums[start]];

            // Recurse to generate permutations for the next elements
            backtrack(start + 1);

            // Backtrack by swapping back the elements
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    // Start the backtracking process from index 0
    backtrack(0);

    return result;
};

const nums = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute(nums));

const nums1 = [0, 1];
// Output: [[0,1],[1,0]]
console.log(permute(nums1));
