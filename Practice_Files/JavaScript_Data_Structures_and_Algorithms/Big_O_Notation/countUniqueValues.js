/**
 * **Count Unique Values**
 *
 * Implement a function which accepts a sorted array, and counts the uniques values in the array.
 * There can be negative numbers in the array but it will always be sorted.
 *
 * Return *the number of unique values in the array*.
 * @param {*} arr
 */
const countUniqueValues = (arr) => {
    let i = 0;
    if (arr.length === 0) return i;

    // implement multiple pointers
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
};

