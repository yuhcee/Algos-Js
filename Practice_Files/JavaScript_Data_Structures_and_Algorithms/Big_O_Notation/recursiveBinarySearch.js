/**
 * **Recursive Binary Search**
 *
 * Write a function that takes a **sorted** `array` and a `target`, and verify if `target` exist in the
 * `array`.
 *
 * Return *true if target exists, otherwise false*.
 * @param {*} list
 * @param {*} target
 */
const recursiveBinarySearch = (list, target) => {
    // return false if arr is empty
    if (list.length === 0) return false;
    // get the middle point of the array
    let midPoint = Math.floor(list.length / 2);
    // if value at midpoint is equal to target, return true
    if (list[midPoint] === target) return true;
    // if value at midpoint is less than target, slice from midpoint + 1 to end
    if (list[midPoint] < target) {
        return recursiveBinarySearch(list.slice(midPoint + 1), target);
    }
    // else value at midpoint is greater than target, slice from begining to midpoint
    else {
        return recursiveBinarySearch(list.slice(0, midPoint), target);
    }
};

console.log(recursiveBinarySearch([-3, -2, -1, 0, 1, 2, 3], 6)); // false
console.log(recursiveBinarySearch([-3, -2, -1, 0, 1, 2, 3], -1)); // true
