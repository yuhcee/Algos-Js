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
