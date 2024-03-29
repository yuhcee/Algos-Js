/**
 * **473. Matchsticks to Square**
 *
 * You are given an integer array `matchsticks` where `matchsticks[i]` is the length of the `ith`
 * matchstick. You want to use **all the matchsticks** to make one square. You **should not break**
 * any stick, but you can link them up, and each matchstick must be used **exactly one time**.
 *
 * Return *`true` if you can make this square and `false` otherwise*.
 *
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = (matchsticks) => {
    // get perimeter
    const perimeter = matchsticks.reduce((a, b) => a + b);

    // check if all sides are equal
    if (perimeter % 4 !== 0 || matchsticks.length < 4) return false;

    // get length of each side
    const sideLen = perimeter / 4;

    // find a way to divide the array in 4 group of sum side length
    const sides = Array(4).fill(0),
        len = matchsticks.length;

    // sort arr in reverse order to catch lesser sides earlier
    matchsticks.sort((a, b) => b - a);

    const solve = (x = 0) => {
        // check if allsides are equal
        if (x === len) return sides.every((side) => side === sideLen);

        // calculate sides
        for (let i = 0; i < 4; i++) {
            if (sides[i] + matchsticks[x] > sideLen) continue;
            sides[i] += matchsticks[x];
            if (solve(x + 1)) return true;
            sides[i] -= matchsticks[x];
        }
        return false;
    };

    return solve();
};
const matchsticks = [1, 1, 2, 2, 2];
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
console.log(makesquare(matchsticks));

const matchsticks1 = [3, 3, 3, 3, 4];
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
console.log(makesquare(matchsticks1));
