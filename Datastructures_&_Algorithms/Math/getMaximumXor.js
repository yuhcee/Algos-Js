/**
 * **1829. Maximum XOR for Each Query**
 *
 * You are given a **sorted** array nums of `n` non-negative integers and an integer `maximumBit`. You want
 * to perform the following query `n` **times**:
 *
 * 1. Find a non-negative integer `k < 2maximumBit` such that `nums[0] XOR nums[1] XOR ... XOR nums[nums.
 * length-1]` XOR k is **maximized**. `k` is the answer to the `ith` query.
 *
 * 2. Remove the **last** element from the current array nums.
 *
 * Return an array `answer`, where `answer[i]` is the answer to the `ith` query.
 *
 * **Constraints:**
 *
 * - `nums.length == n`
 * - `1 <= n <= 105`
 * - `1 <= maximumBit <= 20`
 * - `0 <= nums[i] < 2maximumBit`
 * - `nums`​​​ is sorted in ascending order.
 *
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function (nums, maximumBit) {
    const maxVal = (1 << maximumBit) - 1; // Max value with 'maximumBit' bits set to 1
    let xor = 0;

    // Calculate XOR of all elements in nums
    for (const num of nums) {
        xor ^= num;
    }

    const result = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        // k is the complement of the current XOR, limited to maximumBit bits
        result.push(xor ^ maxVal);

        // Remove the last element's contribution from XOR for the next query
        xor ^= nums[i];
    }

    return result;
};

const nums = [0, 1, 1, 3],
    maximumBit = 2;
// Output: [0,3,2,3]
/* Explanation: The queries are answered as follows:
1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.
2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.
3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.
4th query: nums = [0], k = 3 since 0 XOR 3 = 3. */
console.log(getMaximumXor(nums, maximumBit));

const nums1 = [2, 3, 4, 7],
    maximumBit1 = 3;
// Output: [5,2,6,5]
/* Explanation: The queries are answered as follows:
1st query: nums = [2,3,4,7], k = 5 since 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7.
2nd query: nums = [2,3,4], k = 2 since 2 XOR 3 XOR 4 XOR 2 = 7.
3rd query: nums = [2,3], k = 6 since 2 XOR 3 XOR 6 = 7.
4th query: nums = [2], k = 5 since 2 XOR 5 = 7. */
console.log(getMaximumXor(nums1, maximumBit1));
