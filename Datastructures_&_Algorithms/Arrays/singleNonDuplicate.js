/**
 * **540. Single Element in a Sorted Array**
 *
 * You are given a sorted array consisting of only integers where every element appears exactly
 * twice, except for one element which appears exactly once.
 *
 * Return *the single element that appears only once.*
 *
 * Your solution must run in `O(log n)` time and `O(1)` space.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
    // define two pointers, left and right, to cover the range of the array
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        // find the middle index
        let middle = Math.floor((left + right) / 2);
        // check if the middle index is even or odd
        if (middle % 2 === 1) {
            // if the middle index is odd, move it one position to the left
            middle--;
        }
        // check if the middle element is equal to the element to its right
        if (nums[middle] === nums[middle + 1]) {
            // if so, the single element must be on the right side of the array
            left = middle + 2;
        } else {
            // otherwise, the single element must be on the left side of the array
            right = middle;
        }
    }
    // when the loop ends, left and right are equal and point to the single element
    return nums[left];
};

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Output: 2
console.log(singleNonDuplicate(nums));

const nums1 = [3, 3, 7, 7, 10, 11, 11];
// Output: 10
console.log(singleNonDuplicate(nums1));
