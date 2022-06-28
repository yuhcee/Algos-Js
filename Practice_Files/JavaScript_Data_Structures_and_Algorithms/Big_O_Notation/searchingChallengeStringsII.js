/**
 * Have the function `StringChallengeII(strArr)` take the array of strings stored in `strArr`,
 * which will contain only two strings, the first parameter being the string `N` and the second
 * parameter being a string `K` of some characters, and your goal is to determine the smallest
 * substring of `N` that contains all the characters in `K`. For example: if `strArr` is
 * `["aaabaaddae", "aed"]` then the smallest substring of `N` that contains the characters `a`,
 * `e`, and `d` is `"dae"` located at the end of the string. So for this example your program
 * should return the string `dae`.
 *
 * Another example: if strArr is `["aabdccdbcacd", "aad"]` then the smallest substring of `N`
 * that contains all of the characters in `K` is `"aabd"` which is located at the beginning of
 * the string. Both parameters will be strings ranging in length from `1 to 50` characters and
 * all of `K's` characters will exist somewhere in the string `N`. Both strings will only
 * contains lowercase alphabetic characters.
 */

function StringChallengeII(strArr) {
    // code goes here
    const [N, K] = strArr;

    let A = 'A'.charCodeAt(0),
        n = 'z'.charCodeAt(0) - A + 1,
        hashSet = Array(n).fill(0),
        res = [];

    for (const char of K) hashSet[char.charCodeAt(0) - A]--;
    const code = (char) => char.charCodeAt(0) - A;

    let start = 0,
        end = 0,
        min = Infinity;

    while (end <= N.length) {
        if (hashSet.every((val) => val >= 0)) {
            let length = end - start;
            if (length < min) {
                min = length;
                res = [start, end];
            }
            hashSet[code(N[start])]--;
            start++;
        } else {
            if (end < N.length) hashSet[code(N[end])]++;
            end++;
        }
    }
    return min === Infinity ? '' : N.slice(res[0], res[1]);
}

const strArr = ['aaabaaddae', 'aed'];
// Output : dae
console.log(StringChallengeII(strArr));

