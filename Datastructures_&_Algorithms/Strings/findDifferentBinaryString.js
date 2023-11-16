/**
 * **1980. Find Unique Binary String**
 *
 * Given an array of strings `nums` containing `n` **unique** binary
 * strings each of length n, return *a binary string of length n that
 * **does not appear** in `nums`. If there are multiple answers, you
 * may return **any** of them*.
 *
 * **Constraints:**
 *
 * - `n == nums.length`
 * - `1 <= n <= 16`
 * - `nums[i].length == n`
 * - `nums[i]` is either `'0'` or `'1'`.
 * - All the strings of `nums` are unique.
 *
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = function (nums) {
    let result = '';

    for (let i = 0; i < nums.length; i++) {
        // Flip the ith character of the ith string (0 to 1 or 1 to 0)
        result += nums[i][i] === '0' ? '1' : '0';
    }

    return result;
};

const nums = ['01', '10'];
// Output: "11"
// Explanation: "11" does not appear in nums. "00" would also be correct.
console.log(findDifferentBinaryString(nums));
