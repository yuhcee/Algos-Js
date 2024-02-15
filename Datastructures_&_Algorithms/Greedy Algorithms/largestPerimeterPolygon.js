/**
 * **2971. Find Polygon With the Largest Perimeter**
 * 
 * 
 * You are given an array of **positive** integers `nums` of length `n`.
 * 
 * A **polygon** is a closed plane figure that has at least 3 sides. The 
 * **longest side** of a polygon is **smaller** than the sum of its other 
 * sides.
 * 
 * Conversely, if you have `k` (`k >= 3`) **positive** real numbers `a1`, 
 * `a2`, `a3`, ..., `ak` where ``a1` <= `a2` <= `a3` <= ... <= ak` **and** ``a1` + `a2` + `a3` + ... + ak-1 > ak,` then there **always** exists a polygon with `k` sides whose lengths are `a1`, `a2`, `a3`, ..., `ak`.

The **perimeter** of a polygon is the sum of lengths of its sides.

Return the largest possible **perimeter** of a **polygon** whose sides can be formed from `nums`, or -1 if it is not possible to create a polygon.

Constraints:

3 <= n <= 105
1 <= nums[i] <= 109
 
 * @param {number[]} nums
 * @return {number}
 */
const largestPerimeter = function (nums) {
    nums.sort((a, b) => a - b); // Sort the array in non-decreasing order
    let sum = nums.reduce((acc, val) => acc + val, 0); // Calculate the sum of all elements in nums
    let n = nums.length;

    for (let i = n - 1; i >= 2; i--) {
        sum -= nums[i]; // Exclude the current element from the sum
        if (sum > nums[i]) {
            // Check if the sum of the remaining elements is greater than the current element
            return sum + nums[i]; // If so, return the sum of the remaining elements plus the current element as the largest perimeter
        }
    }

    return -1; // If no valid triangle is found, return -1
};

const nums = [5, 5, 5];
// Output: 15
/* Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15. */
console.log(largestPerimeter(nums));

const nums1 = [1, 12, 1, 2, 5, 50, 3];
// Output: 12
/* Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
It can be shown that the largest possible perimeter is 12. */
console.log(largestPerimeter(nums1));

const nums2 = [5, 5, 50];
// Output: -1
/* Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5. */
console.log(largestPerimeter(nums2));
