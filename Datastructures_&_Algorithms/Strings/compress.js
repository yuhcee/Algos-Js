/**
 * **443. String Compression**
 *
 * Given an array of characters `chars`, compress it using the following algorithm:
 *
 * Begin with an empty string `s`. For each group of **consecutive repeating characters** in
 * `chars`:
 *
 * - If the group's length is `1`, append the character to `s`.
 * - Otherwise, append the character followed by the group's length.
 *
 * The compressed string `s` **should not be returned separately**, but instead, be stored
 * **in the input character array** `chars`. Note that group lengths that are 10 or longer
 * will be split into multiple characters in chars.
 *
 * After you are done **modifying the input array**, return *the new length of the array*.
 *
 * You must write an algorithm that uses only constant extra space.
 *
 * **Constraints:**
 *
 * - `1 <= chars.length <= 2000`
 * - `chars[i]` is a lowercase English letter, uppercase English letter, digit, or symbol.
 *
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
    if (chars.length > 1) {
        let s = '';
        let groupSize = 1;

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === chars[i + 1]) {
                groupSize++;
            } else {
                s += chars[i];
                if (groupSize > 1) {
                    s += groupSize;
                    groupSize = 1;
                }
            }
        }

        chars.splice(0, chars.length);

        for (let j = 0; j < s.length; j++) {
            chars[j] = s[j];
        }
    }

    return chars.length;
};
