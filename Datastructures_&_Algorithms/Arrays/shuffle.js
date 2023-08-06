/**
 * **1470. Shuffle the Array**
 *
 * Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,
 * y2,...,yn]`.
 *
 * Return *the array in the form `[x1,y1,x2,y2,...,xn,yn]`*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 500`
 * - `nums.length == 2n`
 * - `1 <= nums[i] <= 10^3`
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    let res = [];

    // Loop through the elements of nums in pairs
    for (let i = 0; i < n; i++) {
        // Add the current element and the corresponding y element to the result array
        res.push(nums[i]);
        res.push(nums[i + n]);
    }

    return res;
};
