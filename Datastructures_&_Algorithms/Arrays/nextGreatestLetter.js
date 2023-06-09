/**
 * **744. Find Smallest Letter Greater Than Target**
 *
 * You are given an array of characters `letters` that is sorted in non-decreasing order,
 * and a character `target`. There are **at least two different** characters in `letters`.
 *
 * Return the smallest character in `letters` *that is lexicographically greater than
 * `target`*. If such a character does not exist, return the first character in `letters`.
 *
 * **Constraints:**
 *
 * - `2 <= letters.length <= 104`
 * - `letters[i]` is a lowercase English letter.
 * - `letters` is sorted in non-decreasing order.
 * - `letters` contains at least two different characters.
 * - `target` is a lowercase English letter.
 *
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    let minValue = Infinity;
    let minLetter = letters[0];

    for (let i = 0; i < letters.length; i++) {
        let charCode = letters[i].charCodeAt(0);
        let targetCharCode = target.charCodeAt(0);
        const codeDifference = charCode - targetCharCode;
        if (codeDifference > 0 && codeDifference < minValue) {
            minValue = codeDifference;
            minLetter = letters[i];
        }
    }
    return minLetter;
};

const letters = ['c', 'f', 'j'],
    target = 'a';
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
console.log(nextGreatestLetter(letters, target));

const letters1 = ['c', 'f', 'j'],
    target1 = 'c';
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
console.log(nextGreatestLetter(letters1, target1));

const letters2 = ['x', 'x', 'y', 'y'],
    target2 = 'z';
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
console.log(nextGreatestLetter(letters2, target2));
