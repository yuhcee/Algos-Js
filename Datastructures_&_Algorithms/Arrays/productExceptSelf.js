/**
 * **238. Product of Array Except Self**
 *
 * Given an integer array `nums`, return *an array answer such that `answer
 * [i]` is equal to the product of all the elements of `nums` except `nums[i]
 * `.*
 *
 * The product of any prefix or suffix of `nums` is guaranteed to fit in a
 * **32-bit** integer.
 *
 * You must write an algorithm that runs in `O(n)` time and without using
 * the division operation.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * `-30 <= nums[i] <= 30`
 * - The product of any prefix or suffix of `nums` is **guaranteed** to fit
 * in a **32-bit** integer.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    const prefix = new Array(nums.length);
    const suffix = new Array(nums.length);
    const result = [];

    // Compute prefix product
    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // Compute suffix product
    suffix[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Compute result
    for (let i = 0; i < nums.length; i++) {
        result.push(prefix[i] * suffix[i]);
    }

    return result;
};

const nums = [1, 2, 3, 4];
// Output: [24,12,8,6]
console.log(productExceptSelf(nums));
