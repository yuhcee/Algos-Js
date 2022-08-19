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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-3, -2, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-1, 0, 1, 1, 1, 2, 4, 7, 7]));
console.log(countUniqueValues([]));

// FrequencyCounter
function areThereDuplicates() {
    const vals = Array.from(arguments);

    let collection = {};
    for (let el of vals) {
        collection[el] = collection[el] + 1 || 1;
    }
    for (let v of vals) {
        if (collection[v] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
