/**
 * **1011. Capacity To Ship Packages Within D Days**
 *
 * A conveyor belt has packages that must be shipped from one port to another within `days` days.
 *
 * The `ith` package on the conveyor belt has a weight of `weights[i]`. Each day, we load the ship
 * with packages on the conveyor belt (in the order given by `weights`). We may not load more
 * weight than the maximum weight capacity of the ship.
 *
 * Return the least weight capacity of the ship that will result in all the packages on the
 * conveyor belt being shipped within `days` days.
 *
 * **Constraints:**
 *
 * - `1 <= days <= weights.length <= 5 * 104`
 * - `1 <= weights[i] <= 500`
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
    let left = Math.max(...weights); // the minimum capacity is at least the maximum weight
    let right = weights.reduce((acc, cur) => acc + cur, 0); // the maximum capacity is the sum of all weights

    while (left < right) {
        // perform binary search
        const mid = Math.floor((left + right) / 2); // calculate the midpoint capacity
        let total = 0; // initialize the total weight to 0
        let requiredDays = 1; // initialize the required days to 1

        for (let i = 0; i < weights.length; i++) {
            total += weights[i]; // add the weight of the current package
            if (total > mid) {
                // if the total weight exceeds the capacity
                total = weights[i]; // start a new shipment with the weight of the current package
                requiredDays++; // increase the required days by 1
            }
        }

        if (requiredDays <= days) {
            // if the required days is less than or equal to the given days
            right = mid; // search in the left half of the array
        } else {
            left = mid + 1; // search in the right half of the array
        }
    }

    return left; // return the minimum capacity that will result in all packages being shipped within the given days
};

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    days = 5;
// Output: 15
/* Explanation: A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
1st day: 1, 2, 3, 4, 5
2nd day: 6, 7
3rd day: 8
4th day: 9
5th day: 10

Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed. */
console.log(shipWithinDays(weights, days));

const weights1 = [3, 2, 2, 4, 1, 4],
    days1 = 3;
// Output: 6
/* Explanation: A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
1st day: 3, 2
2nd day: 2, 4
3rd day: 1, 4 */
console.log(shipWithinDays(weights1, days1));
