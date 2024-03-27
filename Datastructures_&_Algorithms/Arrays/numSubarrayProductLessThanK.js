/**
 * **713. Subarray Product Less Than K**
 * 
 * Given an array of integers `nums` and an integer `k`, return the number of 
 * contiguous subarrays where the product of all the elements in the subarray is 
 * strictly less than k.
 * 
 * **Constraints:**

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = (nums, k) => {
    let left = 0,
        result = 0,
        product = 1;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];

        while (product >= k && left <= right) {
            product /= nums[left];
            left++;
        }

        result += right - left + 1;
    }

    return result;
};

const nums = [10, 5, 2, 6],
    k = 100;
// Output: 8
/* Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k. */
console.log(numSubarrayProductLessThanK(nums, k));

const nums1 = [1, 2, 3],
    k1 = 0;
// Output: 0
console.log(numSubarrayProductLessThanK(nums1, k1));
