/**
 * **2364. Count Number of Bad Pairs**
 *
 * You are given a **0-indexed** integer array `nums`. A pair of indices `
 * (i, j)` is a **bad pair** if `i < j` and `j - i != nums[j] - nums[i]`.
 *
 * Return the total number of **bad pairs** in nums.
 *
 * **Constraints:**
 *
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */
const countBadPairs = function (nums) {
    const n = nums.length;
    const transformed = nums.map((num, i) => num - i); // Transform the array
    const freq = new Map(); // To store frequency of each transformed value

    // Count frequency of each transformed value
    for (const val of transformed) {
        freq.set(val, (freq.get(val) || 0) + 1);
    }

    // Calculate total number of good pairs
    let goodPairs = 0;
    for (const count of freq.values()) {
        if (count >= 2) {
            goodPairs += (count * (count - 1)) / 2;
        }
    }

    // Total pairs is n * (n - 1) / 2
    const totalPairs = (n * (n - 1)) / 2;

    // Bad pairs = total pairs - good pairs
    return totalPairs - goodPairs;
};

const nums = [4, 1, 3, 3];
// Output: 5
/* Explanation: The pair (0, 1) is a bad pair since 1 - 0 != 1 - 4.
The pair (0, 2) is a bad pair since 2 - 0 != 3 - 4, 2 != -1.
The pair (0, 3) is a bad pair since 3 - 0 != 3 - 4, 3 != -1.
The pair (1, 2) is a bad pair since 2 - 1 != 3 - 1, 1 != 2.
The pair (2, 3) is a bad pair since 3 - 2 != 3 - 3, 1 != 0.
There are a total of 5 bad pairs, so we return 5. */
console.log(countBadPairs(nums));

const nums1 = [1, 2, 3, 4, 5];
// Output: 0
// Explanation: There are no bad pairs.
console.log(countBadPairs(nums1));
