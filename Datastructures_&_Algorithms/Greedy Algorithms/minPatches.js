/**
 * **330. Patching Array**
 *
 * Given a sorted integer array `nums` and an integer `n`, add/patch elements to the array such that any
 * number in the range `[1, n]` inclusive can be formed by the sum of some elements in the array.
 *
 * Return *the minimum number of patches required*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 1000`
 * - `1 <= nums[i] <= 104`
 * - `nums` is sorted in **ascending order**.
 * - `1 <= n <= 231 - 1`
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function (nums, n) {
    let miss = 1;
    let i = 0;
    let patches = 0;

    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }

    return patches;
};

const nums = [1, 3],
    n = 6;
// Output: 1
/* Explanation:
Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
So we only need 1 patch. */
console.log(minPatches(nums, n));
