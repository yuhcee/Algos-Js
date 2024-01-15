/**
 * **2225. Find Players With Zero or One Losses**
 *
 * You are given an integer array `matches` where `matches[i] = [winneri, loseri]` indicates that
 * the player `winneri` defeated player `loseri` in a match.
 *
 * Return *a list `answer` of size `2` where*:
 *
 * - `answer[0]` is a list of all players that have **not** lost any matches.
 * - `answer[1]` is a list of all players that have lost exactly **one** match.
 *
 * The values in the two lists should be returned in **increasing** order.
 *
 * **Note:**
 *
 * You should only consider the players that have played **at least one** match.
 * The testcases will be generated such that no two matches will have the **same** outcome.
 *
 * **Constraints:**
 *
 * - `1 <= matches.length <= 105`
 * - `matches[i].length == 2`
 * - `1 <= winneri, loseri <= 105`
 * - `winneri != loseri`
 * - All `matches[i]` are **unique**.
 *
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const playerStats = new Map();

    for (const [winner, loser] of matches) {
        // Update winner's stats
        if (!playerStats.has(winner)) {
            playerStats.set(winner, { wins: 0, losses: 0 });
        }
        playerStats.get(winner).wins++;

        // Update loser's stats
        if (!playerStats.has(loser)) {
            playerStats.set(loser, { wins: 0, losses: 0 });
        }
        playerStats.get(loser).losses++;
    }

    const zeroLosses = [];
    const oneLoss = [];

    for (const [player, stats] of playerStats.entries()) {
        if (stats.losses === 0) {
            zeroLosses.push(player);
        } else if (stats.losses === 1) {
            oneLoss.push(player);
        }
    }

    // Sort arrays
    zeroLosses.sort((a, b) => a - b);
    oneLoss.sort((a, b) => a - b);

    return [zeroLosses, oneLoss];
};

const matches = [
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
];
// Output: [[1,2,10],[4,5,7,8]]
/* Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8]. */
console.log(findWinners(matches));

const matches1 = [
    [2, 3],
    [1, 3],
    [5, 4],
    [6, 4],
];
// Output: [[1,2,5,6],[]]
/* Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = []. */
console.log(findWinners(matches1));

const matches2 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 4],
    [5, 6],
    [7, 6],
    [7, 8],
    [8, 9],
    [10, 9],
    [10, 11],
];
// Output: [[1,5,7,10,11], [2,3,4,6,8,9]]
/* Explanation:
Players 1, 5, 7, 10, and 11 have not lost any matches.
Players 2, 3, 4, 6, 8, and 9 each have lost one match.
Thus, answer[0] = [1,5,7,10,11] and answer[1] = [2,3,4,6,8,9]. */
console.log(findWinners(matches2));

const matches3 = [
    [2, 1],
    [3, 1],
    [3, 4],
    [5, 4],
    [5, 6],
    [7, 6],
    [7, 8],
    [8, 9],
    [10, 9],
    [10, 11],
];
// Output: [[2,3,5,7,10,11], [1,4,6,8,9]]
/* Explanation:
Players 2, 3, 5, 7, 10, and 11 have not lost any matches.
Players 1, 4, 6, 8, and 9 each have lost one match.
Thus, answer[0] = [2,3,5,7,10,11] and answer[1] = [1,4,6,8,9]. */
console.log(findWinners(matches3));