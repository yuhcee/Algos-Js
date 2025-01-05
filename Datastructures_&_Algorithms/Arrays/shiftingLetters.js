/**
 * **2381. Shifting Letters II**
 *
 * You are given a string `s` of lowercase English letters and a 2D integer
 * array `shifts` where `shifts[i] = [starti, endi, directioni]`. For every
 * `i`, **shift** the characters in `s` from the index `starti` to the index
 * `endi` (**inclusive**) forward if `directioni = 1`, or shift the characters
 * backward if `directioni = 0`.
 *
 * Shifting a character **forward** means replacing it with the **next** letter
 * in the alphabet (wrapping around so that `'z'` becomes `'a'`). Similarly,
 * shifting a character **backward** means replacing it with the **previous**
 * letter in the alphabet (wrapping around so that `'a'` becomes `'z'`).
 *
 * Return *the final string after all such shifts to s are applied*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length, shifts.length <= 5 * 104`
 * - `shifts[i].length == 3`
 * - `0 <= starti <= endi < s.length`
 * - `0 <= directioni <= 1`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
const shiftingLetters = function (s, shifts) {
    const n = s.length;
    const diff = Array(n + 1).fill(0); // Difference array for range updates

    // Apply each shift to the difference array
    for (const [start, end, direction] of shifts) {
        const shiftValue = direction === 1 ? 1 : -1;
        diff[start] += shiftValue;
        diff[end + 1] -= shiftValue;
    }

    // Calculate the prefix sum to get net shifts
    let netShift = 0;
    const result = Array(n);
    for (let i = 0; i < n; i++) {
        netShift += diff[i];
        // Adjust the character with wrapping
        const newCharCode = ((((s.charCodeAt(i) - 97 + netShift) % 26) + 26) % 26) + 97;
        result[i] = String.fromCharCode(newCharCode);
    }

    return result.join('');
};

const s = 'abc',
    shifts = [
        [0, 1, 0],
        [1, 2, 1],
        [0, 2, 1],
    ];
// Output: "ace"
/* Explanation: Firstly, shift the characters from index 0 to index 1 backward. Now s = "zac".
Secondly, shift the characters from index 1 to index 2 forward. Now s = "zbd".
Finally, shift the characters from index 0 to index 2 forward. Now s = "ace". */
console.log(shiftingLetters(s, shifts));
