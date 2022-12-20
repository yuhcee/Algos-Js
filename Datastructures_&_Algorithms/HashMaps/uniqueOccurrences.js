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

const arr = [1, 2, 2, 1, 1, 3];
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
console.log(uniqueOccurrences(arr));

const arr1 = [1, 2];
// Output: false
console.log(uniqueOccurrences(arr1));

const arr2 = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0];
// Output: true
console.log(uniqueOccurrences(arr2));
