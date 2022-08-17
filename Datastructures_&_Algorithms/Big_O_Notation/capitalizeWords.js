/**
 * Write a recursive function called **capitalizeWords**. Given an array of words, return a new array
 * containing each word capitalized.
 */

const capitalizedWords = (arr) => {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let res = capitalizedWords(arr.slice(0, -1));
    res.push(arr.slice(arr.length - 1)[0].toUpperCase());

    return res;
};

let words = ['i', 'am', 'learning', 'recursion'];
let words1 = ['i', 'am', 'growing', 'everyday'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(capitalizedWords(words1)); // ['I', 'AM', 'GROWING', 'EVERYDAY']
