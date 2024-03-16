/**
 * **525. Contiguous Array**
 *
 * Given a binary array `nums`, return *the maximum length of a contiguous
 * subarray with an equal number of `0` and `1`*.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `nums[i]` is either `0` or `1`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
    const map = new Map();
    let maxLen = 0;
    let count = 0;

    map.set(0, -1); // Initialize with count 0 at index -1 to handle the case when the equal number of 0s and 1s starts from index 0

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1;
        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count));
        } else {
            map.set(count, i);
        }
    }

    return maxLen;
};
