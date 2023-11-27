/**
 * **935. Knight Dialer**
 *
 * The chess knight has a **unique movement**, it may move two squares vertically and one square
 * horizontally, or two squares horizontally and one square vertically (with both forming the shape
 * of an **L**). The possible movements of chess knight are shown in this diagaram:
 *
 * A chess knight can move as indicated in the chess diagram below:
 *
 * We have a chess knight and a phone pad as shown below, the knight **can only stand on a numeric
 * cell** (i.e. blue cell).
 *
 * Given an integer `n`, return how many distinct phone numbers of length `n` we can dial.
 *
 * You are allowed to place the knight **on any numeric cell** initially and then you should
 * perform `n - 1` jumps to dial a number of length `n`. All jumps should be **valid** knight jumps.
 *
 * As the answer may be very large, **return *the answer modulo** `109 + 7`*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 5000`
 *
 * @param {number} n
 * @return {number}
 */
const knightDialer = function (n) {
    const MOD = 1000000007;
    const moves = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]];
    let dp = new Array(10).fill(1); // Base case: for n = 1

    for (let i = 2; i <= n; i++) {
        let newDp = new Array(10).fill(0);
        for (let j = 0; j < 10; j++) {
            for (const move of moves[j]) {
                newDp[j] = (newDp[j] + dp[move]) % MOD;
            }
        }
        dp = newDp;
    }

    let sum = 0;
    for (let count of dp) {
        sum = (sum + count) % MOD;
    }

    return sum;
};

const n = 1;
// Output: 10
// Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.
console.log(knightDialer(n));

const n1 = 2;
// Output: 20
// Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]
console.log(knightDialer(n1));
