/**
 * **97. Interleaving String**
 *
 * Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.
 *
 * An **interleaving** of two strings `s` and `t` is a configuration where they are divided into
 * **non-empty** substrings such that:
 *
 * - s = s1 + s2 + ... + sn
 * - t = t1 + t2 + ... + tm
 * - |n - m| <= 1
 *
 * The interleaving is `s1 + t1 + s2 + t2 + s3 + t3 + ...` or `t1 + s1 + t2 + s2 + t3 + s3 + ...`
 * **Note**: `a + b` is the concatenation of strings `a` and `b`.
 *
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

const isInterleave = (s1, s2, s3) => {
    const dp = new Map();

    const solve = (a = 0, b = 0, c = 0) => {
        if (c === s3.length) return a === s1.length && b === s2.length;

        const key = `${a},${b},${c}`;

        if (dp.has(key)) return dp.get(key);

        let takeS1 = false,
            takeS2 = false;
        if (s1[a] === s3[c]) takeS1 = solve(a + 1, b, c + 1);
        if (s2[b] === s3[c]) takeS1 = solve(a, b + 1, c + 1);

        dp.set(key, takeS1 || takeS2);
        return takeS1 || takeS2;
    };

    return solve();
};

const s1 = 'aabcc',
    s2 = 'dbbca',
    s3 = 'aadbbcbcac';
// Output: true
console.log(isInterleave(s1, s2, s3));

const s11 = 'aabcc',
    s22 = 'dbbca',
    s33 = 'aadbbbaccc';
// Output: false
console.log(isInterleave(s11, s22, s33));


