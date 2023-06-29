/**
 * **2348. Number of Zero-Filled Subarrays**
 *
 * Given an integer array `nums`, return *the number of **subarrays** filled with `0`*.
 *
 * A **subarray** is a contiguous non-empty sequence of elements within an array.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `-109 <= nums[i] <= 109`
 *
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function (nums) {
    // Helper function to calculate the sum of numbers from 1 to n
    function getOutcome(n) {
        return (n * (n + 1)) / 2;
    }

    let result = 0;
    let count = 0;

    // Iterate through the elements of the array
    for (const val of nums.values()) {
        if (val === 0) {
            // If the current element is 0, increment the count
            count++;
        } else {
            // If the current element is not 0, calculate the outcome (number of subarrays filled with 0) for the previous count
            const outcome = getOutcome(count);
            result += outcome;
            count = 0;
        }
    }

    // Calculate the outcome for the remaining count (if any)
    if (count) {
        const outcome = getOutcome(count);
        result += outcome;
        count = 0;
    }

    return result;
};

const nums = [1, 3, 0, 0, 2, 0, 0, 4];
// Output: 6
/* Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6. */
console.log(zeroFilledSubarray(nums));

const nums1 = [0, 0, 0, 2, 0, 0];
// Output: 9
/* Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9. */
console.log(zeroFilledSubarray(nums1));
