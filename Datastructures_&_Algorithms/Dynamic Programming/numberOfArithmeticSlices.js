/**
 * **446. Arithmetic Slices II - Subsequence**
 *
 * Given an integer array `nums`, return *the number of all the **arithmetic subsequences** of `nums`*.
 *
 * A sequence of numbers is called arithmetic if it consists of **at least three elements** and if the difference
 * between any two consecutive elements is the same.
 *
 * - For example, `[1, 3, 5, 7, 9]`, `[7, 7, 7, 7]`, and `[3, -1, -5, -9]` are arithmetic sequences.
 * - For example, `[1, 1, 2, 5, 7]` is not an arithmetic sequence.
 * A **subsequence** of an array is a sequence that can be formed by removing some elements (possibly none) of the
 * array.
 *
 * For example, `[2,5,10]` is a subsequence of `[1,2,1,2,4,1,5,10]`.
 * The test cases are generated so that the answer fits in **32-bit** integer.
 *
 * **Constraints:**
 *
 * - `1  <= nums.length <= 1000`
 * - `-231 <= nums[i] <= 231 - 1`
 *
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    let cache = [];
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        cache[i] = {};
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let cacheOne = cache[i][diff] || 0;
            let cacheTwo = cache[j][diff] || 0;
            result += cacheTwo;
            cache[i][diff] = cacheOne + cacheTwo + 1;
        }
    }
    return result;
};

const nums = [2, 4, 6, 8, 10];
Output: 7;
/* Explanation: All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10] */
console.log(numberOfArithmeticSlices(nums));

const nums1 = [7, 7, 7, 7, 7];
// Output: 16
// Explanation: Any subsequence of this array is arithmetic.
console.log(numberOfArithmeticSlices(nums1));

const nums2 = [1, 2, 3, 4, 5];
// Output: 6
/* Explanation: All arithmetic subsequence slices are:
[1,2,3]
[1,2,3,4]
[2,3,4]
[1,3,5]
[1,2,4,5]
[1,3,4,5] */
console.log(numberOfArithmeticSlices(nums2));

const nums3 = [1, 3, 5, 7, 9];
// Output: 5
/* Explanation: All arithmetic subsequence slices are:
[1,3,5]
[3,5,7]
[1,5,9]
[1,3,7]
[1,3,5,7,9] */
console.log(numberOfArithmeticSlices(nums3));
