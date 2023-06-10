/**
 * **1802. Maximum Value at a Given Index in a Bounded Array**
 *
 * You are given three positive integers: `n`, `index`, and `maxSum`. You want to construct
 * an array `nums` (**0-indexed**) that satisfies the following conditions:
 *
 * - `nums.length == n`
 * - `nums[i]` is a **positive** integer where `0 <= i < n`.
 * - `abs(nums[i] - nums[i+1]) <= 1` where `0 <= i < n-1`.
 * - The sum of all the elements of `nums` does not exceed `maxSum`.
 * - `nums[index]` is maximized.
 * Return *`nums[index]` of the constructed array*.
 *
 * Note that `abs(x)` equals `x` if `x >= 0`, and `-x` otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= n <= maxSum <= 109`
 * - `0 <= index < n`
 *
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function (n, index, maxSum) {
    // Initialize the minimum and maximum possible values
    let min = Math.floor(maxSum / n);
    let max = maxSum;

    // Helper function to calculate the sum given a number and length
    const findSum = (num, len) => {
        if (len < num) {
            // If the length is smaller than the number, calculate the sum using arithmetic series
            return (len * (num + num - len + 1)) / 2;
        }
        // Calculate the sum using arithmetic series for the first 'num' elements
        // and add the remaining 'len - num' elements
        return (num * (num + 1)) / 2 + (len - num);
    };

    // Helper function to check if a given number is within the constraints
    const isWithin = (num) => {
        // Calculate the left sum for the given number
        const leftSum = findSum(num, index + 1);
        // Calculate the right sum for the given number
        const rightSum = findSum(num, n - index);
        // Check if the total sum is within the maximum sum
        return maxSum >= leftSum + rightSum - num;
    };

    // Perform binary search to find the maximum value that satisfies the constraints
    while (min <= max) {
        const mid = (min + max) >> 1;
        // If the current mid value is within the constraints, update the minimum value
        // Otherwise, update the maximum value
        isWithin(mid) ? (min = mid + 1) : (max = mid - 1);
    }

    // Return the maximum value
    return max;
};

const n = 4,
    index = 2,
    maxSum = 6;
// Output: 2
/* Explanation: nums = [1,2,2,1] is one array that satisfies all the conditions.
There are no arrays that satisfy all the conditions and have nums[2] == 3, so 2 is the maximum nums[2]. */
console.log(maxValue(n, index, maxSum));
