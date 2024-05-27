/**
 * **1608. Special Array With X Elements Greater Than or Equal X**
 *
 * You are given an array `nums` of non-negative integers. `nums` is considered
 * **special** if there exists a number `x` such that there are **exactly** `x`
 * numbers in `nums` that are **greater than or equal** to `x`.
 *
 * Notice that `x` **does** not have to be an element in `nums`.
 *
 * Return *`x` if the array is **special**, otherwise, return `-1`*. It can be
 * proven that if `nums` is special, the value for `x` is **unique**.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `0 <= nums[i] <= 1000`
 *
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = function (nums) {
    // Sort the array
    nums.sort((a, b) => a - b);

    // Iterate over possible values of x
    for (let x = 0; x <= nums.length; x++) {
        // Find the count of numbers >= x
        let count = 0;
        for (let num of nums) {
            if (num >= x) count++;
        }

        // Check if the count matches x
        if (count === x) return x;
    }

    // If no valid x is found, return -1
    return -1;
};

const nums = [3, 5];
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
console.log(specialArray(nums));
