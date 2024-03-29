/**
 * **486. Predict the Winner**
 *
 * You are given an integer array `nums`. Two players are playing a game with this array: player 1
 * and player 2.
 *
 * Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a
 * score of `0`. At each turn, the player takes one of the numbers from either end of the array (i.
 * e., `nums[0]` or `nums[nums.length - 1]`) which reduces the size of the array by `1`. The player
 * adds the chosen number to their score. The game ends when there are no more elements in the array.
 *
 * Return `true` if Player 1 can win the game. If the scores of both players are equal, then player 1
 * is still the winner, and you should also return `true`. You may assume that both players are
 * playing optimally.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 20`
 * - `0 <= nums[i] <= 107`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = function (nums) {
    const n = nums.length;

    // Create a 2D DP array to store the maximum score difference between players
    // dp[i][j] represents the maximum score difference between Player 1 and Player 2
    // when playing with the subarray nums[i...j]
    const dp = Array.from({ length: n }, () => Array(n).fill(0));

    // Base case: When there is only one element in the array, Player 1 can choose it and get the score
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i];
    }

    // Fill the DP array diagonally bottom-up
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            // Player 1 chooses nums[i], then Player 2 plays optimally, either choosing nums[i+1]
            // or nums[j], in both cases Player 1 will face the maximum score difference
            const chooseStart = nums[i] - dp[i + 1][j];
            // Player 1 chooses nums[j], then Player 2 plays optimally, either choosing nums[i]
            // or nums[j-1], in both cases Player 1 will face the maximum score difference
            const chooseEnd = nums[j] - dp[i][j - 1];
            // Player 1 will choose the maximum score difference between the two choices
            dp[i][j] = Math.max(chooseStart, chooseEnd);
        }
    }

    // If the maximum score difference is greater than or equal to 0, Player 1 can win
    return dp[0][n - 1] >= 0;
};

const nums = [1, 5, 2];
// Output: false
/* Explanation: Initially, player 1 can choose between 1 and 2. 
If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
Hence, player 1 will never be the winner and you need to return false. */
console.log(PredictTheWinner(nums)); // Output: false

const nums1 = [1, 5, 233, 7];
// Output: true
/* Explanation: Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win. */
console.log(PredictTheWinner(nums1)); // Output: false
