/**
 * **2134. Minimum Swaps to Group All 1's Together II**
 *
 * A **swap** is defined as taking two **distinct** positions in an array
 * and swapping the values in them.
 *
 * A **circular** array is defined as an array where we consider the
 * **first** element and the **last** element to be **adjacent**.
 *
 * Given a **binary circular** array `nums`, return *the minimum number of
 * swaps required to group all 1's present in the array together at **any
 * location***.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `nums[i]` is either `0` or `1`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const minSwaps = function (nums) {
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    const n = nums.length;

    if (totalOnes === 0) return 0; // If there are no 1s, no swaps are needed

    // Create a circular version of the array by concatenating it with itself
    const extendedNums = nums.concat(nums);

    let currentOnes = 0;
    let maxOnesInWindow = 0;

    // Initialize the first window
    for (let i = 0; i < totalOnes; i++) {
        currentOnes += extendedNums[i];
    }
    maxOnesInWindow = currentOnes;

    // Slide the window over the extended array
    for (let i = totalOnes; i < extendedNums.length; i++) {
        currentOnes += extendedNums[i] - extendedNums[i - totalOnes];
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnes);
    }

    // Minimum swaps needed to group all 1s together
    return totalOnes - maxOnesInWindow;
};
