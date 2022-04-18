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
}
