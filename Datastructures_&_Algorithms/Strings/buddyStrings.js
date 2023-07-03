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
    if (s.length !== goal.length) return false;

    if (s === goal) {
        const charObj = {};

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            if (charObj[char]) return true;
            charObj[char] = true;
        }
        return false;
    }

    let diffIndices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diffIndices.push(i);
    }

    if (diffIndices.length !== 2) return false;

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
