/**
 * **1752. Check if Array Is Sorted and Rotated**
 *
 * Given an array `nums`, return *`true` if the array was originally sorted
 * in non-decreasing order, then rotated some number of positions
 * (including zero).* Otherwise, return `false`.
 *
 * There may be **duplicates** in the original array.
 *
 * **Note**: An array A rotated by `x` positions results in an array `B` of
 * the same length such that `A[i] == B[(i+x) % A.length]`, where `%` is
 * the modulo operation.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
    }

    return count <= 1;
};

const nums = [3, 4, 5, 1, 2];
/* Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2]. */
console.log(check(nums));

const nums1 = [2, 1, 3, 4];
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
console.log(check(nums1));

const nums2 = [1, 2, 3];
/* Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums. */
console.log(check(nums2));
