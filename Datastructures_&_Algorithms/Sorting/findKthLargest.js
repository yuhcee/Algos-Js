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

    return nums.at(-k);
};

const nums = [3, 2, 1, 5, 6, 4],
    k = 2;
// Output: 5
console.log(findKthLargest(nums, k));

const nums1 = [3, 2, 3, 1, 2, 4, 5, 5, 6],
    k1 = 4;
// Output: 4;
console.log(findKthLargest(nums1, k1));

const nums2 = [3, 1, 2, 4, 5, 6, 9, 7],
    k2 = 4;
// Output: 5;
console.log(findKthLargest(nums2, k2));
