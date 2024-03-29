/**
 * **791. Custom Sort String**
 *
 * You are given two strings `order` and `s`. All the characters of order
 * are **unique** and were sorted in some custom order previously.
 *
 * Permute the characters of `s` so that they match the order that `order`
 * was sorted. More specifically, if a character `x` occurs before a
 * character `y` in `order`, then `x` should occur before `y` in the
 * permuted string.
 *
 * Return *any permutation of s that satisfies this property.*
 *
 * **Constraints:**
 *
 * - `1 <= order.length <= 26`
 * - `1 <= s.length <= 200`
 * - `order` and `s` consist of lowercase English letters.
 * - All the characters of `order` are unique.
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
const customSortString = (order, s) => {
    // Create a frequency map for characters in string s
    const frequencyMap = new Map();
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Build the resulting string according to the custom order
    let result = '';
    for (const char of order) {
        if (frequencyMap.has(char)) {
            result += char.repeat(frequencyMap.get(char));
            frequencyMap.delete(char);
        }
    }

    // Append remaining characters not in the custom order
    for (const [char, count] of frequencyMap) {
        result += char.repeat(count);
    }

    return result;
};
const order = 'cba',
    s = 'abcd';
// Output:  "cbad"
/* Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs. */
console.log(customSortString(order, s));

const order1 = 'bcafg',
    s1 = 'abcd';
// Output:  "bcad"
/* Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order. */
console.log(customSortString(order1, s1));
