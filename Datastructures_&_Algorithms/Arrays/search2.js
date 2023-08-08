/**
 * **33. Search in Rotated Sorted Array**
 *
 * There is an integer array `nums` sorted in ascending order (with **distinct**
 * values).
 *
 * Prior to being passed to your function, `nums` is **possibly rotated** at an
 * unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting array
 * is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]`
 * (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be rotated at pivot index
 * 3 and become `[4,5,6,7,0,1,2]`.
 *
 * Given the array `nums` **after** the possible rotation and an integer `target`,
 * return *the index of `target` if it is in `nums`, or `-1` if it is not in 
 * `nums`*.
 *
 * You must write an algorithm with `O(log n)` runtime complexity.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 5000`
 * - `-104 <= nums[i] <= 104`
 * - All values of nums are unique.
 * - `nums` is an ascending array that is possibly rotated.
 * - `-104 <= target <= 104`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // If target is within the left sorted half
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                // If target is within the right sorted half
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // Target not found
};

const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0;
// Output: 4
console.log(search(nums, target));

const nums1 = [4, 5, 6, 7, 0, 1, 2],
    target1 = 3;
// Output: -1
console.log(search(nums1, target1));

const nums2 = [1],
    target2 = 0;
// Output: -1
console.log(search(nums2, target2));
