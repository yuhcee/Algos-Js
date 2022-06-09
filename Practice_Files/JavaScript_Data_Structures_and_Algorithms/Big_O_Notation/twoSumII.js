/**
 * **167. Two Sum II - Input Array Is Sorted**
 *
 * Given a **1-indexed** array of integers `numbers` that is already ***sorted in
 * non-decreasing order***, find two numbers such that they add up to a specific
 * `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]`
 * where `1 <= index1 < index2 <= numbers.length`.
 *
 * Return *the indices of the two numbers, `index1` and `index2`, **added by one** as
 * an integer array `[index1, index2]` of length 2*.
 *
 * The tests are generated such that there is **exactly one solution**. You **may not**
 * use the same element twice.
 *
 * Your solution must use only constant extra space.
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// =============== TWO-POINTERS SOLUTION =================

const twoSum = (numbers, target) => {
    // initialize two pointers, one at a start index, and the other at end index
    let start = 0,
        end = numbers.length;

    // loop, while the pointers have not met in the middle
    while (start < end) {
        // calculate the small number at start index with the larger number at the end index as currentSum
        let currentSum = numbers[start] + numbers[end];
        // if the currentSum is equal to target
        if (currentSum === target) {
            // add 1 to their current respective indices and return the result as array
            return [start + 1, end + 1];
        }
    }
};
