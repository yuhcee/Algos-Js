/**
 * **1512. Number of Good Pairs**
 *
 * Given an array of integers `nums`, return *the number of
 * **good pairs***.
 *
 * A pair `(i, j)` is called good if `nums[i] == nums[j]` and
 * `i` < `j`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 100`
 * - `1 <= nums[i] <= 100`
 *
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
    // Step 1: Create a map to store the count of each number
    const countMap = {};

    // Step 2: Iterate over the array and count the frequency of each number
    for (let num of nums) {
        countMap[num] = countMap[num] + 1 || 1;
    }

    // Step 3: Iterate over the counts and calculate the number of good pairs for each number
    let goodPairs = 0;
    for (let count of Object.values(countMap)) {
        if (count > 1) {
            goodPairs += (count * (count - 1)) / 2;
        }
    }

    // Step 4: Return the total number of good pairs
    return goodPairs;
};

const nums = [1, 2, 3, 1, 1, 3];
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
console.log(numIdenticalPairs(nums));

const nums1 = [1, 1, 1, 1];
// Output: 6
// Explanation: Each pair in the array are good.
console.log(numIdenticalPairs(nums1));

const nums2 = [1, 2, 3];
// Output: 0
console.log(numIdenticalPairs(nums2));
