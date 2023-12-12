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

const nums = [3, 4, 5, 2];
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.
console.log(maxProduct(nums));
