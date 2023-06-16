/**
 * **1822. Sign of the Product of an Array**
 *
 * There is a function `signFunc(x)` that returns:
 *
 * - `1` if `x` is positive.
 * - `-1` if `x` is negative.
 * - `0` if `x` is equal to `0`.
 *
 * You are given an integer array `nums`. Let `product` be the product of all values in the array
 * `nums`.
 *
 * Return signFunc(product).
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 1000`
 * - `-100 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
    let product = 1; // Initialize product to 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // If any value is 0, the product will be 0
            return 0;
        } else if (nums[i] < 0) {
            // If any value is negative, change the sign of the product
            product = -product;
        }
    }
    return product > 0 ? 1 : -1; // Return 1 if product is positive, -1 if negative
};