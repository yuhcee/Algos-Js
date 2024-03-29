/**
 * **1287. Element Appearing More Than 25% In Sorted Array**
 *
 * Given an integer array **sorted** in non-decreasing order, there is
 * exactly one integer in the array that occurs more than 25% of the time,
 * return that integer.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 104`
 * - `0 <= arr[i] <= 105`
 *
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = function (arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const targetFrequency = arr.length / 4; // 25% of the array length

    let currentElement = arr[0];
    let currentFrequency = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === currentElement) {
            currentFrequency++;
            if (currentFrequency > targetFrequency) {
                return currentElement;
            }
        } else {
            currentElement = arr[i];
            currentFrequency = 1;
        }
    }

    return -1; // Not found (shouldn't reach here if the input is valid)
};

const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
// Output: 6
console.log(findSpecialInteger(arr));

const arr1 = [1, 1];
// Output: 1
console.log(findSpecialInteger(arr1));

const arr2 = [1];
// Output: 1
console.log(findSpecialInteger(arr2));

