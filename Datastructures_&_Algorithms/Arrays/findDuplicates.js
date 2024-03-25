/**
 * **442. Find All Duplicates in an Array**
 *
 * Given an integer array `nums` of length `n` where all the integers of `nums`
 * are in the range `[1, n]` and each integer appears **once** or **twice**,
 * return *an array of all the integers that appears **twice***.
 *
 * You must write an algorithm that runs in `O(n)` time and uses only constant
 * extra space.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 105`
 * - `1 <= nums[i] <= n`
 * - Each element in `nums` appears **once** or **twice**.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
    const duplicates = [];
    for (let num of nums) {
        const index = Math.abs(num) - 1;
        if (nums[index] < 0) {
            duplicates.push(index + 1);
        } else {
            nums[index] *= -1;
        }
    }
    return duplicates;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// Output: [2,3]
console.log(findDuplicates(nums));

const nums1 = [1, 1, 2];
// Output: [1]
console.log(findDuplicates(nums1));
