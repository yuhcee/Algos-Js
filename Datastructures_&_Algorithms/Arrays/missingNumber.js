/**
 * **268. Missing Number**
 *
 * Given an array nums containing `n` distinct numbers in the range `[0, n]`,
 * return *the only number in the range that is missing from the array*.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 104`
 * - `0 <= nums[i] <= n`
 * - All the numbers of nums are **unique**.
 *
 * @param {number[]} nums
 * @return {number}
 */
/* const missingNumber = (nums) => {
    nums.sort((a, b) => a - b);

    if (nums.at(-1) !== nums.length) return nums.length;
    if (nums[0] !== 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        let expectedNum = nums[i - 1] + 1;
        if (nums[i] !== expectedNum) return expectedNum;
    }

    return -1;
}; */

const missingNumber = (nums) => {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i + 1] > 1) {
            return nums[i] - 1;
        }
    }
    return nums.at(-1) !== 0 ? 0 : nums[0] + 1;
};

const nums = [3, 0, 1];
// Output: 2;
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
console.log(missingNumber(nums));

const nums1 = [0, 1];
// Output: 2;
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
console.log(missingNumber(nums1));

const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
// Output: 8;
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
console.log(missingNumber(nums2));
