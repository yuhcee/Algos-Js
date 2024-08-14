/**
 * **719. Find K-th Smallest Pair Distance**
 *
 * The **distance of a pair** of integers `a` and `b` is defined as the
 * absolute difference between `a` and `b`.
 *
 * Given an integer array `nums` and an integer `k`, return the `kth`
 * smallest **distance among all the pairs** `nums[i]` and `nums[j]` where
 * `0 <= i < j < nums.length`.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `2 <= n <= 104`
 * - `0 <= nums[i] <= 106`
 * - `1 <= k <= n * (n - 1) / 2`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const smallestDistancePair = function (nums, k) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the binary search boundaries
    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    // Step 3: Binary search on distance
    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Count how many pairs have a distance less than or equal to mid
        let count = 0;
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            while (j < nums.length && nums[j] - nums[i] <= mid) {
                j++;
            }
            count += j - i - 1;
        }

        // Step 4: Adjust binary search bounds
        if (count >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    // The left pointer now points to the k-th smallest distance
    return left;
};

const nums = [1, 3, 1],
    k = 1;
// Output: 0
/* Explanation: Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0. */
console.log(smallestDistancePair(nums, k));
