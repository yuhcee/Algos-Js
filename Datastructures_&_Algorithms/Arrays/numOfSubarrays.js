/**
 * **1524. Number of Sub-arrays With Odd Sum**
 *
 * Given an array of integers `arr`, return *the number of subarrays with
 * an **odd** sum*.
 *
 * Since the answer can be very large, return it modulo `10^9 + 7`.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 105`
 * - `1 <= arr[i] <= 100`
 *
 * @param {number[]} arr
 * @return {number}
 */
const numOfSubarrays = function (arr) {
    const MOD = 1e9 + 7;
    let prefixSum = 0;
    let countOdd = 0;
    let countEven = 1; // prefixSum[0] = 0, which is even
    let result = 0;

    for (const num of arr) {
        prefixSum += num;
        if (prefixSum % 2 === 1) {
            result = (result + countEven) % MOD;
            countOdd++;
        } else {
            result = (result + countOdd) % MOD;
            countEven++;
        }
    }

    return result;
};
