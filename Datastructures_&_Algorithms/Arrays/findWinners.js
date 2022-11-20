/**
 * **2225. Find Players With Zero or One Losses**
 *
 * You are given an integer array `matches` where `matches[i] = [winneri, loseri]` indicates that the player `winneri`
 * defeated player `loseri` in a match.
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
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
    const n = matches.length;

    const players = [];

    for (let i = 0; i < n; ++i) {
        const [winner, loser] = matches[i];

        if (players[winner] == null) players[winner] = [0, 0];
        if (players[loser] == null) players[loser] = [0, 0];

        players[winner][0] += 1;
        players[loser][1] += 1;
    }

    const first = [];
    const second = [];

    for (let i = 1; i <= 1e5; ++i) {
        if (players[i] != null) {
            if (players[i][1] === 0) first.push(i);
            else if (players[i][1] === 1) second.push(i);
        }
    }

    return [first, second];
};
