/**
 * **2369. Check if There is a Valid Partition For The Array**
 *
 * You are given a **0-indexed** integer array `nums`. You have to partition the
 * array into one or more **contiguous** subarrays.
 *
 * We call a partition of the array **valid** if each of the obtained subarrays
 * satisfies **one** of the following conditions:
 *
 * 1. The subarray consists of **exactly** `2` equal elements. For example, the
 * subarray `[2,2]` is good.
 * 2. The subarray consists of **exactly** `3` equal elements. For example, the
 * subarray `[4,4,4]` is good.
 * 3. The subarray consists of **exactly** `3` consecutive increasing elements, that
 * is, the difference between adjacent elements is `1`. For example, the subarray `
 * [3,4,5]` is good, but the subarray `[1,3,5]` is not.
 *
 * Return *`true` if the array has **at least** one valid partition. Otherwise,
 * return `false`.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const validPartition = function (nums) {
    const memo = {};
    const n = nums.length;

    const explore = (i) => {
        if (i === n) return true;
        if (memo[i] !== undefined) return memo[i];

        if (i + 1 < n && nums[i] === nums[i + 1]) {
            if (explore(i + 2)) return true;
        }

        if (i + 2 < n && nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
            if (explore(i + 3)) return true;
        }

        if (i + 2 < n && 1 + nums[i] === nums[i + 1] && 1 + nums[i + 1] === nums[i + 2]) {
            if (explore(i + 3)) return true;
        }

        return (memo[i] = false);
    };
    return explore(0);
};

const nums = [4,4,4,5,6]
// Output: true
// Explanation: The array can be partitioned into the subarrays [4,4] and [4,5,6].
// This partition is valid, so we return true.
// Test cases
console.log(validPartition(nums)); // Should return true
