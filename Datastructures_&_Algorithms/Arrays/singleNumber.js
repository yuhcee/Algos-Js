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
    // return Object.entries(numsCounter).filter(([key, value]) => value === 1 && key).join('')
    for (let [key, value] of Object.entries(numsCounter)) {
        if (value === 1) return key;
    }
};
