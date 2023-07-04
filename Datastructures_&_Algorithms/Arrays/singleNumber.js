/**
 * **137. Single Number II**
 *
 * Given an integer array `nums` where every element appears **three times** except for one,
 * which appears **exactly once**. *Find the single element and return it*.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra
 * space.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 3 * 104`
 * - `-231 <= nums[i] <= 231 - 1`
 * - Each element in `nums` appears exactly **three times** except for one element which
 * appears **once**.
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    const numsCounter = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        numsCounter[num] = numsCounter[num] + 1 || 1;
    }

    // return Object.keys(numsCounter).filter(key => numsCounter[key] === 1).join('')
    for (let [key, value] of Object.entries(numsCounter)) {
        if (value === 1) return key;
    }
};
const nums = [2, 2, 3, 2];
// Output: 3
console.log(singleNumber(nums));

const nums1 = [0, 1, 0, 1, 0, 1, 99];
// Output: 99
console.log(singleNumber(nums1));
