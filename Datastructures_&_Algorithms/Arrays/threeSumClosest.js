/**
 * **16. 3Sum Closest**
 *
 * Given an integer array `nums` of length `n` and an integer `target`, find three integers in
 * `nums` such that the sum is closest to `target`.
 *
 * Return *the sum of the three integers*.
 *
 * You may assume that each input would have exactly one solution.
 *
 * **Constraints:**
 *
 * - `3 <= nums.length <= 1000`
 * - `-1000 <= nums[i] <= 1000`
 * - `-104 <= target <= 104`
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    nums.sort((x, y) => x - y);
    let closest = Infinity;

    //Iterate through until 2 from end because there will be two pointers after
    //this idx to find threesums.
    for (let i = 0; i < nums.length - 2; i++) {
        
    }
    return closest;
};
