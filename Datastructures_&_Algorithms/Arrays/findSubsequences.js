/**
 * **491. Non-decreasing Subsequences**
 *
 * Given an integer array `nums`, return *all the different possible non-decreasing subsequences of
 * the given array with at least two elements*. You may return the answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 15`
 * - `-100 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = (nums) => {
    let res = []; // array to store the final result of non-decreasing subsequences

    // backtrack function
    function backtrack(start, curr) {
        // if the current subsequence has at least 2 elements
        if (curr.length >= 2) {
            res.push(curr.slice()); // add it to the final result
        }

        const seen = new Set(); // set to keep track of previously seen elements

        for (let i = start; i < nums.length; i++) {
            // if the element has been seen before, skip it
            if (seen.has(nums[i])) {
                continue;
            }
            // if the current subsequence is empty or the element is greater than or equal to the last element in the subsequence
            if (curr.length === 0 || nums[i] >= curr[curr.length - 1]) {
                seen.add(nums[i]);
                curr.push(nums[i]); // add the element to the current subsequence
                backtrack(i + 1, curr); // call the backtracking function recursively
                curr.pop(); // remove the element from the current subsequence
            }
        }
    }

    backtrack(0, []);
    return res;
};

const nums = [4, 6, 7, 7];
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
console.log(findSubsequences(nums));
