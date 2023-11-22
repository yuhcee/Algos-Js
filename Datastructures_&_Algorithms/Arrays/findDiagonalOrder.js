/**
 * **1424. Diagonal Traverse II**
 *
 * Given a 2D integer array `nums`, return *all elements of `nums` in
 * diagonal order as shown in the below images.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 105`
 * - `1 <= nums[i].length <= 105`
 * - `1 <= sum(nums[i].length) <= 105`
 * - `1 <= nums[i][j] <= 105`
 *
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = function (nums) {
    let map = new Map();

    // Populate the map with diagonal elements
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            if (!map.has(i + j)) {
                map.set(i + j, []);
            }
            map.get(i + j).push(nums[i][j]);
        }
    }

    let result = [];
    // Traverse the map and append elements to result
    for (let [_, values] of map) {
        // Append in reverse order as per the problem's requirement
        for (let i = values.length - 1; i >= 0; i--) {
            result.push(values[i]);
        }
    }

    return result;
};

const nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// Output: [1,4,2,7,5,3,8,6,9]
console.log(findDiagonalOrder(nums));

const nums1 = [[1, 2, 3, 4, 5], [6, 7], [8], [9, 10, 11], [12, 13, 14, 15, 16]];
// Output: [1,6,2,8,7,3,9,4,12,10,5,13,11,14,15,16]
console.log(findDiagonalOrder(nums1));
