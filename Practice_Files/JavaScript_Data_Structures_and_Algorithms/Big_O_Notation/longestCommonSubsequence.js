/**
 * Given two strings `text1` and `text2`, return the _length of their longest **common subsequence**_. If there is no **common subsequence**, return `0`.

A **subsequence** of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

 - For example, `"ace"` is a subsequence of `"abcde"`.
A **common subsequence** of two strings is a subsequence that is common to both strings.

 * @param {string} text1
 * @param {string} text2
 * @return {number} number
 */

/* var longestCommonSubsequence = function (text1, text2) {
    const exploreLCS = (i, j, memo = {}) => {
        let key = `${i},${j}`;
        if (key in memo) return memo[key];

        if (i >= text1.length || j >= text2.length) {
            return 0;
        } else if (text1[i] === text2[j]) {
            memo[key] = 1 + exploreLCS(i + 1, j + 1, memo);
        } else {
            memo[key] = Math.max(exploreLCS(i + 1, j, memo), exploreLCS(i, j + 1, memo));
        }
        return memo[key];
    };
    return exploreLCS(0, 0);
}; */

const longestCommonSubsequence = (text1, text2) => {
    const exploreLCS = (i = 0, j = 0, memo = {}) => {
        let key = `${i},${j}`;

        if (key in memo) return memo[key];

        if (i >= text1.length || j >= text2.length) {
            return 0;
        } else if (text1[i] === text2[j]) {
            memo[key] = 1 + exploreLCS(i + 1, j + 1, memo);
        } else {
            memo[key] = Math.max(exploreLCS(i + 1, j, memo), exploreLCS(i, j + 1, memo));
        }

        return memo[key];
    };

    return exploreLCS();
};

console.log(longestCommonSubsequence('abcedf', 'aced')); // 4
console.log(longestCommonSubsequence('lb', 'yly')); // 1
