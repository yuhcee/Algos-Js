/**
 * **2108. Find First Palindromic String in the Array**
 *
 * Given an array of strings `words`, return *the first **palindromic**
 * string in the array*. If there is no such string, return an **empty
 * string** `""`.
 *
 * A string is palindromic if it reads the same forward and backward.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length <= 100`
 * - `words[i]` consists only of lowercase English letters.
 *
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = (words) => {
    const isPalindrome = (word) => {
        let start = 0;
        let end = word.length - 1;

        while (start < end) {
            if (word[start] !== word[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    };

    for (let word of words) {
        if (isPalindrome(word)) return word;
    }

    return '';
};

const words = ['abc', 'car', 'ada', 'racecar', 'cool'];
// Output: 'ada';
/* Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first. */
console.log(firstPalindrome(words));
