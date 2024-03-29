/**
 * **930. Binary Subarrays With Sum**
 *
 * Given a binary array `nums` and an integer `goal`, return *the number of
 * non-empty subarrays with a sum `goal`*.
 *
 * A **subarray** is a contiguous part of the array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 3 * 104`
 * - `nums[i]` is either `0` or `1`.
 * - `0 <= goal <= nums.length`
 *
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = (nums, goal) => {
    let count = 0;
    let prefixSum = 0;
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        if (prefixSumCount.has(prefixSum - goal)) {
            count += prefixSumCount.get(prefixSum - goal);
        }
        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }

    return count;
};

const nums = [1, 0, 1, 0, 1],
    goal = 2;
// Output: 4
/* Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1] */
console.log(numSubarraysWithSum(nums, goal));

const nums1 = [0, 0, 0, 0, 0],
    goal1 = 0;
// Output: 15
console.log(numSubarraysWithSum(nums1, goal1));
