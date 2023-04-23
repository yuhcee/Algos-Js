/**
 * **1416. Restore The Array**
 *
 * A program was supposed to print an array of integers. The program forgot to print whitespaces and
 * the array is printed as a string of digits `s` and all we know is that all integers in the array
 * were in the range `[1, k]` and there are no leading zeros in the array.
 *
 * Given the string `s` and the integer `k`, return *the number of the possible arrays that can be
 * printed as `s` using the mentioned program*. Since the answer may be very large, return it
 * **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of only digits and does not contain leading zeros.
 * - `1 <= k <= 109`
 *
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const numberOfArrays = function (s, k) {
    // Initialize the number of arrays to 0
    let numberOfArrays = 0;
    // Create a memo to store the number of arrays for each substring
    const memo = {};

    // Create a helper function to recursively find the number of arrays
    const findNumberOfArrays = (startIndex) => {
        // If the startIndex is equal to the length of the string, return 1
        if (startIndex === s.length) {
            return 1;
        }

        // If the startIndex is greater than the length of the string, return 0
        if (startIndex > s.length) {
            return 0;
        }

        // If the number of arrays for the substring starting at startIndex is already in the memo,
        // return it
        if (memo[startIndex] !== undefined) {
            return memo[startIndex];
        }

        // Initialize the number of arrays for the substring starting at startIndex to 0
        let numberOfArrays = 0;

        // Loop through the possible lengths of the substring
        for (let length = 1; length <= s.length - startIndex; length++) {
            // Get the substring starting at startIndex with the current length
            const substring = s.substring(startIndex, startIndex + length);

            // If the substring is greater than k, break out of the loop
            if (substring > k) {
                break;
            }

            // If the substring starts with 0, continue to the next iteration
            if (substring.startsWith('0')) {
                continue;
            }

            // Add the number of arrays for the substring starting at startIndex + length to the
            // number of arrays for the substring starting at startIndex
            numberOfArrays += findNumberOfArrays(startIndex + length);
        }

        // Store the number of arrays for the substring starting at startIndex in the memo
        memo[startIndex] = numberOfArrays;

        // Return the number of arrays for the substring starting at startIndex
        return numberOfArrays;
    };

    // Return the number of arrays for the substring starting at 0
    return findNumberOfArrays(0);
};

const s = '1000',
    k = 10000;
// Output: 1
// Explanation: The only possible array is [1000]
console.log(numberOfArrays(s, k));
