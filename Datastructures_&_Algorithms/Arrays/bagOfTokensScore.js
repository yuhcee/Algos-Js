/**
 * **948. Bag of Tokens**
 *
 * You start with an initial **power** of `power`, an initial **score** of
 * `0`, and a bag of tokens given as an integer array tokens, where each
 * `tokens[i]` donates the value of tokeni.
 *
 * Your goal is to **maximize** the total **score** by strategically playing
 * these tokens. In one move, you can play an **unplayed** token in one of
 * the two ways (but not both for the same token):
 *
 * - **Face-up**: If your current power is **at least** `tokens[i]`, you may
 * play tokeni, losing `tokens[i]` power and gaining `1` score.
 * - **Face-down**: If your current score is **at least** `1`, you may play
 * tokeni, gaining `tokens[i]` power and losing `1` score.
 *
 * Return the **maximum** possible score you can achieve after playing any
 * number of tokens.
 *
 * **Constraints:**
 *
 * - `0 <= tokens.length <= 1000`
 * - `0 <= tokens[i], power < 104`
 *
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
const bagOfTokensScore = function (tokens, power) {
    tokens.sort((a, b) => a - b);
    let left = 0,
        right = tokens.length - 1;
    let score = 0,
        maxScore = 0;

    while (left < right) {
        if (power >= tokens[left]) {
            score++;
            power -= tokens[left];
            left++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0 && left < right) {
            score--;
            power += tokens[right];
            right--;
        } else {
            break;
        }
    }

    return maxScore;
};

const tokens = [100],
    power = 50;
// Output: 0
/* Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100). */
console.log(bagOfTokensScore(tokens, power));

const tokens1 = [200, 100],
    power1 = 150;
// Output: 1
/* Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.
There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1. */
console.log(bagOfTokensScore(tokens1, power1));
