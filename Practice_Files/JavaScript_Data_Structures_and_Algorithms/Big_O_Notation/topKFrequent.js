/**
 * **347. Top K Frequent Elements**
 *
 * Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return
 * the answer in *any order*.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
    //  ! init map to count frequency
    const map = new Map();

    // iterate through nums and update frequency
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    // convert the num and its frequency to array
    const result = Array.from(map);
};
