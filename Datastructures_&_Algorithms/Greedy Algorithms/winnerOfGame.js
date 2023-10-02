/**
 * **2038. Remove Colored Pieces if Both Neighbors are the Same Color**
 *
 * There are `n` pieces arranged in a line, and each piece is colored
 * either by `'A'` or by `'B'`. You are given a string colors of length
 * `n` where `colors[i]` is the color of the `ith` piece.
 *
 * Alice and Bob are playing a game where they take **alternating
 * turns** removing pieces from the line. In this game, Alice moves
 * **first**.
 *
 * - Alice is only allowed to remove a piece colored `'A'` if **both its
 * neighbors** are also colored `'A'`. She is **not allowed** to remove
 * pieces that are colored `'B'`.
 * - Bob is only allowed to remove a piece colored `'B'` if **both its
 * neighbors** are also colored `'B'`. He is **not allowed** to remove
 * pieces that are colored `'A'`.
 * - Alice and Bob **cannot** remove pieces from the edge of the line.
 * - If a player cannot make a move on their turn, that player **loses**
 * and the other player **wins**.
 * Assuming Alice and Bob play optimally, return *`true` if Alice wins,
 * or return `false` if Bob wins*.
 *
 * **Constraints:**
 *
 * - `1 <= colors.length <= 105`
 * - `colors` consists of only the letters `'A'` and `'B'`
 *
 * @param {string} colors
 * @return {boolean}
 */
const winnerOfGame = function (colors) {
    // Initialize variables to store the count of consecutive 'A's and 'B's
    let countA = 0,
        countB = 0;
    // Initialize variables to store the total number of moves available for Alice and Bob
    let movesA = 0,
        movesB = 0;

    // Iterate over the colors string
    for (let i = 0; i < colors.length; i++) {
        // If the current color is 'A'
        if (colors[i] === 'A') {
            // Increment the count of consecutive 'A's
            countA++;
            // Reset the count of consecutive 'B's to 0
            countB = 0;
            // If there are at least 3 consecutive 'A's, increment the number of moves available for Alice
            if (countA >= 3) movesA++;
        } else {
            // If the current color is 'B', do the same process for Bob
            countB++;
            countA = 0;
            if (countB >= 3) movesB++;
        }
    }

    // If the number of moves available for Alice is greater than the number of moves available for Bob, return true
    // Otherwise, return false
    return movesA > movesB;
};

const colors = 'AAABABB';
// Output: true
/* Explanation:
AAABABB -> AABABB
Alice moves first.
She removes the second 'A' from the left since that is the only 'A' whose neighbors are both 'A'.

Now it's Bob's turn.
Bob cannot make a move on his turn since there are no 'B's whose neighbors are both 'B'.
Thus, Alice wins, so return true. */
console.log(winnerOfGame(colors));

const colors1 = 'AA';
// Output: false
/* Explanation:
Alice has her turn first.
There are only two 'A's and both are on the edge of the line, so she cannot move on her turn.
Thus, Bob wins, so return false. */
console.log(winnerOfGame(colors1));

const colors2 = 'ABBBBBBBAAA';
// Output: false
/* Explanation:
ABBBBBBBAAA -> ABBBBBBBAA
Alice moves first.
Her only option is to remove the second to last 'A' from the right.

ABBBBBBBAA -> ABBBBBBAA
Next is Bob's turn.
He has many options for which 'B' piece to remove. He can pick any.

On Alice's second turn, she has no more pieces that she can remove.
Thus, Bob wins, so return false. */
console.log(winnerOfGame(colors2));
