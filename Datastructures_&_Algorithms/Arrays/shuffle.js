/**
 * **1470. Shuffle the Array**
 *
 * Given the array `nums` consisting of `2n` elements in the form `[x1,x2,...,xn,y1,
 * y2,...,yn]`.
 *
 * Return *the array in the form `[x1,y1,x2,y2,...,xn,yn]`*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 500`
 * - `nums.length == 2n`
 * - `1 <= nums[i] <= 10^3`
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    let res = [];

    // Loop through the elements of nums in pairs
    for (let i = 0; i < n; i++) {
        // Add the current element and the corresponding y element to the result array
        res.push(nums[i]);
        res.push(nums[i + n]);
    }

    return res;
};

const nums = [2, 5, 1, 3, 4, 7],
    n = 3;
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
console.log(shuffle(nums, n));

const nums1 = [1, 2, 3, 4, 4, 3, 2, 1],
    n1 = 4;
// Output: [1,4,2,3,3,2,4,1]
console.log(shuffle(nums1, n1));

const nums2 = [1, 1, 2, 2],
    n2 = 2;
// Output: [1,2,1,2]
console.log(shuffle(nums2, n2));
