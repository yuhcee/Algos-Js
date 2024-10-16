/**
 * **1405. Longest Happy String**
 *
 * A string `s` is called **happy** if it satisfies the following
 * conditions:
 *
 * - `s` only contains the letters `'a'`, `'b'`, and `'c'`.
 * - `s` does not contain any of `"aaa"`, `"bbb"`, or `"ccc"` as a
 * substring.
 * - `s` contains at **most** `a` occurrences of the letter `'a'`.
 * - `s` contains at **most** `b` occurrences of the letter `'b'`.
 * - `s` contains at **most** `c` occurrences of the letter `'c'`.
 *
 * Given three integers `a`, `b`, and `c`, return *the **longest possible
 * happy** string. If there are multiple longest happy strings, return any
 * of them. If there is no such string, return the empty string `""`*.
 *
 * A **substring** is a contiguous sequence of characters within a string.
 *
 * **Constraints:**
 *
 * - `0 <= a, b, c <= 100`
 * - `a + b + c > 0`
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
    let result = [];

    // Create an array of pairs [count, character]
    let maxHeap = [];
    if (a > 0) maxHeap.push([a, 'a']);
    if (b > 0) maxHeap.push([b, 'b']);
    if (c > 0) maxHeap.push([c, 'c']);

    // Use a max-heap like structure by sorting the array
    maxHeap.sort((x, y) => y[0] - x[0]);

    while (maxHeap.length > 0) {
        // Pick the character with the highest remaining count
        maxHeap.sort((x, y) => y[0] - x[0]); // Sort heap by count descending
        let [count1, char1] = maxHeap[0];

        // Check if we can add this character (without making three consecutive)
        if (result.length >= 2 && result[result.length - 1] === char1 && result[result.length - 2] === char1) {
            // If adding char1 would violate the rule, pick the second most frequent character
            if (maxHeap.length < 2) break; // If there's no second option, we can't add more

            let [count2, char2] = maxHeap[1];
            result.push(char2);
            maxHeap[1][0]--;

            if (maxHeap[1][0] === 0) {
                maxHeap.splice(1, 1); // Remove if exhausted
            }
        } else {
            // Otherwise, we can safely add char1
            result.push(char1);
            maxHeap[0][0]--;

            if (maxHeap[0][0] === 0) {
                maxHeap.shift(); // Remove if exhausted
            }
        }
    }

    return result.join('');
};

const a = 1,
    b = 1,
    c = 7;
// Output: "ccaccbcc"
// Explanation: "ccbccacc" would also be a correct answer.
console.log(longestDiverseString(a, b, c));

const a1 = 7,
    b1 = 1,
    c1 = 0;
// Output: "aabaa"
// Explanation: It is the only correct answer in this case.
console.log(longestDiverseString(a1, b1, c1));
