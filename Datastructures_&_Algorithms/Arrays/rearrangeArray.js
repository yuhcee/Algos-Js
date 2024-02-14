/**
 * **2149. Rearrange Array Elements by Sign**
 *
 * You are given a **0-indexed** integer array `nums` of **even** length
 * consisting of an **equal** number of positive and negative integers.
 *
 * You should **rearrange** the elements of `nums` such that the modified
 * array follows the given conditions:
 *
 * 1. Every **consecutive pair** of integers have **opposite signs**.
 * 2. For all integers with the same sign, the **order** in which they were
 * present in `nums` is **preserved**.
 * 3. The rearranged array begins with a positive integer.
 *
 * Return *the modified array after rearranging the elements to satisfy the
 * aforementioned conditions*.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 2 * 105`
 * - `nums.length` is **even**
 * - `1 <= |nums[i]| <= 105`
 * - `nums` consists of equal number of positive and negative integers.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = (nums) => {
    const positives = [];
    const negatives = [];
    const result = [];

    for (const num of nums) {
        if (num > 0) {
            positives.push(num);
        } else {
            negatives.push(num);
        }
    }

    let pIndex = 0;
    let nIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(positives[pIndex]);
            pIndex++;
        } else {
            result.push(negatives[nIndex]);
            nIndex++;
        }
    }

    return result;
};
