/**
 * 
 * **1679. Max Number of K-Sum Pairs**
 * 
 * You are given an integer array `nums` and an integer `k`.
 * 
 * In one operation, you can pick two numbers from the array whose sum equals `k` and remove them from 
 * the array.
 * 
 * Return *the maximum number of operations you can perform on the array*.


 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = (nums, k) => {
    /* const map = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let complement = k - num;

        if (map.get(complement) > 0) {
            map.set(complement, map.get(complement) - 1);
            count++;
        } else {
            map.set(num, map.get(num) + 1 || 1);
        }
    }
    return count; */

    // Two pointers solution
};
const nums = [1, 2, 2, 1, 1, 1, 4],
    k = 3;
const nums1 = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
    k1 = 3;
console.log(maxOperations(nums, k));
console.log(maxOperations(nums1, k1));
