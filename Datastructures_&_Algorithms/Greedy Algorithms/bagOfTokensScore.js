/**
 *
 * You have an initial **power** of `power`, an initial **score** of `0`, and a bag of `tokens` where
 * `tokens[i]` is the value of the `ith` token (0-indexed).
 *
 * Your goal is to maximize your total **score** by potentially playing each token in one of two ways:
 *
 * - If your current **power** is at least `tokens[i]`, you may play the `ith` token face up, losing
 * `tokens[i]` **power** and gaining `1` **score**.
 * - If your current **score** is at least `1`, you may play the `ith` token face down, gaining `tokens[i]
 * ` power and losing `1` **score**.
 *
 * Each token may be played **at most** once and **in any order**. You do **not** have to play all the
 * tokens.
 *
 * Return *the largest possible **score** you can achieve after playing any number of tokens*.
 *
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = function (tokens, power) {
    tokens.sort((a, b) => a - b);

    let score = 0,
        max = 0,
        left = 0,
        right = tokens.length - 1;

    while (left <= right) {
        if (power >= tokens[left]) {
            power -= tokens[left];
            score++;
            left++;
        } else if (score >= 1) {
            power += tokens[right];
            score--;
            right--;
        } else {
            break;
        }

        max = Math.max(max, score);
    }

    return max;
};

const tokens = [100],
    power = 50;
// Output: 0
// Explanation: Playing the only token in the bag is impossible because you either have too little power or too little score.
console.log(bagOfTokensScore(tokens, power));
