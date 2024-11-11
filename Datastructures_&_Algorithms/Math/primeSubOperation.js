/**
 * **2601. Prime Subtraction Operation**
 *
 * You are given a **0-indexed** integer array `nums` of length `n`.
 *
 * You can perform the following operation as many times as you want:
 *
 * - Pick an index `i` that you haven’t picked before, and pick a prime `p` **strictly less than** `nums[i]
 * `, then subtract `p` from `nums[i]`.
 *
 * Return *`true` if you can make nums a strictly increasing array using the above operation and false
 * otherwise*.
 *
 * A **strictly increasing array** is an array whose each element is strictly greater than its preceding
 * element.
 *
 * **Constraints:**
 *
 * - `1 <= nums.length <= 1000`
 * - `1 <= nums[i] <= 1000`
 * - `nums.length == n`
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const primeSubOperation = function (nums) {
    const getMaxElement = (nums) => {
        let max = -1;
        for (let num of nums) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    };

    const fill = (arr, value) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = value;
        }
    };

    const maxElement = getMaxElement(nums);

    // Create Sieve of Eratosthenes array
    const sieve = new Array(maxElement + 1);
    fill(sieve, true);
    sieve[1] = false;

    for (let i = 2; i <= Math.sqrt(maxElement + 1); i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= maxElement; j += i) {
                sieve[j] = false;
            }
        }
    }

    // Check if array can be made strictly increasing
    let currValue = 1;
    let i = 0;

    while (i < nums.length) {
        const difference = nums[i] - currValue;

        if (difference < 0) {
            return false;
        }

        if (sieve[difference] === true || difference === 0) {
            i++;
            currValue++;
        } else {
            currValue++;
        }
    }

    return true;
};
