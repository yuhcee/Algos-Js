/**
 * **767. Reorganize String**
 *
 * Given a string `s`, rearrange the characters of `s` so that any two
 * adjacent characters are not the same.
 *
 * Return *any possible rearrangement of `s` or return `""` if not possible*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 500`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
    // Step 1: Count the frequency of each letter
    const frequency = {};
    for (const char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Step 2: Find the most frequent letter (the "king" letter)
    let kingLetter = '';
    let maxFrequency = 0;
    for (const char in frequency) {
        if (frequency[char] > maxFrequency) {
            maxFrequency = frequency[char];
            kingLetter = char;
        }
    }

    // Check if it's possible to rearrange the string
    if (maxFrequency > Math.floor((s.length + 1) / 2)) {
        return '';
    }

    // Step 3: Rearrange the letters
    let rearranged = new Array(s.length);
    let idx = 0;

    // Fill in the "king" letters
    while (frequency[kingLetter] > 0) {
        rearranged[idx] = kingLetter;
        idx += 2; // Leave space for other letters
        frequency[kingLetter]--;
    }

    // Fill in the other letters
    for (const char in frequency) {
        while (frequency[char] > 0) {
            if (idx >= s.length) {
                idx = 1; // Start at the second position
            }
            rearranged[idx] = char;
            idx += 2; // Leave space for "king" letters
            frequency[char]--;
        }
    }

    return rearranged.join('');
};

const s = 'aab';
// Output: "aba"
console.log(reorganizeString(s));

const s1 = 'aaab';
// Output: ""
console.log(reorganizeString(s1));
