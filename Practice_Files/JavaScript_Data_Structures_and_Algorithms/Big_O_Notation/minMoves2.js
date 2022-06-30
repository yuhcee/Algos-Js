/**
 * **462. Minimum Moves to Equal Array Elements II**
 *
 * Given an integer array `nums` of size `n`, return *the minimum number of moves required to make all
 * array elements equal*.
 *
 * In one move, you can increment or decrement an element of the array by `1`.
 *
 * Test cases are designed so that the answer will fit in a **32-bit** integer.
 *
 * @param {number[]} nums
 * @return {number}
 */

// Aprroach 1: Sorting With Median

const minMoves2 = (nums) => {
    nums.sort((a, b) => a - b);

    let operations = 0,
        median = nums[Math.floor(nums.length / 2)];

    for (const num of nums) operations += Math.abs(median - num);

    return operations;
};
const nums = [1, 2, 3];
// Output: 2
/* Explanation:
Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2] */
console.log(minMoves2(nums));
