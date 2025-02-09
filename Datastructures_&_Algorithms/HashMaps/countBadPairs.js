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
