/**
 * **Sort Array By Parity**
 *
 * Given an integer array `nums`, move all the even integers at the beginning of the array followed
 * by all the odd integers.
 *
 * Return ***any array** that satisfies this condition*.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArrayByParity = (nums) => {
    let oddIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0) {
            [num, oddIdx] = [oddIdx, num];
            oddIdx++;
        }
    }

    return nums;
};
