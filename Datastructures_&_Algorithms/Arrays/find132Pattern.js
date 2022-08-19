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
    let smallest = -Infinity,
        arr = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < smallest) return true;

        while (arr.length > 0 && nums[i] > arr.at(-1)) {
            smallest = arr.pop();
        }
        arr.push(nums[i]);
    }

    return false;
};

const nums = [1, 2, 3, 4]; // Output: false
const nums1 = [3, 1, 4, 2]; // Output: true
const nums2 = [-1, 3, 2, 0]; // Output: true;

console.log(find132pattern(nums));
console.log(find132pattern(nums1));
console.log(find132pattern(nums2));
