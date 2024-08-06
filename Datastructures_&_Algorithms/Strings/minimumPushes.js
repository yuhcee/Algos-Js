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

const word = 'abcde';
// Output: 5
/* Explanation: The remapped keypad given in the image provides the minimum cost.
"a" -> one push on key 2
"b" -> one push on key 3
"c" -> one push on key 4
"d" -> one push on key 5
"e" -> one push on key 6
Total cost is 1 + 1 + 1 + 1 + 1 = 5.
It can be shown that no other mapping can provide a lower cost. */
console.log(minimumPushes(word));

const word1 = 'xyzxyzxyzxyz'// Output: 12
/* Explanation: The remapped keypad given in the image provides the minimum cost.
"x" -> one push on key 2
"y" -> one push on key 3
"z" -> one push on key 4
Total cost is 1 * 4 + 1 * 4 + 1 * 4 = 12
It can be shown that no other mapping can provide a lower cost.
Note that the key 9 is not mapped to any letter: it is not necessary to map letters to every key, but to map all the letters */ .console
    .log(minimumPushes(word1));
