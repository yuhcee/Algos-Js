/**
 * **977. Squares of a Sorted Array**
 *
 * Given an integer array `nums` sorted in **non-decreasing** order, return
 * *an array of **the squares of each number** sorted in non-decreasing
 * order.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 104`
 * - `-104 <= nums[i] <= 104`
 * - `nums` is sorted in **non-decreasing** order
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }

    return nums.sort((a, b) => a - b);
};
