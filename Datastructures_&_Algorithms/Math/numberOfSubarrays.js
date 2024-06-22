/**
 * **1248. Count Number of Nice Subarrays**
 *
 * Given an array of integers `nums` and an integer `k`. A continuous subarray
 * is called nice if there are `k` odd numbers on it.
 *
 * Return *the number of **nice** sub-arrays*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 50000`
 * - `1 <= nums[i] <= 10^5`
 * - `1 <= k <= nums.length`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = function (nums, k) {
    // Step 1: Transform the nums array to a binary array where 1 represents odd and 0 represents even
    let binaryArray = nums.map((num) => num % 2);

    // Step 2: Initialize variables
    let prefixSum = 0;
    let prefixSumCount = { 0: 1 }; // To handle the case when a subarray itself has exactly k odd numbers
    let result = 0;

    // Step 3: Traverse the binary array and count the number of nice subarrays
    for (let num of binaryArray) {
        prefixSum += num; // Update the current prefix sum

        // If there is a prefix sum such that current_prefix_sum - k exists, it means
        // there is a subarray ending at current index which has exactly k odd numbers
        if (prefixSumCount[prefixSum - k] !== undefined) {
            result += prefixSumCount[prefixSum - k];
        }

        // Update the prefix sum count
        if (prefixSumCount[prefixSum] === undefined) {
            prefixSumCount[prefixSum] = 1;
        } else {
            prefixSumCount[prefixSum] += 1;
        }
    }

    return result;
};

const nums = [1, 1, 2, 1, 1],
    k = 3;
// Output: 2
// Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
console.log(numberOfSubarrays(nums, k));
