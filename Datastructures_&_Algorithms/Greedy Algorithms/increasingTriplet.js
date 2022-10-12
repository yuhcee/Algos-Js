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
