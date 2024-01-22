/**
 * **645. Set Mismatch**
 *
 * You have a set of integers `s`, which originally contains all the
 * numbers from `1` to `n`.
 * Unfortunately, due to some error, one of the numbers in `s` got
 * duplicated to another number in the set, which results in **repetition
 * of one** number and **loss of another** number.
 *
 * You are given an integer array `nums` representing the data status of
 * this set after the error.
 *
 * Find the number that occurs twice and the number that is missing and
 * return *them in the form of an array.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 104`
 * - `1 <= nums[i] <= 104`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    // Ex: [1,2,2,4]

    const n = nums.length;

    const except = (n * (n + 1)) / 2; // 1 + 2 + 3 + 4

    const set = new Set(nums); // {1, 2, 4}
    // let setSum = 0;
    // set.forEach((num) => (setSum += num));
    const setSum = Array.from(set).reduce((a, c) => a + c); // 1 + 2 + 4
    const numSum = nums.reduce((acc, curr) => acc + curr); // 1 + 2 + 2 + 4

    // numSum - setSum = [1 + 2 + 2 + 4] - [1 + 2 + 4] = 2
    // except - setSum = [1 + 2 + 3 + 4] - [1 + 2 + 4] = 3

    return [numSum - setSum, except - setSum];
};

const nums = [1, 2, 2, 4];
// Output: [2,3]
console.log(findErrorNums(nums));

const nums1 = [1, 1];
// Output: [1,2]
console.log(findErrorNums(nums1));

const nums3 = [3, 2, 3, 4, 6, 5];
// Output: [3,1]
console.log(findErrorNums(nums3));
