/**
 * **567. Permutation in String**
 *
 * Given two strings `s1` and `s2`, return *`true` if `s2` contains a 
 * permutation of s1, or `false`
 * otherwise*.
 *
 * In other words, return `true` if one of `s1`'s permutations is the 
 * substring of `s2`.
 *
 * **Constraints:**
 *
 * - `1 <= s1.length, s2.length <= 104`
 * - `s1` and `s2` consist of lowercase English letters.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
    // Get the length of s1 and s2
    let s1Len = s1.length;
    let s2Len = s2.length;

    // Create an array to store the frequency of characters in s1
    let s1Freq = new Array(26).fill(0);

    // Loop through s1 and increase the frequency of each character in s1Freq
    for (let i = 0; i < s1Len; i++) {
        s1Freq[s1.charCodeAt(i) - 97]++;
    }

    // Create a window of size s1Len in s2 and check if the frequency of characters in the window matches the frequency in s1Freq
    for (let i = 0; i <= s2Len - s1Len; i++) {
        let s2Freq = new Array(26).fill(0);
        for (let j = 0; j < s1Len; j++) {
            s2Freq[s2.charCodeAt(i + j) - 97]++;
        }
        if (matches(s1Freq, s2Freq)) {
            return true;
        }
    }
    return false;
};

// Helper function to check if the frequency of characters in two arrays match
function matches(s1Freq, s2Freq) {
    for (let i = 0; i < 26; i++) {
        if (s1Freq[i] !== s2Freq[i]) {
            return false;
        }
    }
    return true;
}

const s1 = 'ab',
    s2 = 'eidbaooo';
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
console.log(checkInclusion(s1, s2));

const s11 = 'ab',
    s21 = 'eidboaoo';
// Output: false
console.log(checkInclusion(s11, s21));
