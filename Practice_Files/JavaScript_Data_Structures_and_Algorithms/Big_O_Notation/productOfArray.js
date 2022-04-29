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
