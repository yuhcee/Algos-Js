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

const nums = [3, 1, 4, 2],
    p = 6;
// Output: 1
// Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.
console.log(minSubarray(nums, p));

const nums1 = [6, 3, 5, 2],
    p1 = 9;
// Output: 2
// Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.
console.log(minSubarray(nums1, p1));

const nums2 = [1, 2, 3],
    p2 = 3;
// Output: 0
// Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
console.log(minSubarray(nums2, p2));
