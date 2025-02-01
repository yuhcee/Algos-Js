/**
 * **3151. Special Array I**
 *
 * An array is considered **special** if every pair of its adjacent
 * elements contains two numbers with different parity.
 *
 * You are given an array of integers `nums`. Return `true` if `nums` is a
 * **special** array, otherwise, return `false`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isArraySpecial = function (nums) {
    if (nums.length === 1) return true;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === nums[i + 1] % 2) {
            return false;
        }
    }

    return true;
};
const nums = [1];
/* Output: true
Explanation:
There is only one element. So the answer is true. */
console.log(isArraySpecial(nums));
