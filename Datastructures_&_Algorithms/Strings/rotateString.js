/**
 * **796. Rotate String**
 *
 * Given two strings `s` and `goal`, return *`true` if and only if `s` can
 * become `goal` after some number of **shifts** on `s`*.
 *
 * A **shift** on s consists of moving the leftmost character of `s` to
 * the rightmost position.
 *
 * For example, if `s = "abcde"`, then it will be `"bcdea"` after one
 * shift.
 *
 * **Constraints:**
 *
 * - `1 <= s.length, goal.length <= 100`
 * - `s` and `goal` consist of lowercase English letters.
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;

    return (s + s).includes(goal);
};

const s = 'abcde',
    goal = 'cdeab';
// Output: true
console.log(rotateString(s, goal));

const s1 = 'abcde',
    goal1 = 'abced';
// Output: false
console.log(rotateString(s1, goal1));
