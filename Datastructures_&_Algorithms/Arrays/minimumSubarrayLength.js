/**
 * **3097. Shortest Subarray With OR at Least K II**
 *
 * You are given an array `nums` of **non-negative** integers and an integer `k`.
 *
 * An array is called **special** if the bitwise `OR` of all of its elements is **at least** `k`.
 *
 * Return *the length of the **shortest special non-empty subarray** of `nums`, or return `-1` if no special
 * subarray exists.*
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 2 * 105`
 * - `0 <= nums[i] <= 109`
 * - `0 <= k <= 109`
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumSubarrayLength = (nums, k) => {
    const updateOr = (ors, num, count) => {
        for (let i = 0; i < 30; i++) {
            if ((num >> i) & 1 && ++count[i] === 1) {
                ors |= 1 << i;
            }
        }
        return ors;
    };

    const undoOr = (ors, num, count) => {
        for (let i = 0; i < 30; i++) {
            if ((num >> i) & 1 && --count[i] === 0) {
                ors ^= 1 << i;
            }
        }
        return ors;
    };

    let ans = Infinity;
    let ors = 0;
    let count = new Array(30).fill(0);
    let left = 0;

    // Using Array.prototype.reduce() for functional iteration over the nums array
    nums.forEach((num, right) => {
        ors = updateOr(ors, num, count);

        while (ors >= k && left <= right) {
            ans = Math.min(ans, right - left + 1);
            ors = undoOr(ors, nums[left], count);
            left++;
        }
    });

    return ans === Infinity ? -1 : ans;
};

const nums = [1, 2, 3],
    k = 2;
// Output: 1
// Explanation: The subarray [3] has OR value of 3. Hence, we return 1.
console.log(minimumSubarrayLength(nums, k));

const nums1 = [2, 1, 8],
    k1 = 10;
// Output: 3
// Explanation: The subarray [2,1,8] has OR value of 11. Hence, we return 3.
console.log(minimumSubarrayLength(nums1, k1));

const nums2 = [1, 2],
    k2 = 0;
// Output: 1
// Explanation: The subarray [1] has OR value of 1. Hence, we return 1.
console.log(minimumSubarrayLength(nums2, k2));
