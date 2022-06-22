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
