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

    for(let i = 0; i < s.length; i++) {
        
    }
};
