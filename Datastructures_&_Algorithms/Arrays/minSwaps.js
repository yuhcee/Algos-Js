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

const nums = [0, 1, 0, 1, 1, 0, 0];
// Output: 1;
/* Explanation: Here are a few of the ways to group all the 1's together:
[0,0,1,1,1,0,0] using 1 swap.
[0,1,1,1,0,0,0] using 1 swap.
[1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
There is no way to group all 1's together with 0 swaps.
Thus, the minimum number of swaps required is 1. */
console.log(minSwaps(nums));

const nums1 = [0, 1, 1, 1, 0, 0, 1, 1, 0];
// Output: 2
/* Explanation: Here are a few of the ways to group all the 1's together:
[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
[1,1,1,1,1,0,0,0,0] using 2 swaps.
There is no way to group all 1's together with 0 or 1 swaps.
Thus, the minimum number of swaps required is 2. */
console.log(minSwaps(nums1));
