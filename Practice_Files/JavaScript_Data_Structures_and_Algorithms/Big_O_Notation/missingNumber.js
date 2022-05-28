/**
 *
 * **268. Missing Number**
 *
 * Given an array nums containing `n` distinct numbers in the range `[0, n]`,
 * return *the only number in the range that is missing from the array*.
 *
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
    nums.sort((a, b) => a - b);

    if (nums.at(-1) !== nums.length) return nums.length;

    if (nums[0] !== 0) return 0;

    for (let i = 1; i < nums.length; i++) {
        let expectedNum = nums[i - 1] + 1;
        if (nums[i] !== expectedNum) return expectedNum;
    }

    return -1;
};


