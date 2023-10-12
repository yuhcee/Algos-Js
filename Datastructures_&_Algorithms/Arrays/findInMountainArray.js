/**
 * This is the MountainArray's API interface.
 * You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * **1095. Find in Mountain Array**
 *
 * *(This problem is an **interactive problem**.)*
 *
 * You may recall that an array arr is a mountain array if and only if:
 *
 * - `arr.length >= 3`
 * - There exists some `i` with `0 < i < arr.length - 1` such that:
 *      - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
 *      - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`
 *
 * Given a mountain array `mountainArr`, return the **minimum** `index` such that `mountainArr.get
 * (index) == target`. If such an `index` does not exist, return `-1`.
 *
 * **You cannot access the mountain array directly. You may only access
 * the array using a `MountainArray` interface:
 *
 * - `MountainArray.get(k)` returns the element of the array at index `k`
 * (0-indexed).
 * - `MountainArray.length()` returns the length of the array.
 *
 * Submissions making more than `100` calls to `MountainArray.get` will be
 * judged Wrong Answer. Also, any solutions that attempt to circumvent the
 * judge will result in disqualification.
 *
 * **Constraints:**
 *
 * - `3 <= mountain_arr.length() <= 104`
 * - `0 <= target <= 109`
 * - `0 <= mountain_arr.get(index) <= 109`
 *
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
const findInMountainArray = function (target, mountainArr) {
    const n = mountainArr.length();

    // Find the peak
    let left = 0,
        right = n - 1,
        peak = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            left = peak = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Binary search in the increasing part
    (left = 0), (right = peak);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) === target) return mid;
        if (mountainArr.get(mid) < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Binary search in the decreasing part
    (left = peak), (right = n - 1);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) === target) return mid;
        if (mountainArr.get(mid) > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
};

const array = [1, 2, 3, 4, 5, 3, 1],
    target = 3;
// Output: 2
// Explanation: 3 exists in the array, at index=2 and index=5. Return the minimum index, which is 2.
console.log(findInMountainArray(target, array));

const array1 = [0, 1, 2, 4, 2, 1],
    target1 = 3;
// Output: -1
// Explanation: 3 does not exist in the array, so we return -1.
console.log(findInMountainArray(target1, array1));
