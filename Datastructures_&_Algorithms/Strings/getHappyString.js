/**
 * **1415. The k-th Lexicographical String of All Happy Strings of
 * Length n**
 *
 * A **happy string** is a string that:
 *
 * - consists only of letters of the set `['a', 'b', 'c']`.
 * - `s[i] != s[i + 1]` for all values of `i` from `1` to `s.length - 1`
 * (string is 1-indexed).
 *
 * For example, strings **"abc"**, **"ac"**, **"b"** and
 * **"abcbabcbcb"** are all happy strings and strings **"aa"**,
 * **"baa"** and **"ababbc"** are not happy strings.
 *
 * Given two integers `n` and `k`, consider a list of all happy strings
 * of length `n` sorted in lexicographical order.
 *
 * Return *the kth string* of this list or return an **empty string** if
 * there are less than `k` happy strings of length `n`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 10`
 * - `1 <= k <= 100`
 *
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getHappyString = function (n, k) {
    const result = [];
    const chars = ['a', 'b', 'c'];

    function backtrack(current, lastChar) {
        if (current.length === n) {
            result.push(current);
            return;
        }

        for (let char of chars) {
            if (char !== lastChar) {
                backtrack(current + char, char);
            }
        }
    }

    backtrack('', '');
    return result.length >= k ? result[k - 1] : '';
};

const n = 1,
    k = 3;
// Output: "c"
/* Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c". */
console.log(getHappyString(n, k));

const n1 = 1,
    k1 = 4;
// Output: ""
// Explanation: There are only 3 happy strings of length 1.
console.log(getHappyString(n1, k1));

const n2 = 3,
    k2 = 9;
// Output: "cab"
/* Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab" */
console.log(getHappyString(n2, k2));
