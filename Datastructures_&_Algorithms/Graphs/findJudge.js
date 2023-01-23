/**
 * **997. Find the Town Judge**
 *
 * In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people
 * is secretly the town judge.
 *
 * If the town judge exists, then:
 *
 * The town judge trusts nobody.
 *
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties **1** and **2**.
 *
 * You are given an array `trust` where `trust[i] = [ai, bi]` representing that the person labeled
 * `ai` trusts the person labeled `bi`.
 *
 * Return *the label of the town judge if the town judge exists and can be identified, or return `-1`
 * otherwise*.
 *
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 * - `0 <= trust.length <= 104`
 * - `trust[i].length == 2`
 * - All the pairs of trust are unique.
 * - `ai != bi`
 * - `1 <= ai, bi <= n`
 *
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
    // if there's only 1 person and no trust relationship return 1
    if (N == 1 && trust.length == 0) return 1;
    // if there's not enough trust relationship to have a judge return -1
    if (trust.length < N - 1) return -1;

    // array to keep track of the number of people each person trusts
    let trustCount = new Array(N + 1).fill(0);
    // array to keep track of the number of people who trust each person
    let trustedByCount = new Array(N + 1).fill(0);

    // iterate through trust relationships array
    for (let i = 0; i < trust.length; i++) {
        let a = trust[i][0],
            b = trust[i][1];
        trustCount[a]++;
        trustedByCount[b]++;
    }

    // iterate through trustCount and trustedByCount arrays
    for (let i = 1; i <= N; i++) {
        // check if there is exactly one person who trusts no one and is trusted by everyone else
        if (trustCount[i] == 0 && trustedByCount[i] == N - 1) return i;
    }

    // no judge found
    return -1;
};
