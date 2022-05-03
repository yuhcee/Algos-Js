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
    for(let i = 0; i < nums.length; i++){
        
    }
};
