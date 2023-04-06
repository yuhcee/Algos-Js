/**
 * **2405. Optimal Partition of String**
 *
 * Given a string `s`, partition the string into one or more substrings such that the characters in
 * each substring are **unique**. That is, no letter appears in a single substring more than
 * **once**.
 *
 * Return *the **minimum** number of substrings in such a partition*.
 *
 * Note that each character should belong to exactly one substring in a partition.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `s` consists of only English lowercase letters.
 *
 * @param {string} s
 * @return {number}
 */
const partitionString = function (s) {
    let set = new Set();
    let count = 1;

    for (const c of s) {
        if (!set.has(c)) set.add(c);
        else {
            set = new Set([c]);
            count++;
        }
    }

    return count;
};

const s = 'abacaba';
// Output: 4
/* Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed. */
console.log(partitionString(s));

const s1 = 'ssssss';
// Output: 6
/* Explanation:
The only valid partition is ("s","s","s","s","s","s"). */
console.log(partitionString(s1));
