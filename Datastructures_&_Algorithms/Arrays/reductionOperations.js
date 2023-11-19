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
