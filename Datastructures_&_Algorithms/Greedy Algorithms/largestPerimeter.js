/**
 * **976. Largest Perimeter Triangle**
 *
 * Given an integer array `nums`, return *the largest perimeter of a triangle with a non-zero area,
 * formed from three of these lengths. If it is impossible to form any triangle of a non-zero area,
 * return `0`*.
 *
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = nums.length - 3; i >= 0; i--) {

        const perimeter = nums[i] + nums[i + 1] > nums[i + 2];
        if (perimeter) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
};
const nums = [2, 1, 2];
// Output: 5
console.log(largestPerimeter(nums));
