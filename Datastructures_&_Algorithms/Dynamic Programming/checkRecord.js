/**
 * **552. Student Attendance Record II**
 *
 * - `'A'`: Absent.
 * - `'L'`: Late.
 * - `'P'`: Present.
 *
 * Any student is eligible for an attendance award if they meet both of the
 * following criteria:
 *
 * - The student was absent (`'A'`) for **strictly** fewer than 2 days **total**.
 * - The student was **never** late (`'L'`) for 3 or more **consecutive** days.
 *
 * Given an integer `n`, return the **number** of possible attendance records of
 * length `n` that make a student eligible for an attendance award. The answer
 * may be very large, so return it **modulo** `109 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 105`
 *
 * @param {number} n
 * @return {number}
 */
const checkRecord = function (n) {
    const MOD = 1000000007;

    // Initialize the memoization array
    let memo = new Array(n).fill(0).map(() => new Array(2).fill(0).map(() => new Array(3).fill(-1)));

    const checkAllRecords = (curInd, countA, countL) => {
        if (curInd === n) {
            return 1;
        }
        if (memo[curInd][countA][countL] !== -1) {
            return memo[curInd][countA][countL];
        }
        let withANext = countA === 0 ? checkAllRecords(curInd + 1, countA + 1, 0) : 0;
        let withLNext = countL === 2 ? 0 : checkAllRecords(curInd + 1, countA, countL + 1);
        let withPNext = checkAllRecords(curInd + 1, countA, 0);
        let total = (((withANext + withLNext) % MOD) + withPNext) % MOD;

        memo[curInd][countA][countL] = total;
        return total;
    };

    return checkAllRecords(0, 0, 0);
};
