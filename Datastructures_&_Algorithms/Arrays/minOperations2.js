/**
 * **3191. Minimum Operations to Make Binary Array Elements Equal to One I**
 *
 * You are given a binary array `nums`.
 *
 * You can do the following operation on the array *any* number of times (possibly zero):
 *
 * - Choose **any** 3 **consecutive** elements from the array and **flip all** of them.
 *
 * **Flipping** an element means changing its value from 0 to 1, and from 1 to 0.
 *
 * Return the **minimum** number of operations required to make all elements in `nums` equal to 1. If it is impossible,
 * return `-1`.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 105`
 * - `0 <= nums[i] <= 1`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
    let n = nums.length;
    let operations = 0;

    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            // Flip the current 3 elements
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            operations++;
        }
    }

    // If any zero remains, return -1
    for (let num of nums) {
        if (num === 0) return -1;
    }

    return operations;
};
