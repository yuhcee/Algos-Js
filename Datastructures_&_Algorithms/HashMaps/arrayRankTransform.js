/**
 * **1331. Rank Transform of an Array**
 *
 * Given an array of integers `arr`, replace each element with its rank.
 *
 * The rank represents how large the element is. The rank has the following rules:
 *
 * - Rank is an integer starting from 1.
 * - The larger the element, the larger the rank. If two elements are equal, their rank must be
 * the same.
 * - Rank should be as small as possible.
 *
 * **Constraints:**
 *
 * - `0 <= arr.length <= 105`
 * - `-109 <= arr[i] <= 109`
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const arrayRankTransform = function (arr) {
    if (arr.length === 0) return 0;

    const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);

    const rankMap = new Map();

    sortedUnique.forEach((value, index) => {
        rankMap.set(value, index + 1);
    });

    return arr.map((value) => rankMap.get(value));
};

const arr = [40, 10, 20, 30];
// Output: [4,1,2,3]
// Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
console.log(arrayRankTransform(arr));
