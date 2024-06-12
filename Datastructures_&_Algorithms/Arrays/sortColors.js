/**
 * **75. Sort Colors**
 *
 * Given an array `nums` with `n` objects colored red, white, or blue, sort them
 * in-place so that objects of the same color are adjacent, with the colors in
 * the order red, white, and blue.
 *
 * We will use the integers `0`, `1`, and `2` to represent the color red, white,
 * and blue, respectively.
 *
 * You must solve this problem without using the library's sort function.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 300`
 * - `nums[i]` is either `0`, `1`, or `2`.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let low = 0,
        mid = 0,
        high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid], increment low and mid
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Just move mid to the next element
            mid++;
        } else {
            // Swap nums[mid] and nums[high], decrement high
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

const nums = [2, 0, 2, 1, 1, 0];
// Output: [0,0,1,1,2,2]
console.log(sortColors(nums));

const nums1 = [2, 0, 1];
// Output: [0,1,2]
console.log(sortColors(nums1));
