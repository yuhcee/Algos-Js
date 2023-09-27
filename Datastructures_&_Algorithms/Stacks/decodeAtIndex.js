/**
 * **880. Decoded String at Index**
 *
 * You are given an encoded string `s`. To decode the string to a tape,
 * the encoded string is read one character at a time and the following
 * steps are taken:
 *
 * - If the character read is a letter, that letter is written onto the
 * tape.
 * - If the character read is a digit `d`, the entire current tape is
 * repeatedly written `d - 1` more times in total.
 *
 * Given an integer `k`, return *the `kth` letter (**1-indexed**) in the
 * decoded string.
 *
 * **Constraints:**
 *
 * - `2 <= s.length <= 100`
 * - `s` consists of lowercase English letters and digits `2` through `9`.
 * - `s` starts with a letter.
 * - `1 <= k <= 109`
 * - It is guaranteed that `k` is less than or equal to the length of the
 * decoded string.
 * - The decoded string is guaranteed to have less than `263` letters.
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const decodeAtIndex = function (s, k) {
    let length = 0;
    let i = 0;

    // Calculate the total length of the decoded string
    while (length < k) {
        length = isNaN(s[i]) ? length + 1 : length * Number(s[i]);
        i++;
    }

    // Iterate through the string in reverse order
    for (let j = i - 1; j >= 0; j--) {
        k %= length;
        if (k === 0 && isNaN(s[j])) return s[j];
        length = isNaN(s[j]) ? length - 1 : length / Number(s[j]);
    }
};

const s = 'leet2code3',
    k = 10;
// Output: "o"
// Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
// The 10th letter in the string is "o".
console.log(decodeAtIndex(s, k));
