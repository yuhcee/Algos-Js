/**
 * **1590. Make Sum Divisible by P**
 *
 * Given an array of positive integers `nums`, remove the **smallest** subarray (possibly
 * **empty**) such that the **sum** of the remaining elements is divisible by `p`. It is **not**
 * allowed to remove the whole array.
 *
 * Return *the length of the smallest subarray that you need to remove, or `-1` if it's
 * impossible*.
 *
 * A **subarray** is defined as a contiguous block of elements in the array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`
 * - `1 <= p <= 109`
 *
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
const minSubarray = function (nums, p) {
    // Step 1: Calculate the total sum of the array and its remainder mod p
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    const remainder = totalSum % p;

    if (remainder === 0) return 0; // If sum is already divisible by p, no need to remove any subarray

    // Step 2: Use a hashmap to track prefix sum modulo p
    const prefixMap = new Map();
    prefixMap.set(0, -1); // To handle edge cases
    let prefixSum = 0;
    let minLen = nums.length;

    for (let i = 0; i < nums.length; i++) {
        // Update prefix sum
        prefixSum = (prefixSum + nums[i]) % p;

        // Find the required prefix that when subtracted gives remainder
        const target = (prefixSum - remainder + p) % p;

        if (prefixMap.has(target)) {
            minLen = Math.min(minLen, i - prefixMap.get(target));
        }

        // Store the current prefix sum modulo p
        prefixMap.set(prefixSum, i);
    }

    // If no valid subarray was found, return -1
    return minLen === nums.length ? -1 : minLen;
};
