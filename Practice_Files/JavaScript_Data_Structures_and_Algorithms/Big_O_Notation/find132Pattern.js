/**
 *
 * Given an array of `n` integers `nums`, a **132 pattern** is a subsequence of three integers
 * `nums[i]`, `nums[j]` and `nums[k]` such that `i < j < k` and `nums[i] < nums[k] < nums[j]`.
 *
 * Return *`true` if there is a **132 pattern** in `nums`, otherwise, return `false`*.
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = (nums) => {
    let arr = [];

    let negative = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < negative) {
            return true;
        }

        while (arr.length > 0 && nums[i] > arr[arr.length - 1]) {
            negative = arr.pop();
        }

        arr.push(nums[i]);
    }

    return false;
};
