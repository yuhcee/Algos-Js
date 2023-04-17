/**
 * **1431. Kids With the Greatest Number of Candies**
 *
 * There are `n` kids with candies. You are given an integer array `candies`, where each
 * `candies[i]` represents the number of candies the `ith` kid has, and an integer
 * `extraCandies`, denoting the number of extra candies that you have.
 *
 * Return *a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving
 * the `ith` kid all the `extraCandies`, they will have the **greatest** number of candies
 * among all the kids, or `false` otherwise*.
 *
 * Note that **multiple** kids can have the **greatest** number of candies.
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function (candies: number[], extraCandies: number): boolean[] {
    const max: number = Math.max(...candies);
    const result: boolean[] = [];

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
};

const candies = [2, 3, 5, 1, 3],
    extraCandies = 3;
// Output: [true,true,true,false,true]
/* Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids. */
console.log(kidsWithCandies(candies, extraCandies));

const candies2 = [4, 2, 1, 1, 2],
    extraCandies2 = 1;
// Output: [true,false,false,false,false]
/* Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number
of candies among the kids regardless of who takes the extra candy. */
console.log(kidsWithCandies(candies2, extraCandies2));

const candies3 = [12, 1, 12],
    extraCandies3 = 10;
// Output: [true,false,true]
console.log(kidsWithCandies(candies3, extraCandies3));
