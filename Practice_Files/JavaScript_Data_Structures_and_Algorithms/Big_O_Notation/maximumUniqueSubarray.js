/**
 * **1695. Maximum Erasure Value**
 *
 * You are given an array of positive integers `nums` and want to erase a subarray
 * containing **unique elements**. The score you get by erasing the subarray is equal to
 * the **sum** of its elements.
 *
 * Return *the **maximum score** you can get by erasing **exactly one** subarray*.
 *
 * An array `b` is called to be a subarray of `a` if it forms a contiguous subsequence of `a`, that is, if it is equal to `a[l],a[l+1],...,a[r]` for some `(l,r)`.
 *
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = (nums) => {
    const windowElems = {};
    let windowSum = 0;
    let maxSum = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (!windowElems[nums[right]]) {
            windowElems[nums[right]] = 0;
        }
        windowElems[nums[right]] += 1;
        windowSum += nums[right];
    }
};
