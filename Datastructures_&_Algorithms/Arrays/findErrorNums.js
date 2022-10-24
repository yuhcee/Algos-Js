/**
 * **645. Set Mismatch**
 *
 * You have a set of integers `s`, which originally contains all the numbers from `1` to `n`.
 * Unfortunately, due to some error, one of the numbers in `s` got duplicated to another number in the
 * set, which results in **repetition of one** number and **loss of another** number.
 *
 * You are given an integer array `nums` representing the data status of this set after the error.
 *
 * Find the number that occurs twice and the number that is missing and return *them in the form of an
 * array.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 104`
 * - `1 <= nums[i] <= 104`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {};

const nums = [1, 2, 2, 4];
// Output: [2,3]
console.log(findErrorNums(nums));

const nums1 = [1, 1];
// Output: [1,2]
console.log(findErrorNums(nums1));
