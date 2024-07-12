/**
 * **1717. Maximum Score From Removing Substrings**
 *
 * You are given a string `s` and two integers `x` and `y`. You can perform two
 * types of operations any number of times.
 *
 * - Remove substring `"ab"` and gain `x` points.
 *  - For example, when removing `"ab"` from `"cabxbae"` it becomes `"cxbae"`.
 * - Remove substring `"ba"` and gain `y` points.
 *  - For example, when removing `"ba"` from `"cabxbae"` it becomes `"cabxe"`.
 *
 * Return *the maximum points you can gain after applying the above operations on
 * `s`*.
 *
 * **Constraints:**
 *
 * - `1 <= s.length <= 105`
 * - `1 <= x, y <= 104`
 * - `s` consists of lowercase English letters.
 *
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function (s, x, y) {
    const removeAndScore = (s, first, second, score) => {
        let stack = [];
        let points = 0;

        for (let char of s) {
            if (stack.length && stack[stack.length - 1] === first && char === second) {
                stack.pop();
                points += score;
            } else {
                stack.push(char);
            }
        }

        return [stack.join(''), points];
    };

    let totalScore = 0;

    if (x > y) {
        // Remove "ab" first if x > y
        [s, score] = removeAndScore(s, 'a', 'b', x);
        totalScore += score;
        [s, score] = removeAndScore(s, 'b', 'a', y);
        totalScore += score;
    } else {
        // Remove "ba" first if y > x
        [s, score] = removeAndScore(s, 'b', 'a', y);
        totalScore += score;
        [s, score] = removeAndScore(s, 'a', 'b', x);
        totalScore += score;
    }

    return totalScore;
};

const s = 'cdbcbbaaabab',
    x = 4,
    y = 5;
// Output: 19
/* Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19. */
console.log(maximumGain(s, x, y));
