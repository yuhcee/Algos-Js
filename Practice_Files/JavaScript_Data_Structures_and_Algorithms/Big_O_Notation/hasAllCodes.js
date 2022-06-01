/**
 * **1461. Check If a String Contains All Binary Codes of Size K**
 *
 * Given a binary string `s` and an integer `k`, return `true` *if every binary code of length `k` is a substring of
 * `s`*. Otherwise, return `false`.
 *
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = (s, k) => {
    let need = 1 << k;
    let got = new Set();

    for (let i = 0; i < s.length; i++) {
        let a = s.substring(i - k, i);
        if (!got.has(a)) {
            got.add(a);
            need--;
            // return when found all occurrences
            if (need === 0) return true;
        }
    }
    return false;
};
const s = '00110110',
    k = 2;
// Output: true;
// Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indices 0, 1, 3 and 2 respectively.
console.log(hasAllCodes(s, k));

const s1 = '0110',
    k1 = 1;
// Output: true;
// Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring.
console.log(hasAllCodes(s1, k1));
const s2 = '0110',
    k2 = 2;
// Output: false;
// Explanation: The binary code "00" is of length 2 and does not exist in the array.
console.log(hasAllCodes(s2, k2));
