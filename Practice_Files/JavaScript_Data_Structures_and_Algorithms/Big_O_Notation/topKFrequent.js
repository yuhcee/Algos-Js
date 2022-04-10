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

/* const topKFrequent = (nums, k) => {
    //  ! init map to count frequency
    const map = new Map();

    // iterate through nums and update frequency
    for (let num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    // convert the num and its frequency to array
    const result = Array.from(map);

    // sort array by frequency
    result.sort((a, b) => b[1] - a[1]);

    // slice array using k and return result
    return result.slice(0, k).map((val) => val[0]);
}; */

const topKFrequent = (nums, k) => {
    // init numCount object to store num frequency
    const numCount = {};

    // set num as key and count frequency
    for (let num of nums) {
        numCount[num] = numCount[num] + 1 || 1;
    }
};
/* const nums = [1, 1, 1, 2, 2, 3],
    k = 2; // Output: [1, 2];
const nums2 = [1],
    k2 = 1; // Output: [1]; */
console.log(topKFrequent(nums, k));
console.log(topKFrequent(nums2, k2));
