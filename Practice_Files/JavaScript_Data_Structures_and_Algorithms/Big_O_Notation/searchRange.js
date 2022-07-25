/**
 *
 * Given an array of integers `nums` sorted in non-decreasing order, find the
 * starting and ending position of a given `target` value.
 *
 * If `target` is not found in the array, return `[-1, -1]`.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
    let firstIndex = -1,
        lastIndex = -1;
    // initialize two pointers indices
    let start = 0,
        end = nums.length - 1;

    while ((firstIndex < 0 || lastIndex < 0) && end >= 0) {
        // check for first match and resassign firstIndex
        if (nums[start] === target && firstIndex < 0) {
            firstIndex = start;
        }
        // check for last match and resassign lastIndex
        if (nums[end] === target && lastIndex < 0) {
            lastIndex = end;
        }
        start++;
        end--;
    }
    // return matched indices
    return [firstIndex, lastIndex];
};

const nums = [5, 7, 7, 8, 8, 10],
    target = 8;
// Output: [3,4]
console.log(searchRange(nums, target));
const nums1 = [5, 7, 7, 8, 8, 10],
    target1 = 6;
// Output: [-1,-1]
console.log(searchRange(nums1, target1));
