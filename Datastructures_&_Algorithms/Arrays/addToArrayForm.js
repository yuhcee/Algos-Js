/**
 * **989. Add to Array-Form of Integer**
 *
 * The **array-form** of an integer `num` is an array representing its
 * digits in left to right order.
 *
 * For example, for `num = 1321`, the array form is `[1,3,2,1]`.
 *
 * Given `num`, the **array-form** of an integer, and an integer `k`,
 * return *the **array-form** of the integer `num + k`*.
 *
 * **Constraints:**
 *
 * - `1 <= num.length <= 104`
 * - `0 <= num[i] <= 9`
 * - `num` does not contain any leading zeros except for the zero itself.
 * - `1 <= k <= 104`
 *
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    const singleDigit = num.join('');
    const singleNumber = BigInt(singleDigit);
    let sum = singleNumber + BigInt(k);
    let output = Array.from(String(sum), Number);
    return output;
};

var addToArrayForm = function (num, k) {
    // Convert k to an array
    const kArr = k.toString().split('').map(Number);

    // Initialize a carry variable to 0
    let carry = 0;

    // Initialize a result array to store the result of the addition
    const result = [];

    // Loop through the digits of num and k from right to left
    for (let i = num.length - 1, j = kArr.length - 1; i >= 0 || j >= 0; i--, j--) {
        // Get the current digit of num, or 0 if i is out of bounds
        const digit1 = i >= 0 ? num[i] : 0;

        // Get the current digit of k, or 0 if j is out of bounds
        const digit2 = j >= 0 ? kArr[j] : 0;

        // Add the digits together, along with the carry from the previous iteration
        const sum = digit1 + digit2 + carry;

        // Update the carry for the next iteration
        carry = Math.floor(sum / 10);

        // Add the least significant digit of the sum to the result array
        result.unshift(sum % 10);
    }

    // If there is still a carry after the loop, add it to the beginning of the result array
    if (carry > 0) {
        result.unshift(carry);
    }

    return result;
};

var addToArrayForm = function (num, k) {
    // Convert num to a number, add k to it, and convert the result to a string
    const sum = (BigInt(num.join('')) + BigInt(k)).toString();

    // Convert the string to an array of digits and return it
    return sum.split('').map(Number);
};
const num = [1, 2, 0, 0],
    k = 34;
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
console.log(addToArrayForm(num, k));

const num1 = [2, 7, 4],
    k1 = 181;
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
console.log(addToArrayForm(num1, k1));
