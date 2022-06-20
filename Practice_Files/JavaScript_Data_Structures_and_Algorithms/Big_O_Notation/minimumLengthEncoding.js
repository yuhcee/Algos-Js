/**
 * **820. Short Encoding of Words**
 *
 * A **valid encoding** of an array of `words` is any reference string `s` and array of indices
 * `indices` such that:
 *
 * - `words.length == indices.length`
 * - The reference string `s` ends with the `'#'` character.
 * - For each index `indices[i]`, the **substring** of `s` starting from `indices[i]` and up to
 * (but not including) the next `'#'` character is equal to `words[i]`.
 *
 * Given an array of `words`, return *the **length of the shortest reference string** `s`
 * possible of any **valid encoding** of `words`.
 *
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = (words) => {
    const set = new Set(words);

    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            const piece = word.slice(i);
            set.delete(piece);
        }
    }
    let ans = 0;
    for (const word of set) {
        ans += word.length + 1;
    }
    return ans;
};
const words = ['time', 'me', 'bell'];
// Output: 10;
/* Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#" */
console.log(minimumLengthEncoding(words));

const words1 = ['t'];
// Output: 2;
// Explanation: A valid encoding would be s = "t#" and indices = [0].
console.log(minimumLengthEncoding(words1));
