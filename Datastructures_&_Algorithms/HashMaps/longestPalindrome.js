/**
 * **2131. Longest Palindrome by Concatenating Two Letter Words**
 *
 * You are given an array of strings `words`. Each element of `words` consists of **two** lowercase English letters.
 *
 * Create the **longest possible palindrome** by selecting some elements from `words` and concatenating them in
 * **any order**. Each element can be selected **at most once**.
 *
 * Return *the **length** of the longest palindrome that you can create*. If it is impossible to create any
 * palindrome, return `0`.
 *
 * A **palindrome** is a string that reads the same forward and backward.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 105`
 * - `words[i].length == 2`
 * - `words[i]` consists of lowercase English letters.
 *
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    // store the word in a map with total count
    const map = {};
    let count = 0;

    for (const word of words) {
        if (!map[word]) map[word] = 1;
        else {
            map[word] += 1;
        }
    }

    let flag = false;
    for (const word of words) {
        const reverse = word[1] + word[0];
        if (word === reverse) {
            while (map[word] >= 2) {
                map[word] -= 2;
                count += 4;
            }
            if (map[word] === 1 && !flag) {
                // only we need to take one word with same pairs which give us an advantage for center letter pair
                // anymore similar pair will not help so we make flag to true
                flag = true;
                count += 2;
                map[word] -= 1;
            }
            continue;
        }
        while (map[word] > 0 && map[reverse] > 0) {
            map[word] -= 1;
            map[reverse] -= 1;
            count += 4;
        }
    }

    return count;
};

const words = ['lc', 'cl', 'gg'];
// Output: 6
/* Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
Note that "clgglc" is another longest palindrome that can be created. */
console.log(longestPalindrome(words));

const words1 = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
// Output: 8
/* Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created. */
console.log(longestPalindrome(words1));

const words2 = ['cc', 'll', 'xx'];
// Output: 2
/* Explanation: One longest palindrome is "cc", of length 2.
Note that "ll" is another longest palindrome that can be created, and so is "xx". */
console.log(longestPalindrome(words2));
