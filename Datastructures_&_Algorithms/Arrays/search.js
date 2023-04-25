/**
 * **704. Binary Search**
 *
 * Given an array of integers `nums` which is sorted in ascending order, and an integer `target`,
 * write a function to search `target` in `nums`. If `target` exists, then return its index.
 * Otherwise, return `-1`.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 104`
 * - `-104 < nums[i], target < 104`
 * - All the integers in `nums` are **unique**.
 * - `nums` is sorted in ascending order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
};

const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
// Output: 4
// Explanation: 9 exists in nums and its index is 4
console.log(search(nums, target));

const nums1 = [-1, 0, 3, 5, 9, 12],
    target1 = 2;
// Output: -1
// Explanation: 2 does not exist in nums so return -1
console.log(search(nums1, target1));
