/**
 * **3016. Minimum Number of Pushes to Type Word II**
 *
 * You are given a string `word` containing lowercase English letters.
 *
 * Telephone keypads have keys mapped with distinct collections of
 * lowercase English letters, which can be used to form words by pushing
 * them. For example, the key `2` is mapped with `["a","b","c"]`, we need
 * to push the key one time to type `"a"`, two times to type `"b"`, and
 * three times to type `"c"`.
 *
 * It is allowed to remap the keys numbered `2` to `9` to **distinct**
 * collections of letters. The keys can be remapped to **any** amount of
 * letters, but each letter must be mapped to **exactly** one key. You
 * need to find the **minimum** number of times the keys will be pushed to
 * type the string `word`.
 *
 * Return *the **minimum** number of pushes needed to type `word` after
 * remapping the keys*.
 *
 * An example mapping of letters to keys on a telephone keypad is given
 * below. Note that `1`, `*`, `#`, and `0` do **not** map to any letters.
 *
 * **Constraints:**
 *
 * - `1 <= word.length <= 105`
 * - `word` consists of lowercase English letters.
 *
 * @param {string} word
 * @return {number}
 */
const minimumPushes = function (word) {
    // Step 1: Calculate the frequency of each character
    const letterFreq = new Array(26).fill(0);
    for (let c of word) {
        letterFreq[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Step 2: Sort the frequencies in descending order
    letterFreq.sort((a, b) => b - a);

    // Step 3: Calculate the minimum number of pushes
    let totalPresses = 0;
    for (let i = 0; i < 26; i++) {
        if (letterFreq[i] === 0) break;
        totalPresses += Math.floor(i / 8 + 1) * letterFreq[i];
    }

    return totalPresses;
};
