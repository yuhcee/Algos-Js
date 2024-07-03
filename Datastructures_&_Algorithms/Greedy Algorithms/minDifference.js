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

const nums = [5, 3, 2, 4];
// Output: 0
/* Explanation: We can make at most 3 moves.
In the first move, change 2 to 3. nums becomes [5,3,3,4].
In the second move, change 4 to 3. nums becomes [5,3,3,3].
In the third move, change 5 to 3. nums becomes [3,3,3,3].
After performing 3 moves, the difference between the minimum and maximum is 3 - 3 = 0. */
console.log(minDifference(nums));

const nums1 = [1, 5, 0, 10, 14];
// Output: 1
/* Explanation: We can make at most 3 moves.
In the first move, change 5 to 0. nums becomes [1,0,0,10,14].
In the second move, change 10 to 0. nums becomes [1,0,0,0,14].
In the third move, change 14 to 1. nums becomes [1,0,0,0,1].
After performing 3 moves, the difference between the minimum and maximum is 1 - 0 = 1.
It can be shown that there is no way to make the difference 0 in 3 moves. */
console.log(minDifference(nums1));

const nums2 = [3, 100, 20];
// Output: 0
/* Explanation: We can make at most 3 moves.
In the first move, change 100 to 7. nums becomes [3,7,20].
In the second move, change 20 to 7. nums becomes [3,7,7].
In the third move, change 3 to 7. nums becomes [7,7,7].
After performing 3 moves, the difference between the minimum and maximum is 7 - 7 = 0. */
console.log(minDifference(nums2));
