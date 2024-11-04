/**
 * **3163. String Compression III**
 *
 * Given a string `word`, compress it using the following algorithm:
 *
 * - Begin with an empty string `comp`. While `` is not empty, use the
 * following operation:
 *      - Remove a maximum length prefix of `` made of a single character
 * `c` repeating at **most** 9 times.
 *      - Append the length of the prefix followed by c to `comp`.
 *
 * Return the string `comp`.
 *
 * **Constraints:**
 *
 * - `1 <= word.length <= 2 * 105`
 * - `word` consists only of lowercase English letters.
 *
 * @param {string} word
 * @return {string}
 */
const compressedString = function (word) {
    let comp = '';
    let i = 0;

    while (i < word.length) {
        let count = 1;
        while (i < word.length && word[i] === word[i + count] && count < 9) {
            count++;
        }

        comp += count + word[i];

        i += count;
    }

    return comp;
};
