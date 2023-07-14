/**
 * **1218. Longest Arithmetic Subsequence of Given Difference**
 *
 * Given an integer array `arr` and an integer `difference`, return the length of the longest
 * subsequence in `arr` which is an arithmetic sequence such that the difference between adjacent
 * elements in the subsequence equals `difference`.
 *
 * A **subsequence** is a sequence that can be derived from `arr` by deleting some or no elements
 * without changing the order of the remaining elements.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 105`
 * - `-104 <= arr[i], difference <= 104`
 *
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function (arr, difference) {
    const dp = new Map(); // Hashmap to store the length of longest subsequence ending at each element
    let maxLength = 1; // Maximum length of arithmetic subsequence

    for (const num of arr) {
        // Check if there is a previous element with a difference of `difference`
        if (dp.has(num - difference)) {
            dp.set(num, dp.get(num - difference) + 1); // Update the length of subsequence for current element
        } else {
            dp.set(num, 1); // Initialize the length of subsequence for current element as 1
        }

        maxLength = Math.max(maxLength, dp.get(num)); // Update the maximum length if needed
    }

    return maxLength;
};

const arr = [1, 2, 3, 4],
    difference = 1;
// Output: 4
// Explanation: The longest arithmetic subsequence is [1,2,3,4].
console.log(longestSubsequence(arr, difference));

const arr1 = [1, 3, 5, 7],
    difference1 = 1;
// Output: 1
// Explanation: The longest arithmetic subsequence is any single element.
console.log(longestSubsequence(arr1, difference1));

const arr2 = [1, 5, 7, 8, 5, 3, 4, 2, 1],
    difference2 = -2;
// Output: 4
// Explanation: The longest arithmetic subsequence is [7,5,3,1].
console.log(longestSubsequence(arr2, difference2));
