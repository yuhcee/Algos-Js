/**
 * **354. Russian Doll Envelopes**
 * 
 * You are given a 2D array of integers `envelopes` where `envelopes[i] = [wi, hi]` represents the width and the height of an 
 * envelope.
 * 
 * One envelope can fit into another if and only if both the width and height of one envelope are greater than the other 
 * envelope's width and height.
 * 
 * Return *the maximum number of envelopes you can Russian doll (i.e., put one inside the other)*.
 * 
 * **Note**: You cannot rotate an envelope.

 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopes = (envelopes) => {
    const len = envelopes.length;
    // sort by width
    envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));
    envelopes;

    // lis
    let dp = [envelopes[0][1]];
    dp;

    for (let i = 1; i < len; i++) {
        let target = envelopes[i][1];
        target;
        let l = 0,
            r = dp.length;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (dp[mid] < target) {
                l = mid + 1;
                console.log(l);
            } else {
                r = mid;
            }
        }

        if (l >= 0) {
            dp[l] = target;
        }
    }
    return dp.length;
};
const envelopes = [
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
];
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
console.log(maxEnvelopes(envelopes));
const envelopes1 = [
    [1, 1],
    [1, 1],
    [1, 1],
];
// Output: 1
console.log(maxEnvelopes(envelopes1));
