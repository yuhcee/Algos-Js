/**
 * **2483. Minimum Penalty for a Shop**
 * 
 * You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

if the ith character is 'Y', it means that customers come at the ith hour
whereas 'N' indicates that no customers come at the ith hour.
If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

For every hour when the shop is open and no customers come, the penalty increases by 1.
For every hour when the shop is closed and customers come, the penalty increases by 1.
Return the earliest hour at which the shop must be closed to incur a minimum penalty.

Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.
 * 
 * **Constraints:**

1 <= customers.length <= 105
customers consists only of characters 'Y' and 'N'.
 * 
 * @param {string} customers
 * @return {number}
 */
const bestClosingTime = function (customers) {
    const n = customers.length;
    const penaltyWhenOpen = new Array(n + 1).fill(0); // Array to store cumulative penalties when the shop is open
    const penaltyWhenClosed = new Array(n + 1).fill(0); // Array to store cumulative penalties when the shop is closed

    // Calculate cumulative penalties for each hour when the shop is open and closed
    for (let i = 0; i < n; i++) {
        penaltyWhenOpen[i + 1] = penaltyWhenOpen[i] + (customers[i] === 'N' ? 1 : 0);
        penaltyWhenClosed[i + 1] = penaltyWhenClosed[i] + (customers[i] === 'Y' ? 1 : 0);
    }

    let minPenalty = Infinity; // Initialize minimum penalty as infinity
    let earliestHour = -1; // Initialize earliest hour as -1

    // Iterate through each hour from 0 to n
    for (let hour = 0; hour <= n; hour++) {
        // Calculate the penalty for closing the shop at the current hour
        const penalty = penaltyWhenOpen[hour] + penaltyWhenClosed[n] - penaltyWhenClosed[hour];

        // If the calculated penalty is less than the current minimum penalty, update the minimum penalty and the earliest hour
        if (penalty < minPenalty) {
            minPenalty = penalty;
            earliestHour = hour;
        }
    }

    return earliestHour; // Return the earliest hour as the result};
};

const customers = 'NNNNN';
// Output: 0
// Explanation: It is best to close the shop at the 0th hour as no customers arrive.
console.log(bestClosingTime(customers));

const customers1 = 'YYYY';
// Output: 4
// Explanation: It is best to close the shop at the 4th hour as customers arrive at each hour.
console.log(bestClosingTime(customers1));
