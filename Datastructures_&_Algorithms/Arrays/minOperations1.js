/**
 * **2009. Minimum Number of Operations to Make Array Continuous**
 *
 * You are given an integer array nums. In one operation, you can
 * replace any element in nums with any integer.
 *
 * nums is considered continuous if both of the following conditions are
 * fulfilled:
 *
 * All elements in nums are unique.
 * The difference between the maximum element and the minimum element in
 * nums equals nums.length - 1.
 * For example, nums = [4, 2, 5, 3] is continuous, but nums = [1, 2, 3,
 * 5, 6] is not continuous.
 *
 * Return the minimum number of operations to make nums continuous.
 * 
 * **Constraints:**

1 <= nums.length <= 105
1 <= nums[i] <= 109
 * 
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
    nums.sort((a, b) => a - b);
    let uniqueNums = Array.from(new Set(nums));
    let maxContinuous = 0;
    for (let i = 0; i < uniqueNums.length; i++) {
        let continuous = 1;
        for (let j = i + 1; j < uniqueNums.length; j++) {
            if (uniqueNums[j] - uniqueNums[i] < nums.length) {
                continuous = j - i + 1;
            } else {
                break;
            }
        }
        maxContinuous = Math.max(maxContinuous, continuous);
    }
    return nums.length - maxContinuous;
};

const nums = [4, 2, 5, 3];
// Output: 0
// Explanation: nums is already continuous.
console.log(minOperations(nums));

const nums1 = [1, 2, 3, 5, 6];
// Output: 1
/* Explanation: One possible solution is to change the last element to 4.
The resulting array is [1,2,3,5,4], which is continuous. */

const nums2 = [1, 10, 100, 1000];
// Output: 3
/* Explanation: One possible solution is to:
- Change the second element to 2.
- Change the third element to 3.
- Change the fourth element to 4.
The resulting array is [1,2,3,4], which is continuous. */
