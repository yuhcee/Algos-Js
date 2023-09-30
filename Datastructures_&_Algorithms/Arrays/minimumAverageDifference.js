/**
 * **2256. Minimum Average Difference**
 *
 * You are given a **0-indexed** integer array `nums` of length `n`.
 *
 * The **average difference** of the index `i` is the **absolute
 * difference** between the average of the first `i + 1` elements of
 * `nums` and the average of the last `n - i - 1` elements. Both
 * averages should be **rounded down** to the nearest integer.
 *
 * Return *the index with the **minimum average difference***. If there
 * are multiple such indices, return the **smallest** one.
 *
 * **Note:**
 *
 * - The **absolute difference** of two numbers is the absolute value of
 * their difference.
 * - The **average** of `n` elements is the **sum** of the `n` elements
 * divided (**integer division**) by `n`.
 * - The average of `0` elements is considered to be `0`.
 *
 * **Constraints:**
 * - `1 <= nums.length <= 105`
 * - `0 <= nums[i] <= 105`
 *
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = function (nums) {
    const len = nums.length;
    let leftSum = 0,
        min = Infinity,
        result = 0;
    let rightSum = nums.reduce((acc, val) => acc + val);

    for (let i = 0; i < len; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];

        const leftAvg = Math.floor(leftSum / (i + 1));
        const rightAvg = Math.floor(rightSum / (len - i - 1) || 0);

        const diff = Math.abs(leftAvg - rightAvg);
        if (diff < min) {
            min = diff;
            result = i;
        }
    }

    return result;
};
