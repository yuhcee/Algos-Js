/**
 * **2593. Find Score of an Array After Marking All Elements**
 *
 * You are given an array `nums` consisting of positive integers.
 *
 * Starting with `score = 0`, apply the following algorithm:
 *
 * - Choose the smallest integer of the array that is not marked. If there is a
 * tie, choose the one with the smallest index.
 * - Add the value of the chosen integer to `score`.
 * - Mark **the chosen element and its two adjacent elements if they exist.**
 * - Repeat until all the array elements are marked.
 *
 * Return *the score you get after applying the above algorithm.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const findScore = function (nums) {
    // Pair elements with their indices
    const indexedNums = nums.map((num, index) => [num, index]);

    // Sort by value, then by index
    indexedNums.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Set to track marked indices
    const marked = new Set();
    let score = 0;

    for (const [value, index] of indexedNums) {
        // If the current index is already marked, skip it
        if (marked.has(index)) continue;

        // Add value to the score
        score += value;

        // Mark the current index and adjacent indices
        marked.add(index);
        if (index > 0) marked.add(index - 1);
        if (index < nums.length - 1) marked.add(index + 1);
    }

    return score;
};

const nums = [2, 1, 3, 4, 5, 2];
// Output: 7
/* Explanation: We mark the elements as follows:
- 1 is the smallest unmarked element, so we mark it and its two adjacent elements: [2,1,3,4,5,2].
- 2 is the smallest unmarked element, so we mark it and its left adjacent element: [2,1,3,4,5,2].
- 4 is the only remaining unmarked element, so we mark it: [2,1,3,4,5,2].
Our score is 1 + 2 + 4 = 7. */
console.log(findScore(nums));
