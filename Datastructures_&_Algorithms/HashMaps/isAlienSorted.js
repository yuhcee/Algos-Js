/**
 * **953. Verifying an Alien Dictionary**
 *
 * In an alien language, surprisingly, they also use English lowercase letters, but possibly in a
 * different `order`. The `order` of the alphabet is some permutation of lowercase letters.
 *
 * Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return
 * `true` if and only if the given `words` are sorted lexicographically in this alien language.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 100`
 * - `1 <= words[i].length <= 20`
 * - `order.length == 26`
 * - All characters in `words[i]` and `order` are English lowercase letters.
 *
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
    // Create a map to store the order of the alphabet
    let map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i);
    }

    // Compare each pair of adjacent words
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        let len = Math.min(word1.length, word2.length);
        for (let j = 0; j < len; j++) {
            if (map.get(word1[j]) < map.get(word2[j])) {
                break;
            } else if (map.get(word1[j]) > map.get(word2[j])) {
                return false;
            } else if (j === len - 1 && word1.length > word2.length) {
                return false;
            }
        }
    }

    return true;
};

const words = ['hello', 'leetcode'],
    order = 'hlabcdefgijkmnopqrstuvwxyz';
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
console.log(isAlienSorted(words, order));

const words1 = ['word', 'world', 'row'],
    order1 = 'worldabcefghijkmnpqstuvxyz';
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
console.log(isAlienSorted(words1, order1));
