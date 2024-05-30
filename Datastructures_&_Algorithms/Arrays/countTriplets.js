/**
 * **1442. Count Triplets That Can Form Two Arrays of Equal XOR**
 *
 * Given an array of integers `arr`.
 *
 * We want to select three indices `i`, `j` and `k` where `(0 <= i < j <= k <
 * arr.length)`.
 *
 * Let's define `a` and `b` as follows:
 *
 * - `a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]`
 * - `b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]`
 *
 * Note that ^ denotes the **bitwise-xor** operation.
 *
 * Return *the number of triplets (`i`, `j` and `k`) Where `a == b`.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 300`
 * - `1 <= arr[i] <= 108`
 *
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function (arr) {
    const n = arr.length;
    const prefix = new Array(n + 1).fill(0);

    // Calculate the prefix XOR
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] ^ arr[i];
    }

    let count = 0;

    // Iterate over all pairs (i, k) and check the condition
    for (let i = 0; i < n; i++) {
        for (let k = i + 1; k < n; k++) {
            if (prefix[i] == prefix[k + 1]) {
                // If prefix[i] == prefix[k+1], all j between i and k are valid
                count += k - i;
            }
        }
    }

    return count;
};

const arr = [2, 3, 1, 6, 7];
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
console.log(countTriplets(arr));