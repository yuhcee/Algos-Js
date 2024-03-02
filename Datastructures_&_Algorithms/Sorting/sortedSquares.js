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

const nums = [-4, -1, 0, 3, 10];
// Output: [0, 1, 9, 16, 100];
/* Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100]. */
console.log(sortedSquares(nums));

const nums1 = [-7, -3, 2, 3, 11];
// Output: [4,9,9,49,121]
console.log(sortedSquares(nums1));
