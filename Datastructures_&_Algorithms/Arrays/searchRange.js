/**
 * **34. Find First and Last Position of Element in Sorted Array**
 *
 * Given an array of integers nums sorted in non-decreasing order, find the
 * starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * **Constraints:**
 *
 * - `0 <= nums.length <= 105`
 * - `-109 <= nums[i] <= 109`
 * - `nums` is a non-decreasing array.
 * - `-109 <= target <= 109`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    function binarySearchLeft(nums, target) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    }

    function binarySearchRight(nums, target) {
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return right;
    }

    const left = binarySearchLeft(nums, target);
    const right = binarySearchRight(nums, target);

    if (left <= right) return [left, right];
    return [-1, -1];
};

const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
// Output: [3,4]
console.log(searchRange(nums, target));

const nums1 = [5, 7, 7, 8, 8, 10],
    target1 = 6;
// Output: [-1,-1]
console.log(searchRange(nums1, target1));

const nums2 = [],
    target2 = 0;
// Output: [-1,-1]
console.log(searchRange(nums2, target2));
