/**
 * **3254. Find the Power of K-Size Subarrays I**
 *
 * You are given an array of integers `nums` of length `n` and a *positive* integer `k`.
 *
 * The **power** of an array is defined as:
 *
 * - Its **maximum** element if all of its elements are **consecutive** and **sorted** in **ascending**
 * order.
 * - -1 otherwise.
 * You need to find the power of all subarrays of `nums` of size `k`.
 *
 * Return an integer array `results` of size `n - k + 1`, where `results[i]` is the power of `nums[i..(i + k
 * - 1)]`.
 *
 * **Constraints:**
 *
 * - `1 <= n == nums.length <= 500`
 * - `1 <= nums[i] <= 105`
 * - `1 <= k <= n`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const resultsArray = function (nums, k) {
    const n = nums.length;
    const results = [];

    for (let i = 0; i <= n - k; i++) {
        let isSortedAndConsecutive = true;

        // Check if the subarray is sorted and consecutive
        for (let j = i + 1; j < i + k; j++) {
            if (nums[j] !== nums[j - 1] + 1) {
                isSortedAndConsecutive = false;
                break;
            }
        }

        // Append the maximum if valid, otherwise -1
        if (isSortedAndConsecutive) {
            results.push(nums[i + k - 1]); // Maximum element in this case
        } else {
            results.push(-1);
        }
    }

    return results;
};

const nums = [1, 2, 3, 4, 3, 2, 5],
    k = 3;
// Output: [3,4,-1,-1,-1]
/* Explanation:
There are 5 subarrays of nums of size 3:
[1, 2, 3] with the maximum element 3.
[2, 3, 4] with the maximum element 4.
[3, 4, 3] whose elements are not consecutive.
[4, 3, 2] whose elements are not sorted.
[3, 2, 5] whose elements are not consecutive. */
console.log(resultsArray(nums, k));
