/**
 *  **1876. Substrings of Size Three with Distinct Characters**
 * 
 * A string is **good** if there are no repeated characters.
 * 
 * Given a string `s​​​​​`, return *the number of **good substrings** of length **three** in `s​​​​​​`*.
 * 
 * Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
 * 
 * A **substring** is a contiguous sequence of characters in a string.


 * 
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = (s) => {
    let res = 0;

    for (let i = 0; i < s.length - 2; i++) {
        let set = new Set();

        for (let j = i; j < i + 3; j++ ) {
        }
    }

    return res;
};
