/**
 * **334. Increasing Triplet Subsequence**
 *
 * Given an integer array `nums`, return *`true` if there exists a triple of indices `(i, j, k)`
 * such that `i < j < k` and `nums[i] < nums[j] < nums[k]`. If no such indices exists, return
 * `false`.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
    let firstNum = Number.MAX_VALUE;
    let secondNum = Number.MAX_VALUE;

    for (let num of nums) {
        if (num <= firstNum) {
            firstNum = num;
        } else if (num <= secondNum) {
            secondNum = num;
        } else {
            return true;
        }
    }

    return false;
};

const nums = [1, 2, 3, 4, 5];
// Output: true
// Explanation: Any triplet where i < j < k is valid.
console.log(increasingTriplet(nums));

const nums1 = [5, 4, 3, 2, 1];
// Output: false
// Explanation: No triplet exists.
console.log(increasingTriplet(nums1));

const nums2 = [2, 1, 5, 0, 4, 6];
// Output: true
/* Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6. */
console.log(increasingTriplet(nums2));
