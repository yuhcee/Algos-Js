/**
 * **1639. Number of Ways to Form a Target String Given a Dictionary**
 *
 * You are given a list of strings of the **same length** `words` and a string 
 * `target`.
 *
 * Your task is to form `target` using the given `words` under the following 
 * rules:
 *
 * - `target` should be formed from left to right.
 * - To form the `ith`character (**0-indexed**) of `target`, you can choose the 
 * `kth` character
 * of the `jth` string in `words` if `target[i] = words[j][k]`.
 * - Once you use the `kth` character of the `jth` string of `words`, you can 
 * no longer use the
 * `xth` character of any string in `words` where `x <= k`. In other words, all 
 * characters to
 * the left of or at index `k` become unusuable for every string.
 * - Repeat the process until you form the string `target`.
 *
 * **Notice** that you can use **multiple characters** from the **same string** 
 * in words
 * provided the conditions above are met.
 *
 * Return *the number of ways to form `target` from `words`*. Since the answer 
 * may be too
 * large, return it **modulo** 109 + 7.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 1000`
 * - `1 <= words[i].length <= 1000`
 * - All strings in `words` have the same length.
 * - `1 <= target.length <= 1000`
 * - `words[i]` and `target` contain only lowercase English letters.
 *
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
const numWays = function (words, target) {
    const mod = 1e9 + 7;

    // initialize result array with 0s and set result[0] to 1
    const result = new Array(target.length + 1).fill(0);
    result[0] = 1;

    // loop through each character position in the words
    for (let i = 0; i < words[0].length; i++) {
        // initialize a count array to store the count of each character in the words
        let count = new Array(26).fill(0);
        for (let word of words) {
            count[word.charCodeAt(i) - 97]++;
        }

        // loop through each character in the target string backwards
        for (let j = target.length - 1; j >= 0; j--) {
            // calculate the number of ways to form the target string up to the j-th character
            // using characters from the i-th position in the words
            result[j + 1] += (result[j] * count[target.charCodeAt(j) - 97]) % mod;
            result[j + 1] %= mod;
        }
    }

    // return the number of ways to form the target string
    return result[target.length];
};

const words = ['acca', 'bbbb', 'caca'],
    target = 'aba';
// Output: 6
/* Explanation: There are 6 ways to form target.
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("caca")
"aba" -> index 0 ("acca"), index 1 ("bbbb"), index 3 ("acca")
"aba" -> index 0 ("acca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("acca")
"aba" -> index 1 ("caca"), index 2 ("bbbb"), index 3 ("caca") */
console.log(numWays(words, target));

const words2 = ['abba', 'baab'],
    target2 = 'bab';
// Output: 4
/* Explanation: There are 4 ways to form target.
"bab" -> index 0 ("baab"), index 1 ("baab"), index 2 ("abba")
"bab" -> index 0 ("baab"), index 1 ("baab"), index 3 ("baab")
"bab" -> index 0 ("baab"), index 2 ("baab"), index 3 ("baab")
"bab" -> index 1 ("abba"), index 2 ("baab"), index 3 ("baab") */
console.log(numWays(words2, target2));

const words3 = ['abcd'],
    target3 = 'abcd';
// Output: 1
console.log(numWays(words3, target3));
