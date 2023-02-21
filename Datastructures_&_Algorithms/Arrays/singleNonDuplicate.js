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
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (middle % 2 === 1) {
            middle--;
        }

        if (nums[middle] === nums[middle + 1]) {
            left = middle + 2;
        } else {
            right = middle;
        }
    }

    return nums[left];
};

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// Output: 2
console.log(singleNonDuplicate(nums));

const nums1 = [3, 3, 7, 7, 10, 11, 11];
// Output: 10
console.log(singleNonDuplicate(nums1));
