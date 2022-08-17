/**
 * **Product Of Array**
 *
 * Write a function called `productOfArray` which takes in an array of numbers and returns the
 * product of them all.
 */

const productOfArray = (arr) => {
    return arr.reduce((prev, curr) => prev * curr);
};

console.log(productOfArray([1, 2, 3]));

function productOfArrayRecursive() {
    const [arr] = arguments;

    if (arr.length === 0) return 1;

    return arr[0] * productOfArrayRecursive(arr.slice(1));
}

console.log(productOfArrayRecursive([1, 2, 3]));
console.log(productOfArrayRecursive([1, 2, 2, 3]));
