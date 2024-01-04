/**
 * **2870. Minimum Number of Operations to Make Array Empty**
 *
 * You are given a **0-indexed** array `nums` consisting of positive
 * integers.
 *
 * There are two types of operations that you can apply on the array
 * **any** number of times:
 *
 * - Choose **two** elements with **equal** values and **delete** them
 * from the array.
 * - Choose **three** elements with **equal** values and **delete** them
 * from the array.
 *
 * Return *the **minimum** number of operations required to make the
 * array empty, or `-1` if it is not possible.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * - `1 <= nums[i] <= 106`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = function (nums) {
    // Create a map to store the frequency of each element in the array
    const frequencyMap = new Map();

    // Count the frequency of each element
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let operations = 0;

    // Iterate through the frequency map
    for (let [key, value] of frequencyMap.entries()) {
        let count = value;

        // If an element appears only once, it's not possible to perform operations
        if (count === 1) {
            return -1;
        }

        // Calculate the number of operations needed for the current element
        operations += Math.floor(count / 3);

        // If there are remaining elements after forming triples, increment the count
        if (count % 3 !== 0) {
            operations++;
        }
    }

    return operations;
};

const nums = [2, 3, 3, 2, 2, 4, 2, 3, 4];
// Output: 4
/* Explanation: We can apply the following operations to make the array empty:
- Apply the first operation on the elements at indices 0 and 3. The resulting array is nums = [3,3,2,4,2,3,4].
- Apply the first operation on the elements at indices 2 and 4. The resulting array is nums = [3,3,4,3,4].
- Apply the second operation on the elements at indices 0, 1, and 3. The resulting array is nums = [4,4].
- Apply the first operation on the elements at indices 0 and 1. The resulting array is nums = [].
It can be shown that we cannot make the array empty in less than 4 operations. */
console.log(minOperations(nums));
