/**
 * **1255. Maximum Score Words Formed by Letters**
 *
 * Given a list of `words`, list of  single letters (might be repeating) and
 * `score` of every character.
 *
 * Return the maximum score of **any** valid set of words formed by using the
 * given letters (`words[i]` cannot be used two or more times).
 *
 * It is not necessary to use all characters in `letters` and each letter can
 * only be used once. Score of letters `'a'`, `'b'`, `'c'`, ... ,`'z'` is given
 * by `score[0]`, `score[1]`, ... , `score[25]` respectively.
 *
 * **Constraints:**
 *
 * - `1 <= words.length <= 14`
 * - `1 <= words[i].length <= 15`
 * - `1 <= letters.length <= 100`
 * - `letters[i].length == 1`
 * - `score.length == 26`
 * - `0 <= score[i] <= 10`
 * - `words[i]`, `letters[i]` contains only lower case English letters.
 *
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
const maxScoreWords = function (words, letters, score) {
    // Step 1: Count the frequency of each letter in the letters array
    let letterCount = new Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Helper function to calculate the score of a word
    const getWordScore = (word) => {
        let wordScore = 0;
        for (let char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    };

    // Step 2: Define the backtracking function
    const backtrack = (index, currentCount) => {
        if (index === words.length) {
            return 0;
        }

        // Case 1: Skip the current word
        let maxScore = backtrack(index + 1, currentCount);

        // Case 2: Include the current word, if possible
        let canForm = true;
        let word = words[index];
        for (let char of word) {
            if (--currentCount[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
                canForm = false;
            }
        }

        if (canForm) {
            maxScore = Math.max(maxScore, getWordScore(word) + backtrack(index + 1, currentCount));
        }

        // Backtrack: restore the count array
        for (let char of word) {
            currentCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        return maxScore;
    };

    return backtrack(0, letterCount);
};

const words = ['dog', 'cat', 'dad', 'good'],
    letters = ['a', 'a', 'c', 'd', 'd', 'd', 'g', 'o', 'o'],
    score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// Output: 23
/* Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21. */
console.log(maxScoreWords(words, letters, score));

const words1 = ['xxxz', 'ax', 'bx', 'cx'],
    letters1 = ['z', 'a', 'b', 'c', 'x', 'x', 'x'],
    score1 = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10];
// Output: 27
/* Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25. */
console.log(maxScoreWords(words1, letters1, score1));
