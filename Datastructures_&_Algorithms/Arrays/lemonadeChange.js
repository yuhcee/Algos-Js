/**
 * **860. Lemonade Change**
 *
 * At a lemonade stand, each lemonade costs `$5`. Customers are standing in
 * a queue to buy from you and order one at a time (in the order specified
 * by bills). Each customer will only buy one lemonade and pay with either a
 * `$5`, `$10`, or `$20` bill. You must provide the correct change to each
 * customer so that the net transaction is that the customer pays `$5`.
 *
 * Note that you do not have any change in hand at first.
 *
 * Given an integer array `bills` where `bills[i]` is the bill the `ith`
 * customer pays, return *`true` if you can provide every customer with the
 * correct change, or `false` otherwise*.
 *
 * **Constraints:**
 *
 * - `1 <= bills.length <= 105`
 * - `bills[i] is either 5, 10, or 20.`
 *
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
    let five = 0,
        ten = 0;

    for (let bill of bills) {
        if (bill === 5) {
            five++; // Collect the $5 bill
        } else if (bill === 10) {
            if (five > 0) {
                five--; // Give one $5 as change
                ten++; // Collect the $10 bill
            } else {
                return false; // Can't provide change
            }
        } else {
            // bill === 20
            if (ten > 0 && five > 0) {
                ten--; // Give one $10 as change
                five--; // Give one $5 as change
            } else if (five >= 3) {
                five -= 3; // Give three $5 bills as change
            } else {
                return false; // Can't provide change
            }
        }
    }

    return true; // Successfully provided change for all customers
};

const bills = [5, 5, 5, 10, 20];
// Output: true
/* Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true. */
console.log(lemonadeChange(bills));
