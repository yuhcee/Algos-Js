/**
 * **071. Greatest Common Divisor of Strings**
 *
 * For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + ... + t` (i.e., `t` is
 * concatenated with itself one or more times).
 *
 * Given two strings `str1` and `str2`, return the largest string `x` such that `x` divides both `str1`
 * and `str2`.
 *
 * **Constraints:**
 *
 * - `1 <= str1.length, str2.length <= 1000`
 * - `str1` and `str2` consist of English uppercase letters.
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return '';
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let len = gcd(str1.length, str2.length);
    return str1.substring(0, len);
};

const str1 = 'ABCABC',
    str2 = 'ABC';
// Output: "ABC"
console.log(gcdOfStrings(str1, str2));

const str11 = 'ABABAB',
    str21 = 'ABAB';
// Output: "AB"
console.log(gcdOfStrings(str11, str21));
