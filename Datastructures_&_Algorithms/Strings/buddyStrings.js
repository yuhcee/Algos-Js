/**
 * **859. Buddy Strings**
 *
 * Given two strings `s` and `goal`, return *`true` if you can swap two letters in `s` so the result
 * is equal to `goal`, otherwise, return `false`*.
 *
 * Swapping letters is defined as taking two indices `i` and `j` (0-indexed) such that `i != j` and
 * swapping the characters at `s[i]` and `s[j]`.
 *
 * For example, swapping at indices `0` and `2` in "`abcd"` results in `"cbad"`.
 *
 * **Constraints:**
 *
 * - `1 <= s.length, goal.length <= 2 * 104`
 * - `s` and `goal` consist of lowercase letters.
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = function (s, goal) {
    // Check if the lengths of the strings are different
    if (s.length !== goal.length) {
        return false;
    }

    // Check if the strings are equal
    if (s === goal) {
        // Check if there are duplicate characters in the string
        const charCount = {};
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (charCount[char]) {
                return true;
            }
            charCount[char] = true;
        }
        return false;
    }

    // Find the indices where the characters are different
    const diffIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffIndices.push(i);
        }
    }

    // Check if there are exactly two different indices
    if (diffIndices.length !== 2) {
        return false;
    }

    // Check if swapping the characters at the different indices results in goal
    let [i, j] = diffIndices;
    return s[i] === goal[j] && s[j] === goal[i];
};

const s = 'ab',
    goal = 'ba';
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
console.log(buddyStrings(s, goal));

const s1 = 'ab',
    goal1 = 'ab';
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
console.log(buddyStrings(s1, goal1));

const s2 = 'aa',
    goal2 = 'aa';
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
console.log(buddyStrings(s2, goal2));
