/**
 * **260. Single Number III**
 *
 * Given an integer array `nums`, in which exactly two elements appear only once
 * and all the other elements appear exactly twice. Find the two elements that
 * appear only once. You can return the answer in **any order**.
 *
 * You must write an algorithm that runs in linear runtime complexity and uses
 * only constant extra space
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 3 * 104`
 * - `-231 <= nums[i] <= 231 - 1`
 * - Each integer in `nums` will appear twice, only two integers will appear
 * once.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
    // Step 1: XOR all numbers to find xor of the two unique numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a bit that is set in the result xor
    // This bit differentiates the two unique numbers
    let diff = xor & -xor;

    // Step 3: Divide numbers into two groups based on the found bit
    let num1 = 0,
        num2 = 0;
    for (let num of nums) {
        if ((num & diff) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    // num1 and num2 are the two unique numbers
    return [num1, num2];
};

const nums = [1, 2, 1, 3, 2, 5];
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
console.log(singleNumber(nums));
