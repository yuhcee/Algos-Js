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

};
