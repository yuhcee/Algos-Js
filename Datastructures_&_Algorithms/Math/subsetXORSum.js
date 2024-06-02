/**
 * **1863. Sum of All Subset XOR Totals**
 *
 * The **XOR total** of an array is defined as the bitwise `XOR` of **all its
 * elements**, or `0` if the array is **empty**.
 *
 * - For example, the **XOR total** of the array `[2,5,6]` is `2 XOR 5 XOR 6 =
 * 1`.
 *
 * Given an array `nums`, return the **sum** of all **XOR totals** for every
 * **subset** of `nums`.
 *
 * **Note**: Subsets with the **same** elements should be counted **multiple**
 * times.
 *
 * An array `a` is a **subset** of an array `b` if `a` can be obtained from `b`
 * by deleting some (possibly zero) elements of `b`.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 12`
 * - `1 <= nums[i] <= 20`
 *
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
    let totalSum = 0;

    function backtrack(index, currentXOR) {
        // Add the current XOR to the total sum
        totalSum += currentXOR;

        // Explore further elements to form subsets
        for (let i = index; i < nums.length; i++) {
            // Include nums[i] in the current subset XOR
            backtrack(i + 1, currentXOR ^ nums[i]);
        }
    }

    // Start backtracking from the first index with initial XOR value 0
    backtrack(0, 0);

    return totalSum;
};

const nums = [1, 3];
// Output: 6
/* Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6 */
console.log(subsetXORSum(nums));
