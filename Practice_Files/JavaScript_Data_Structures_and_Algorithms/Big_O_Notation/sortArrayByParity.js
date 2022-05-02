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

/* const sortArrayByParity = (nums) => {
    let oddIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num % 2 === 0) {
            [nums[i], nums[oddIdx]] = [nums[oddIdx], num];
            oddIdx++;
        }
    }
    return nums;

}; */

const sortArrayByParity = (nums) => {
    let t = 0,
        ans = [];

    for (let i = 0; i < nums.length; i++)
        if (nums[i] % 2 === 0) {
            ans[t++] = nums[i];
        }

    for (let i = 0; i < nums.length; i++)
        if (nums[i] % 2 === 1) {
            ans[t++] = nums[i];
        }

    return ans;
};

const nums = [0]; // Output: [0]
const nums1 = [3, 1, 2, 4]; // Output: [2,4,3,1]
console.log(sortArrayByParity(nums));
console.log(sortArrayByParity(nums1));
