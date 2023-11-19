/**
 * **1887. Reduction Operations to Make the Array Elements Equal**
 *
 * Given an integer array `nums`, your goal is to make all elements in
 * `nums` equal. To complete one operation, follow these steps:
 *
 * 1. Find the **largest** value in `nums`. Let its index be `i`
 * (**0-indexed**) and its value be `largest`. If there are multiple elements with the largest value, pick the smallest i.
 * 2. Find the **next largest** value in `nums` **strictly smaller** than largest. Let its value be `nextLargest`.
 * 3. Reduce `nums[i]` to `nextLargest`.
 *
 * Return *the number of operations to make all elements in `nums`
 * equal*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 5 * 104`
 * - `1 <= nums[i] <= 5 * 104`
 *
 * @param {number[]} nums
 * @return {number}
 */
// A function to find the minimum number of operations to make all elements in nums equal
const reductionOperations = function (nums) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);
    // Initialize the number of operations to 0
    let operations = 0;
    // Loop through the array from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is smaller than the previous one
        if (nums[i] < nums[i - 1]) {
            // Increment the number of operations by the number of elements before i
            operations += i;
        }
    }
    // Return the number of operations
    return operations;
};
const nums = [5, 1, 3];
// Output: 3
/* Explanation: It takes 3 operations to make all elements in nums equal:
1. largest = 5 at index 0. nextLargest = 3. Reduce nums[0] to 3. nums = [3,1,3].
2. largest = 3 at index 0. nextLargest = 1. Reduce nums[0] to 1. nums = [1,1,3].
3. largest = 3 at index 2. nextLargest = 1. Reduce nums[2] to 1. nums = [1,1,1]. */
console.log(reductionOperations(nums));

const nums1 = [1, 1, 1];
// Output: 0
// Explanation: All elements in nums are already equal.
console.log(reductionOperations(nums1));
