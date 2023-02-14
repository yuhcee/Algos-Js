/**
 * **67. Add Binary**
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * **Constraints:**
 *
 * - `1 <= a.length, b.length <= 104`
 * - `a` and `b` consist only of `'0'` or `'1'` characters.
 * - Each string does not contain leading zeros except for the zero itself.
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let result = ''; // initialize an empty string to store the result
    let carry = 0; // initialize a carry value to 0

    // iterate from the end of the strings to the beginning
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        // get the current binary digits at index i and j, and convert them to numbers
        const numA = i >= 0 ? parseInt(a[i]) : 0;
        const numB = j >= 0 ? parseInt(b[j]) : 0;

        // add the binary digits and the carry value
        const sum = numA + numB + carry;

        // if the sum is 2 or 3, set the carry to 1
        if (sum >= 2) {
            carry = 1;
        } else {
            carry = 0;
        }

        // append the sum modulo 2 to the result string
        result = (sum % 2) + result;
    }

    // if there is still a carry, append it to the result string
    if (carry > 0) {
        result = carry + result;
    }

    return result; // return the binary sum as a string
};
