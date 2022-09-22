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

