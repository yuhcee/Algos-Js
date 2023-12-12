/**
 * **1464. Maximum Product of Two Elements in an Array**
 *
 * Given the array of integers `nums`, you will choose two different
 * indices `i` and `j` of that array. Return *the maximum value of `(nums
 * [i]-1)*(nums[j]-1)`.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 500`
 * - `1 <= nums[i] <= 10^3`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    nums.sort((a, b) => b - a);

    const x = nums[0] - 1;
    const y = nums[1] - 1;

    return x * y;
};
