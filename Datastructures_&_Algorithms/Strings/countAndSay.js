/**
 * **38. Count and Say**
 *
 * The **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:
 *
 * - `countAndSay(1) = "1"`
 * - `countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into
 * a different digit string.
 *
 * To determine how you "say" a digit string, split it into the `minimal` number of substrings such that each substring
 * contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally,
 * concatenate every said digit.
 *
 * For example, the saying and conversion for digit string `"3322251"`:
 *
 * Given a positive integer `n`, return *the `nth` term of the **count-and-say** sequence*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 30`
 *
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    //corner case layer <= 1
    if (n <= 1) return n + '';
    let res = '1'; //default(include #1 level res), for each layer's res
    for (let i = 2; i <= n; i++) {
        //how to set many layers, use prev res?
        let temp = ''; //temp str for creat this layer res
        let count = 1; //default count for first char of prev
        let ch = res[0]; //default first char of prev
        for (let j = 1; j < res.length; j++) {
            //traverse prev res
            if (res[j] == res[j - 1]) {
                count++; //same char
            } else {
                temp += count + ch + ''; //prev char
                count = 1;
                ch = res[j]; //cur char
            }
        }
        res = temp + count + ch + ''; //update res
    }
    return res;
};

const n = 1;
// Output: "1"
// Explanation: This is the base case.
console.log(countAndSay(n));
