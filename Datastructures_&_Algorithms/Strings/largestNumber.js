/**
 * **179. Largest Number**
 *
 * Given a list of non-negative integers `nums`, arrange them such that
 * they form the largest number and return it.
 *
 * Since the result may be very large, so you need to return a string
 * instead of an integer.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `0 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
    // Convert numbers to strings for comparison
    nums = nums.map(String);

    // Sort based on the custom comparator
    nums.sort((a, b) => b + a - (a + b));

    // Join sorted numbers to form the largest number
    const result = nums.join('');

    // Handle the case where all numbers are zero
    return result[0] === '0' ? '0' : result;
};

const nums = [10, 2];
// Output: "210"
console.log(largestNumber(nums));
