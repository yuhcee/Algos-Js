/**
 * **1716. Calculate Money in Leetcode Bank**
 *
 * Hercy wants to save money for his first car. He puts money in the
 * Leetcode bank **every day**.
 *
 * He starts by putting in `$1` on Monday, the first day. Every day from
 * Tuesday to Sunday, he will put in `$1` more than the day before. On
 * every subsequent Monday, he will put in `$1` more than the **previous
 * Monday**.
 *
 * Given `n`, return *the total amount of money he will have in the
 * Leetcode bank at the end of the `nth` day*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 1000`
 *
 * @param {number} n
 * @return {number}
 */
const totalMoney = function (n) {
    let total = 0,
        base = 1,
        week = 1;

    for (let day = 1; day <= n; day++) {
        total += base;
        base++;

        if (day % 7 === 0) {
            base = week + 1;
            week++;
        }
    }
    return total;
};
