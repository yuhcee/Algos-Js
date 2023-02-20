/**
 * **35. Search Insert Position**
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 104`
 * - `-104 <= nums[i] <= 104`
 * - `nums` contains distinct values sorted in ascending order.
 * - `-104 <= target <= 104`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let left = 0; // set the left boundary to the beginning of the array
    let right = nums.length - 1; // set the right boundary to the end of the array

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

const nums = [1, 3, 5, 6],
    target = 5;
// Output: 2
console.log(searchInsert(nums, target));

const nums1 = [1, 3, 5, 6],
    target1 = 2;
// Output: 1
console.log(searchInsert(nums1, target1));
