/**
 * **451. Sort Characters By Frequency**
 *
 * Given a string `s`, sort it in **decreasing order** based on the **frequency** of the characters.
 * The **frequency** of a character is the number of times it appears in the 
 * string.
 *
 * Return *the sorted string*. If there are multiple answers, return *any of them.*
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 5 * 105`
 * - `s` consists of uppercase and lowercase English letters and digits.
 *
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
    // Step 1: Build a frequency map
    const frequencyMap = new Map();
    for (let char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Step 2: Sort characters based on frequencies
    const sortedChars = Array.from(frequencyMap.keys()).sort((a, b) => {
        const frequencyA = frequencyMap.get(a);
        const frequencyB = frequencyMap.get(b);
        return frequencyB - frequencyA;
    });

    // Step 3: Construct the sorted string
    let sortedString = '';
    for (let char of sortedChars) {
        const frequency = frequencyMap.get(char);
        sortedString += char.repeat(frequency);
    }

    return sortedString;
};

const s = 'tree';
// Output: "eert"
/* Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer. */
console.log(frequencySort(s));

const s1 = 'cccaaa';
// Output: "aaaccc"
/* Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together. */
console.log(frequencySort(s1));

const s2 = 'Aabb';
// Output: "bbAa"
/* Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters. */
console.log(frequencySort(s2));
