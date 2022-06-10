/**
 * **1658. Minimum Operations to Reduce X to Zero**
 *
 * You are given an integer array `nums` and an integer `x`. In one operation, you can
 * either remove the leftmost or the rightmost element from the array `nums` and subtract
 * its value from `x`. Note that this modifies the array for future operations.
 *
 * Return *the **minimum number** of operations to reduce `x` to **exactly** `0` if it is
 * possible, otherwise, return `-1`*.
 *
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = (nums, x) => {
    // get totalSum of nums
    const numsSum = nums.reduce((acc, val) => acc + val, 0);
    if (numsSum < x) return -1;
};
