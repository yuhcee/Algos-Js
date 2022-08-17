/**
 * **sameFrequency - Frequency Counter**
 *
 * Write a function called **sameFrequency**. Given two positive integers, find out if the two numbers have the same frequency of digits.
 */
function sameFrequency() {
    // destructure parameters from arguments
    let [first, second] = arguments;

    // Stringify integers
    const firstNum = String(first),
        secondNum = String(second);

    // return false, if params are not same length
    if (firstNum.length !== secondNum.length) return false;

    // init a counts object
    const counts = {};

    // count occurence of first integer
    for (let d of firstNum) {
        counts[d] = counts[d] + 1 || 1;
    }

    // check if occurence is same in second integer
    for (let s of secondNum) {
        if (!counts[s]) return false;
    }

    return true;
}

console.log(sameFrequency(182, 821));
console.log(sameFrequency(148290, 849021));
console.log(sameFrequency(182, 201));
console.log(sameFrequency(182, 21));
