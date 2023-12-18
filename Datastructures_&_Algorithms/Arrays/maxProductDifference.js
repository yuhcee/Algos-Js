/**
 * **1913. Maximum Product Difference Between Two Pairs**
 *
 * The **product difference** between two pairs `(a, b)` and `(c, d)` is
 * defined as `(a * b) - (c * d)`.
 *
 * For example, the product difference between `(5, 6)` and `(2, 7)` is
 * (`5 * 6) - (2 * 7) = 16`.
 *
 * Given an integer array `nums`, choose four **distinct** indices `w`,
 * `x`, `y`, and `z` such that the **product difference** between pairs `
 * (nums[w], nums[x])` and `(nums[y], nums[z])` is maximized.
 *
 * Return *the **maximum** such product difference*.
 *
 * **Constraints:**
 *
 * - `4 <= nums.length <= 104`
 * - `1 <= nums[i] <= 104`
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxProductDifference = function (nums) {
    // Initialize variables to store the two largest and two smallest elements
    let max1 = -Infinity,
        max2 = -Infinity;
    let min1 = Infinity,
        min2 = Infinity;

    // Iterate through the array to find the two largest and two smallest elements
    for (const num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    // Calculate the product difference
    return max1 * max2 - min1 * min2;
};

const nums = [5, 6, 2, 7, 4];
// Output: 34
/* Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34. */
console.log(maxProductDifference(nums));

const nums1 = [4, 2, 5, 9, 7, 4, 8];
// Output: 64
/* Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64. */
console.log(maxProductDifference(nums1));
