/**
 * **945. Minimum Increment to Make Array Unique**
 *
 * You are given an integer array `nums`. In one move, you can pick an
 * index `i` where `0 <= i < nums.length` and increment `nums[i]` by `1`
 *
 * Return *the minimum number of moves to make every value in `nums`
 * **unique***.
 *
 * The test cases are generated so that the answer fits in a 32-bit integer.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minIncrementForUnique = function (nums) {
    // Sort the array
    nums.sort((a, b) => a - b);

    let moves = 0;
    for (let i = 1; i < nums.length; i++) {
        // If the current number is less than or equal to the previous number
        if (nums[i] <= nums[i - 1]) {
            // Calculate the increment needed to make nums[i] unique
            let increment = nums[i - 1] - nums[i] + 1;
            // Add the increment to the moves
            moves += increment;
            // Update the current number to be unique
            nums[i] = nums[i - 1] + 1;
        }
    }

    return moves;
};

const nums = [1, 2, 2];
// Output: 1
// Explanation: After 1 move, the array could be [1, 2, 3].
console.log(minIncrementForUnique(nums));

const nums1 = [3, 2, 1, 2, 1, 7];
// Output: 6
/* Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values. */
console.log(minIncrementForUnique(nums1));
