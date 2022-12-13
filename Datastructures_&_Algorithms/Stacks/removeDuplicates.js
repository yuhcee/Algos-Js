/**
 * **1047. Remove All Adjacent Duplicates In String**
 *
 * You are given a string `s` consisting of lowercase English letters. **A duplicate removal** consists of choosing
 * **two adjacent** and equal letters and removing them.
 *
 * We repeatedly make **duplicate removals** on `s` until we no longer can.
 *
 * Return *the final string after all such duplicate removals have been made*. It can be proven that the answer is
 * **unique**.
 *
 * **Constraints:**
 * - `1 <= s.length <= 105`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s, result = []) => {
    s.split('').forEach((el) => (el !== result[result.length - 1] ? result.push(el) : result.pop()));

    return result.join('');
};
