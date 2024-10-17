/**
 * **670. Maximum Swap**
 *
 * You are given an integer `num`. You can swap two digits at most once to
 * get the maximum valued number.
 *
 * Return **the maximum valued number you can get**.
 *
 * **Constraints:**
 *
 * - `0 <= num <= 108`
 *
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
    // Convert the number to a list of its digits
    let digits = num.toString().split('').map(Number);

    // Create a max index array to store the position of the largest number to the right
    let maxIdx = new Array(digits.length).fill(0);
    let maxPos = digits.length - 1;

    // Fill the maxIdx array with positions of the maximum digit to the right of each digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] > digits[maxPos]) {
            maxPos = i;
        }
        maxIdx[i] = maxPos;
    }

    // Find the first place where a swap would make a bigger number
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] < digits[maxIdx[i]]) {
            // Swap digits[i] with digits[maxIdx[i]]
            let temp = digits[i];
            digits[i] = digits[maxIdx[i]];
            digits[maxIdx[i]] = temp;
            break;
        }
    }

    // Convert the digits back to a number
    return parseInt(digits.join(''));
};
