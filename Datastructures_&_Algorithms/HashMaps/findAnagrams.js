/**
 * **438. Find All Anagrams in a String**|
 * 
 * Given two strings s and p, return an array of all the start indices of 
 * p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
Constraints:

1 <= s.length, p.length <= 3 * 104
s and p consist of lowercase English letters.

 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    let pMap = new Map();
    let sMap = new Map();
    let result = [];

    // Create a frequency map of the characters in the pattern string "p"
    for (let i = 0; i < p.length; i++) {
        let char = p.charAt(i);
        if (!pMap.has(char)) {
            pMap.set(char, 1);
        } else {
            pMap.set(char, pMap.get(char) + 1);
        }
    }

    // Slide a window of size "p.length" over the string "s"
    // and keep track of the frequency of characters in the window
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let char = s.charAt(right);
        if (pMap.has(char)) {
            if (!sMap.has(char)) {
                sMap.set(char, 1);
            } else {
                sMap.set(char, sMap.get(char) + 1);
            }
        }

        // If the window size exceeds "p.length",
        // decrement the frequency of the character that is being removed
        // and remove the key from the map if the frequency becomes zero
        if (right - left + 1 > p.length) {
            let leftChar = s.charAt(left);
            if (sMap.has(leftChar)) {
                sMap.set(leftChar, sMap.get(leftChar) - 1);
                if (sMap.get(leftChar) === 0) {
                    sMap.delete(leftChar);
                }
            }
            left++;
        }

        // If the frequency map of the window is the same as the frequency map of the pattern string "p",
        // add the start index of the window to the result array
        if (pMap.size === sMap.size) {
            let isAnagram = true;
            for (let [key, value] of pMap) {
                if (!sMap.has(key) || sMap.get(key) !== value) {
                    isAnagram = false;
                    break;
                }
            }
            if (isAnagram) {
                result.push(left);
            }
        }
    }

    return result;
};

const s = 'cbaebabacd',
    p = 'abc';
// Output: [0,6]
/* Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc". */
console.log(findAnagrams(s, p));
