/**
 * **1406. Stone Game III**
 *
 * Alice and Bob continue their games with piles of stones. There are several stones arranged in a row, and
 * each stone has an associated value which is an integer given in the array `stoneValue`.
 *
 * Alice and Bob take turns, with Alice starting first. On each player's turn, that player can take `1`,
 * `2`, or `3` stones from the first remaining stones in the row.
 *
 * The score of each player is the sum of the values of the stones taken. The score of each player is `0`
 * initially.
 *
 * The objective of the game is to end with the highest score, and the winner is the player with the highest
 * score and there could be a tie. The game continues until all the stones have been taken.
 *
 * Assume Alice and Bob **play optimally**.
 *
 * Return `"Alice"` *if Alice will win, `"Bob"` if Bob will win, or `"Tie"` if they will end the game with
 * the same score.
 *
 * **Constraints:**
 *
 * - `1 <= stoneValue.length <= 5 * 104`
 * - `-1000 <= stoneValue[i] <= 1000`
 *
 *
 * @param {number[]} stoneValue
 * @return {string}
 */
const stoneGameIII = function (stoneValue) {
    const n = stoneValue.length;
    const dp = new Array(n + 1).fill(0); // Create a DP array to store maximum score differences
    dp[n] = 0; // Initialize the DP value for the last position as 0

    // Iterate backwards from the last stone to the first stone
    for (let i = n - 1; i >= 0; i--) {
        let maxScore = Number.NEGATIVE_INFINITY; // Initialize the maximum score as negative infinity
        let currSum = 0; // Variable to store the current sum of stone values

        // Consider all possible choices of taking 1, 2, or 3 stones
        for (let j = 0; j < 3 && i + j < n; j++) {
            currSum += stoneValue[i + j]; // Calculate the current sum by adding stone values
            maxScore = Math.max(maxScore, currSum - dp[i + j + 1]); // Update the maximum score difference
        }

        dp[i] = maxScore; // Update the DP value for the current position with the maximum score difference
    }

    // Check the value of dp[0] to determine the winner
    if (dp[0] > 0) {
        return 'Alice'; // If dp[0] is positive, Alice wins
    } else if (dp[0] < 0) {
        return 'Bob'; // If dp[0] is negative, Bob wins
    } else {
        return 'Tie'; // If dp[0] is zero, it's a tie
    }
};

const values = [1, 2, 3, 7];
// Output: "Bob"
/* Explanation: Alice will always lose. Her best move will be to take three piles and the score become 6. Now the score of Bob is 7 and Bob wins. */
console.log(stoneGameIII(values));

const values1 = [1, 2, 3, -9];
// Output: "Alice"
/* Explanation: Alice must choose all the three piles at the first move to win and leave Bob with negative score.
If Alice chooses one pile her score will be 1 and the next move Bob's score becomes 5. In the next move, Alice will take the pile with value = -9 and lose.
If Alice chooses two piles her score will be 3 and the next move Bob's score becomes 3. In the next move, Alice will take the pile with value = -9 and also lose.
Remember that both play optimally so here Alice will choose the scenario that makes her win. */
console.log(stoneGameIII(values1));

const values2 = [1, 2, 3, 6];
// Output: "Tie"
/* Explanation: Alice cannot win this game. She can end the game in a draw if she decided to choose all the first three piles, otherwise she will lose. */
console.log(stoneGameIII(values2));
