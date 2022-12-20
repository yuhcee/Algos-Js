/**
 * **1207. Unique Number of Occurrences**
 *
 * Given an array of integers `arr`, return `true` if the number of occurrences of each value in the array is
 * **unique** or `false` otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 1000`
 * - `-1000 <= arr[i] <= 1000`
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
    const counter = {};

    for (let num of arr) {
        counter[num] = counter[num] + 1 || 1;
    }

    let arry = Object.values(counter);
    let resultToReturn = false;

    resultToReturn = arry.some((num, index) => arry.indexOf(num) !== index);

    return resultToReturn ? false : true;
};
