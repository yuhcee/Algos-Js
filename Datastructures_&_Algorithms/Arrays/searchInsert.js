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
        // run the binary search loop while left index is less than or equal to right index
        let mid = Math.floor((left + right) / 2); // find the middle index
        if (nums[mid] === target) {
            // if the middle value is equal to the target, return the middle index
            return mid;
        } else if (nums[mid] < target) {
            // if the middle value is less than the target, search in the right half of the array
            left = mid + 1; // set the left boundary to the index after the middle index
        } else {
            // if the middle value is greater than the target, search in the left half of the array
            right = mid - 1; // set the right boundary to the index before the middle index
        }
    }

    // If we reach here, the target value was not found in the array
    // The left index now represents the index where the target value would be inserted
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

const nums2 = [1, 3, 5, 6],
    target2 = 7;
// Output: 4
console.log(searchInsert(nums2, target2));
