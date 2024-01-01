/**
 * **455. Assign Cookies**
 *
 * Assume you are an awesome parent and want to give your children some
 * cookies. But, you should give each child at most one cookie.
 *
 * Each child `i` has a greed factor `g[i]`, which is the minimum size
 * of a cookie that the child will be content with; and each cookie `j`
 * has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to
 * the child `i`, and the child `i` will be content.
 *
 * Your goal is to maximize the number of your content children and
 * output the maximum number.
 *
 * **Constraints:**
 *
 * - `1 <= g.length <= 3 * 104`
 * - `0 <= s.length <= 3 * 104`
 * - `1 <= g[i], s[j] <= 231 - 1`
 *
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
    g.sort((a, b) => a - b); // Sort the greed factors in ascending order
    s.sort((a, b) => a - b); // Sort the cookie sizes in ascending order

    let contentChildren = 0;
    let cookieIndex = 0;

    for (let i = 0; i < g.length; i++) {
        while (cookieIndex < s.length && s[cookieIndex] < g[i]) {
            // Find the smallest cookie that satisfies the current child's greed factor
            cookieIndex++;
        }

        if (cookieIndex < s.length) {
            // If a suitable cookie is found, assign it to the child
            contentChildren++;
            cookieIndex++;
        } else {
            // If no suitable cookie is found, break the loop
            break;
        }
    }

    return contentChildren;
};
