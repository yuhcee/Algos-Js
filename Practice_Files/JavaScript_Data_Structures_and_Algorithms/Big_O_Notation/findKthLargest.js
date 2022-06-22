/**
 * **215. Kth Largest Element in an Array**
 *
 * Given an integer array `nums` and an integer `k`, return *the `kth` largest element in the array*.
 *
 * Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
    nums.sort((a, b) => a - b);

};
