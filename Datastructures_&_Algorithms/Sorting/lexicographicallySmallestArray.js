/**
 * **2948. Make Lexicographically Smallest Array by Swapping Elements**
 *
 * You are given a **0-indexed** array of **positive** integers `nums` and
 * a **positive** integer `limit`.
 *
 * In one operation, you can choose any two indices `i` and `j` and swap
 * `nums[i]` and `nums[j]` if `|nums[i] - nums[j]| <= limit`.
 *
 * Return *the **lexicographically smallest array** that can be obtained by
 * performing the operation any number of times.*
 *
 * An array `a` is lexicographically smaller than an array `b` if in the
 * first position where `a` and `b` differ, array `a` has an element that
 * is less than the corresponding element in `b`. For example, the array `
 * [2,10,3]` is lexicographically smaller than the array `[10,2,3]` because
 * they differ at index `0` and `2 < 10`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 109`-
 * - `1 <= limit <= 109`
 *
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
const lexicographicallySmallestArray = function (nums, limit) {
    const n = nums.length;
    const indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a, b) => a[0] - b[0]); // Sort by value

    const result = new Array(n).fill(0);
    let start = 0;

    while (start < n) {
        let end = start + 1;
        while (end < n && indexedNums[end][0] - indexedNums[end - 1][0] <= limit) {
            end++;
        }

        // Sort indices within this segment
        const segmentIndices = indexedNums.slice(start, end).map((item) => item[1]);
        segmentIndices.sort((a, b) => a - b);

        // Place numbers in result array based on sorted indices
        for (let i = 0; i < segmentIndices.length; i++) {
            result[segmentIndices[i]] = indexedNums[start + i][0];
        }

        start = end; // Move to the next segment
    }

    return result;
};
