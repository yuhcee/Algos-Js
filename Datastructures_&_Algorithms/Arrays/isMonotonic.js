/**
 * **896. Monotonic Array**
 *
 * An array is **monotonic** if it is either monotone increasing or
 * monotone decreasing.
 *
 * An array `nums` is monotone increasing if for all `i <= j`, `nums[i] <=
 * nums[j]`. An array `nums` is monotone decreasing if for all `i <= j`,
 * `nums[i] >= nums[j]`.
 *
 * Given an integer array `nums`, return *`true` if the given array is
 * monotonic, or `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-105 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = function (nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            isIncreasing = false;
        }
        if (nums[i] < nums[i + 1]) {
            isDecreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
};

const nums = [1, 2, 2, 3];
// Output: true
console.log(isMonotonic(nums));

const nums1 = [6, 5, 4, 4];
// Output: true
console.log(isMonotonic(nums1));

const nums2 = [1, 3, 2];
// Output: false
console.log(isMonotonic(nums2));
