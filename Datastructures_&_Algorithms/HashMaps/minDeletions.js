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

    let seen = new Set(),
        deleteCount = 0;

    Object.values(charMap).forEach((count) => {
        let notSeenCount = count;

        while (seen.has(notSeenCount) && notSeenCount !== 0) {
            deleteCount += 1;
            notSeenCount -= 1;
        }
        seen.add(notSeenCount);
    });
    return deleteCount;
};
const s = 'aab';
// Output: 0
// Explanation: s is already good.
console.log(minDeletions(s));

const s1 = 'aaabbbcc';
// Output: 2
/* Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc". */
console.log(minDeletions(s1));

const s2 = 'ceabaacb';
// Output: 2
/* Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored). */
console.log(minDeletions(s2));
