/**
 * **1671. Minimum Number of Removals to Make Mountain Array**
 *
 * You may recall that an array `arr` is a **mountain array** if and
 * only if:
 *
 * - `arr.length >= 3`
 * - There exists some index `i` (**0-indexed**) with `0 < i < arr.
 * length - 1` such that:
 * - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
 * - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`
 *
 * Given an integer array `nums`​​​, return *the **minimum** number of
 * elements to remove to make nums​​​ a **mountain array***.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 1000`
 * - `1 <= nums[i] <= 109`
 * - It is guaranteed that you can make a mountain array out of `nums`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumMountainRemovals = function (nums) {
    const n = nums.length;
    const incr = Array(n).fill(1);
    const decr = Array(n).fill(1);

    // Calculate longest increasing subsequence ending at each index
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                incr[i] = Math.max(incr[i], incr[j] + 1);
            }
        }
    }

    // Calculate longest decreasing subsequence starting at each index
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                decr[i] = Math.max(decr[i], decr[j] + 1);
            }
        }
    }

    // Calculate the longest mountain array
    let longestMountainLength = 0;
    for (let i = 1; i < n - 1; i++) {
        if (incr[i] > 1 && decr[i] > 1) {
            longestMountainLength = Math.max(longestMountainLength, incr[i] + decr[i] - 1);
        }
    }

    // Minimum removals to get the mountain array
    return n - longestMountainLength;
};
