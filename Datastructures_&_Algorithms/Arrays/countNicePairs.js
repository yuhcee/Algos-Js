/**
 * **1814. Count Nice Pairs in an Array**
 *
 * You are given an array `nums` that consists of non-negative
 * integers. Let us define `rev(x)` as the reverse of the non-negative
 * integer `x`. For example, `rev(123) = 321`, and `rev(120) = 21`. A
 * pair of indices `(i, j)` is nice if it satisfies all of the
 * following conditions:
 *
 * - `0 <= i < j < nums.length`
 * - `nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])`
 *
 * Return *the number of nice pairs of indices*. Since that number can
 * be too large, return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = function (nums) {
    const MOD = 1e9 + 7;

    function rev(x) {
        return parseInt(x.toString().split('').reverse().join(''));
    }

    let countMap = new Map();
    for (let num of nums) {
        let diff = num - rev(num);
        countMap.set(diff, (countMap.get(diff) || 0) + 1);
    }

    let count = 0;
    for (let [_, value] of countMap) {
        count = (count + (value * (value - 1)) / 2) % MOD;
    }

    return count;
};

const nums = [42, 11, 1, 97];
// Output: 2
/* Explanation: The two pairs are:
 - (0,3) : 42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121.
 - (1,2) : 11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12. */
console.log(countNicePairs(nums));

const nums1 = [13, 10, 35, 24, 76];
// Output: 4
console.log(countNicePairs(nums1));
