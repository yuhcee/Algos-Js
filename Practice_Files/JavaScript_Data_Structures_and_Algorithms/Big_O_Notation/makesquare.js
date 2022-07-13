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
};
