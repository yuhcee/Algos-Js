/**
 * **1002. Find Common Characters**
 *
 * Given a string array `words`, return *an array of all characters that show up
 * in all strings within the `words` (including duplicates)*. You may return the
 * answer in **any order**.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length <= 100`
 * - `words[i]` consists of lowercase English letters.
 *
 * @param {string[]} words
 * @return {string[]}
 */
const commonChars = function (words) {
    // Initialize the minFreq array with Infinity
    let minFreq = new Array(26).fill(Infinity);

    // Iterate through each word in the words array
    for (let word of words) {
        // Initialize a frequency array for the current word
        let freq = new Array(26).fill(0);

        // Count the frequency of each character in the current word
        for (let char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }

        // Update the minFreq array to store the minimum frequency of each character
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], freq[i]);
        }
    }

    // Construct the result array based on the minFreq array
    let result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }

    return result;
};

const words = ['bella', 'label', 'roller'];
// Output: ["e","l","l"]
console.log(commonChars(words));

const words1 = ['cool', 'lock', 'cook'];
// Output: ["c","o"]
console.log(commonChars(words1));
