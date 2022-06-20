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
            const piece = word.slice(k);
            set.delete(piece);
        }
    }
    let ans = 0;
    
};
