/**
 * **1535. Find the Winner of an Array Game**
 *
 * Given an integer array `arr` of **distinct** integers and an
 * integer `k`.
 *
 * A game will be played between the first two elements of the array
 * (i.e. `arr[0]` and `arr[1]`). In each round of the game, we compare
 * `arr[0]` with `arr[1]`, the larger integer wins and remains at
 * position `0`, and the smaller integer moves to the end of the
 * array. The game ends when an integer wins `k` consecutive rounds.
 *
 * Return *the integer which will win the game*.
 *
 * It is **guaranteed that** there will be a winner of the game.
 *
 * **Constraints:**
 *
 * - `2 <= arr.length <= 105`
 * - `1 <= arr[i] <= 106`
 * - `arr` contains distinct integers.
 * - `1 <= k <= 109`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = function (arr, k) {
    let currentWinner = arr[0]; // The initial winner is the first element
    let winCount = 0; // To count the consecutive wins

    // Start from the second element and simulate the game
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentWinner) {
            // If the current element is greater, it becomes the new winner
            currentWinner = arr[i];
            winCount = 1; // Reset the win count to 1
        } else {
            // If the current winner wins again, increment the win count
            winCount++;
        }

        // If the win count reaches k, return the current winner
        if (winCount === k) {
            return currentWinner;
        }
    }

    // If we reach the end without any integer winning k times, the current winner
    // must be the largest integer in the array and thus will win all subsequent rounds.
    return currentWinner;
};
