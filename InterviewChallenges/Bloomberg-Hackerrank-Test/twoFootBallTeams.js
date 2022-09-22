/**
 * **Two FootBall Teams**
 *
 * The number of goals achieved by two football teams in matches in a league is
 * given in the form of **two** `lists`.
 *
 * For each match of `team B`, compute the **total number of matches** of `team
 * A` where `team A` has scored **less than** or **equal to the number** of
 * goals scored by `team B` in that match.
 *
 * @param {*} teamA number[]
 * @param {*} teamB number[]
 * @returns number[]
 */
const counts = (teamA, teamB) => {
    const answer = [];

    teamA.sort((a, b) => a - b);

    for (let score of teamB) {
        let low = 0,
            high = teamA.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (teamA[mid] > score) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        answer.push(low);
    }

    return answer;
};
// teamA = [1, 2, 3]
// teamB = [2, 4]
/* Team A has played three matches and has scored
teamA = [1, 2, 3] goals in each match respectively.
Team B has played two matches and has scored
teamB = [2, 4] goals in each match respectively.
For 2 goals scored by team B in its first match,
team A has 2 matches with scores 1 and 2. For 4
goals scored by team B in its second match, team
A has 3 matches with scores 1, 2 and 3. Hence,
the answer is [2, 3].*/

const teamA = [1, 2, 3],
    teamB = [2, 4];

console.log(counts(teamA, teamB));
