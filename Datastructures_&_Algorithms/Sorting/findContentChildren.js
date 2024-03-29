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

const g = [1, 2, 3],
    s = [1, 1];
// Output: 1
/* Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1. */
console.log(findContentChildren(g, s));

const g1 = [1, 2],
    s1 = [1, 2, 3];
// Output: 2;
/* Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
You have 3 cookies and their sizes are big enough to gratify all of the children, 
You need to output 2. */
console.log(findContentChildren(g1, s1));

const g2 = [7, 8, 9, 10];
const s2 = [5, 6, 7, 8];

console.log(findContentChildren(g2, s2));
// Expected Output: 2
/*
Explanation: You have 4 children with greed factors 7, 8, 9, 10, 
and 4 cookies with sizes 5, 6, 7, 8. You can assign cookies of size 7 and 8 to the children with greed factors 7 and 8, 
making 2 children content. Therefore, the expected output is 2.
*/
