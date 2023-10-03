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
    const countPairs = {};

    for (let num of nums) {
        countPairs[num] = 1 || countPairs[num]++;
    }

    let goodPairs = 0;

    for (let count of Object.values(countPairs)) {
        if (count > 1) {
            goodPairs += (count * (count - 1)) / 2;
        }
    }

    return goodPairs;
};
