/**
 * **Sum Zero**
 *
 * Write a function which accepts a sorted array of integers.
 * The function should find the **first** pair where the sum is **zero**.
 *
 * Return *an array that includes those values that sums to 0 or undefined if not found*.
 *
 * @param {*} arr
 */
const sumZero = (arr) => {
    // init multiple pointers
    let left = 0,
        right = arr.length - 1;

    while (left < right) {
        // sum the current values
        let sum = arr[left] + arr[right];

        // if sum is zero, return the values
        if (sum === 0) return [arr[left], arr[right]];

        // Decide the direction to move the pointer based on sum
        if (sum > 0) right--;
        else {
            left++;
        }
    }
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));
