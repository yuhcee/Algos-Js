/**
 * **1685. Sum of Absolute Differences in a Sorted Array**
 *
 * You are given an integer array `nums` sorted in **non-decreasing**
 * order.
 *
 * Build and return *an integer array result with the same length as
 * `nums` such that `result[i]` is equal to the **summation of absolute
 * differences** between `nums[i]` and all the other elements in the array.
 *
 * In other words, `result[i]` is equal to `sum(|nums[i]-nums[j]|)` where
 * `0 <= j < nums.length` and `j != i` (**0-indexed**).
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 105`
 * - `1 <= nums[i] <= nums[i + 1] <= 104`
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function (nums) {
    const n = nums.length;
    let result = new Array(n).fill(0);
    let sum = 0;

    // Calculate the initial sum of differences for the first element
    for (let i = 0; i < n; i++) {
        sum += nums[i] - nums[0];
    }
    result[0] = sum;

    // Update the sum of differences for each subsequent element
    for (let i = 1; i < n; i++) {
        // The change in the sum when moving from nums[i-1] to nums[i]
        let change = (nums[i] - nums[i - 1]) * i;
        sum = sum + change - (nums[i] - nums[i - 1]) * (n - i);
        result[i] = sum;
    }

    return result;
};

const nums = [2, 3, 5];
// Output: [4,3,5]
/* Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5. */
console.log(getSumAbsoluteDifferences(nums));

const nums1 = [1,4,6,8,10]
// Output: [24,15,13,15,21]
console.log(getSumAbsoluteDifferences(nums1));
