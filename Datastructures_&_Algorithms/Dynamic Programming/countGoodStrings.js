/**
 * **2466. Count Ways To Build Good Strings**
 *
 * Given the integers `zero`, `one`, `low`, and `high`, we can construct a 
 * string by starting with an empty string, and then at each step perform 
 * either of the following:
 *
 * - Append the character `'0'` zero times.
 * - Append the character `'1'` one times.
 *
 * This can be performed any number of times.
 *
 * A **good** string is a string constructed by the above process having a
 * **length** between `low` and `high` (**inclusive**).
 *
 * Return *the number of **different** good strings that can be constructed 
 * satisfying these properties*. Since the answer can be large, return it 
 * **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= low <= high <= 105`
 * - `1 <= zero, one <= low`
 *
 * @param {number} low - The lower bound of the string length.
 * @param {number} high - The upper bound of the string length.
 * @param {number} zero - The number of zeros available.
 * @param {number} one - The number of ones available.
 * @return {number} - The number of different good strings modulo 10^9 + 7.
 */
const countGoodStrings = function (low, high, zero, one) {
    const dp = new Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 1000000007;

    // Calculate the dynamic programming array
    for (let end = 1; end <= high; ++end) {
        // Calculate the count for the current length
        if (end >= zero) {
            dp[end] += dp[end - zero]; // Append '0'
        }
        if (end >= one) {
            dp[end] += dp[end - one]; // Append '1'
        }
        dp[end] %= mod;
    }

    let answer = 0;
    // Sum up the counts within the range [low, high]
    for (let i = low; i <= high; ++i) {
        answer += dp[i];
        answer %= mod;
    }

    return answer;
};

const low = 3,
    high = 3,
    zero = 1,
    one = 1;
// Output: 8
/* Explanation: 
One possible valid good string is "011". 
It can be constructed as follows: "" -> "0" -> "01" -> "011". 
All binary strings from "000" to "111" are good strings in this example. */
console.log(countGoodStrings(low, high, zero, one));

const low1 = 2,
    high1 = 2,
    zero1 = 0,
    one1 = 0;
// Output: 0
/* Explanation: The only good string of length 2 is "11". */
console.log(countGoodStrings(low1, high1, zero1, one1));

const low2 = 2,
    high2 = 3,
    zero2 = 1,
    one2 = 2;
// Output: 5
// Explanation: The good strings are "00", "11", "000", "110", and "011".
console.log(countGoodStrings(low2, high2, zero2, one2));
