/**
 * **1647. Minimum Deletions to Make Character Frequencies Unique**
 * 
 * A string `s` is called **good** if there are no two different characters in `s` that have the same **frequency**.
 * 
 * Given a string `s`, return *the **minimum** number of characters you need to delete to make `s` **good***.
 * 
 * The **frequency** of a character in a string is the number of times it appears in the string. For example, in the string 
 * `"aab"`, the frequency of `'a'` is `2`, while the frequency of `'b'` is `1`.

 * @param {string} s
 * @return {number}
 */
const minDeletions = (s) => {
    const charMap = {};

    for (const char of s) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    let used = new Set(),
        result = 0;

    Object.entries(charMap).forEach(([char, count]) => {
        let notUsed = count;

        if (used.has(notUsed) && notUsed !== 0) {
            result += 1;
            notUsed -= 1;
        }
        used.add(notUsed);
    });
    return result;
};
const s = "aab"
// Output: 0
// Explanation: s is already good.
console.log(minDeletions(s));
