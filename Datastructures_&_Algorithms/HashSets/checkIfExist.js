/**
 * **1346. Check If N and Its Double Exist**
 *
 * Given an array `arr` of integers, check if there exist two indices `i` and
 * `j` such that :
 *
 * - `i != j`
 * - `0 <= i, j < arr.length`
 * - `arr[i] == 2 * arr[j]`
 *
 * **Constraints:**
 *
 * - `2 <= arr.length <= 500`
 * - `-103 <= arr[i] <= 103`
 *
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
    const seen = new Set();

    for (const num of arr) {
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        seen.add(num);
    }

    return false;
};

const arr = [10, 2, 5, 3];
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
console.log(checkIfExist(arr));

const arr1 = [3, 1, 7, 11];
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
console.log(checkIfExist(arr1));
