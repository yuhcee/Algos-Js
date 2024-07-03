/**
 * **1509. Minimum Difference Between Largest and Smallest Value in Three Moves**
 *
 * You are given an integer array `nums`.
 *
 * In one move, you can choose one element of `nums` and change it to **any
 * value**.
 *
 * Return *the minimum difference between the largest and smallest value of nums
 * **after performing at most three moves***.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-109 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minDifference = function (nums) {
    if (nums.length <= 4) {
        return 0; // If there are 4 or fewer elements, we can make all of them the same in at most 3 moves.
    }

    nums.sort((a, b) => a - b);

    let n = nums.length;
    // Possible scenarios
    let scenario1 = nums[n - 1] - nums[3]; // Change the three smallest elements
    let scenario2 = nums[n - 2] - nums[2]; // Change the two smallest elements and the largest element
    let scenario3 = nums[n - 3] - nums[1]; // Change the smallest element and the two largest elements
    let scenario4 = nums[n - 4] - nums[0]; // Change the three largest elements

    return Math.min(scenario1, scenario2, scenario3, scenario4);
};
