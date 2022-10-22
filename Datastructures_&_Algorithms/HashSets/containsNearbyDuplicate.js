/**
 * **219. Contains Duplicate II**
 *
 * Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct
 * indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.
 *
 * **Constraints:**
 *
 * -  `1 <= nums.length <= 105`
 * - `-109 <= nums[i] <= 109`
 * - `0 <= k <= 105`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (set.has(num)) return true;
        set.add(num);

        if (set.size > k) {
            set.delete(nums[i - k]);
        }
    }

    return false;
};

const nums = [1, 2, 3, 1],
    k = 3;
// Output: true
console.log(containsNearbyDuplicate(nums, k));

const nums1 = [1, 0, 1, 1],
    k1 = 1;
// Output: true
console.log(containsNearbyDuplicate(nums1, k1));
