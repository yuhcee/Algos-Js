/**
 * **2610. Convert an Array Into a 2D Array With Conditions**
 *
 * You are given an integer array `nums`. You need to create a 2D array
 * from `nums` satisfying the following conditions:
 *
 * - The 2D array should contain **only** the elements of the array
 * `nums`.
 * - Each row in the 2D array contains **distinct** integers.
 * - The number of rows in the 2D array should be **minimal**.
 *
 * Return *the resulting array*. If there are multiple answers, return
 * any of them.
 *
 * **Note** that the 2D array can have a different number of elements on
 * each row.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 200`
 * - `1 <= nums[i] <= nums.length`
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = function (nums) {
    // Step 1: Sort the input array in descending order
    nums.sort((a, b) => b - a);

    // Step 2: Create an empty 2D array
    const result = [];

    // Step 3: Iterate through the sorted array
    for (const num of nums) {
        // Find a row to insert the current number while ensuring distinct integers
        let rowFound = false;
        for (let row of result) {
            if (!row.includes(num)) {
                row.push(num);
                rowFound = true;
                break;
            }
        }

        // If no suitable row is found, create a new row
        if (!rowFound) {
            result.push([num]);
        }
    }

    // Step 4: Return the resulting 2D array
    return result;
};
