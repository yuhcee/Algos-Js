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

    // init targetSum
    const targetSum = numsSum - x;

    // init local vars
    let left = 0;
    let right = 0;
    let currSum = 0;
    let maxWindow = -Infinity;

    // while right less than nums length, increment right
    while (right < nums.length) {
        currSum += nums[right];
        right += 1;

        // while currSum > targetSum, increment left
        while (currSum > targetSum) {
            currSum -= nums[left];
            left += 1;
        }

        // if currSum === targetSum, set maxWindow
        if (currSum === targetSum && maxWindow < right - left) {
            maxWindow = right - left;
        }
    }

    // return result
    return maxWindow === -Infinity ? -1 : nums.length - maxWindow;
};

const nums = [1, 1, 4, 2, 3],
    x = 5;
// Output: 2;
// Explanation: The optimal solution is to remove the last two elements to reduce x to zero.
console.log(minOperations(nums, x));
