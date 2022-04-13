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

};
