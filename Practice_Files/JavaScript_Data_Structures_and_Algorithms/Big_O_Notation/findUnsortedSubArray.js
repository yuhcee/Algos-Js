/**
 * **581. Shortest Unsorted Continuous Subarray**
 *
 * Given an integer array `nums`, you need to find one **continuous subarray** that if you only sort this
 * subarray in ascending order, then the whole array will be sorted in ascending order.
 *
 * Return *the shortest such subarray and output its length*.
 *
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
    // copy array and sort
    const sortedNumsCopy = [...nums].sort((a, b) => a - b);

    // start two pointers
    let start = nums.length - 1,
        end = 0,
        { max, min } = Math;

    // loop through array to compare values of sortedNums and nums
    for (let i = 0; i < nums.length; i++) {
        // if value of num and sorted num is not equal, we assign the index value to start and end pointer
        if (nums[i] !== sortedNumsCopy[i]) {
            start = min(start, i);
            end = max(end, i);
        }
    }

    return end <= start ? 0 : end - start + 1;
};

const nums = [2, 6, 4, 8, 10, 9, 15]; // Output: 5
const nums1 = [1, 2, 3, 4]; // Output: 0
const nums2 = [1]; // Output: 0
console.log(findUnsortedSubarray(nums));
console.log(findUnsortedSubarray(nums1));
console.log(findUnsortedSubarray(nums2));
