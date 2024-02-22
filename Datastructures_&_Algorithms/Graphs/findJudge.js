/**
 * **997. Find the Town Judge**
 *
 * In a town, there are `n` people labeled from `1` to `n`. There is a rumor
 * that one of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 *
 * The town judge trusts nobody.
 *
 * Everybody (except for the town judge) trusts the town judge.
 * There is exactly one person that satisfies properties **1** and **2**.
 *
 * You are given an array `trust` where `trust[i] = [ai, bi]` representing
 * that the person labeled `ai` trusts the person labeled `bi`.
 *
 * Return *the label of the town judge if the town judge exists and can be
 * identified, or return `-1` otherwise*.
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
/* const findJudge = function (n, trust) {
    // if there's only 1 person and no trust relationship return 1
    if (n == 1 && trust.length == 0) return 1;
    // if there's not enough trust relationship to have a judge return -1
    if (trust.length < n - 1) return -1;

    // array to keep track of the number of people each person trusts
    let trustCount = new Array(n + 1).fill(0);
    // array to keep track of the number of people who trust each person
    let trustedByCount = new Array(n + 1).fill(0);

    // iterate through trust relationships array
    for (let i = 0; i < trust.length; i++) {
        let a = trust[i][0],
            b = trust[i][1];
        trustCount[a]++;
        trustedByCount[b]++;
    }

    // iterate through trustCount and trustedByCount arrays
    for (let i = 1; i <= n; i++) {
        // check if there is exactly one person who trusts no one and is trusted by everyone else
        if (trustCount[i] == 0 && trustedByCount[i] == n - 1) return i;
    }

    // no judge found
    return -1;
}; */

const findJudge = (n, trust) => {
    const trustCount = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trustCount[a]--;
        trustCount[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) {
            return i;
        }
    }

    return -1;
};

const n = 2,
    trust = [[1, 2]];
// Output: 2
console.log(findJudge(n, trust));

const n1 = 3,
    trust1 = [
        [1, 3],
        [2, 3],
    ];
// Output: 3
console.log(findJudge(n1, trust1));

const n2 = 3,
    trust2 = [
        [1, 3],
        [2, 3],
        [3, 1],
    ];
// Output: -1
console.log(findJudge(n2, trust2));
