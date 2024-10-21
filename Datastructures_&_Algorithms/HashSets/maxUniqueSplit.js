/**
 * **1593. Split a String Into the Max Number of Unique Substrings**
 *
 * Given a string `s`, return **the maximum number of unique
 * substrings that the given string can be split into**.
 *
 * You can split string `s` into any list of **non-empty substrings**,
 * where the concatenation of the substrings forms the original
 * string. However, you must split the substrings such that all of
 * them are **unique**.
 *
 * A **substring** is a contiguous sequence of characters within a
 * string.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 16`
 *
 * - `s` contains only lower case English letters.
 *
 * @param {string} s
 * @return {number}
 */
const maxUniqueSplit = function (s) {
    let maxCount = 0;

    const backtrack = (index, uniqueSet) => {
        if (index === s.length) {
            // Update the maximum count when we reach the end of the string
            maxCount = Math.max(maxCount, uniqueSet.size);
            return;
        }

        // Try every possible substring starting from the current index
        for (let i = index + 1; i <= s.length; i++) {
            const substring = s.slice(index, i);

            // If the substring is not already in the set, consider it
            if (!uniqueSet.has(substring)) {
                uniqueSet.add(substring); // Add to the set
                backtrack(i, uniqueSet); // Recur to process the rest of the string
                uniqueSet.delete(substring); // Backtrack (remove from set)
            }
        }
    };

    backtrack(0, new Set());

    return maxCount;
};

const s = 'ababccc';
// Output: 5
/* Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times. */
console.log(maxUniqueSplit(s));

const s1 = 'aba';
// Output: 2
// Explanation: One way to split maximally is ['a', 'ba'].
console.log(maxUniqueSplit(s1));
