/**
 * **2563. Count the Number of Fair Pairs**
 *
 * Given a **0-indexed** integer array `nums` of size `n` and two integers `lower` and `upper`, return *the
 * number of fair pairs*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `nums.length == n`
 * - `-109 <= nums[i] <= 109`
 * - `-109 <= lower <= upper <= 109`
 *
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
const countFairPairs = function (nums, lower, upper) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    let count = 0;
    let n = nums.length;

    // Helper function for binary search
    const binarySearch = (target, start, isLower) => {
        let left = start,
            right = n - 1,
            result = n;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (isLower ? nums[mid] >= target : nums[mid] > target) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    };

    // Step 2: Traverse through the array and find valid pairs
    for (let i = 0; i < n - 1; i++) {
        let minJ = binarySearch(lower - nums[i], i + 1, true);
        let maxJ = binarySearch(upper - nums[i], i + 1, false);
        count += maxJ - minJ;
    }

    return count;
};
