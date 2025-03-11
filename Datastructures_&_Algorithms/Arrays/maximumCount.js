/**
 * **2529. Maximum Count of Positive Integer and Negative Integer**
 *
 * Given an array `nums` sorted in **non-decreasing** order, return the maximum between the number of positive
 * integers and the number of negative integers.
 *
 * - In other words, if the number of positive integers in `nums` is `pos` and the number of negative integers is
 * `neg`, then return the maximum of `pos` and `neg`.
 *
 * **Note** that `0` is neither positive nor negative.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 2000`
 * - `-2000 <= nums[i] <= 2000`
 * - `nums` is sorted in a **non-decreasing** order.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumCount = function (nums) {
    let negativeCount = 0,
        positiveCount = 0;
    for (let num of nums) {
        if (num < 0) negativeCount++;
        else if (num > 0) positiveCount++;
    }
    return Math.max(negativeCount, positiveCount);
};
