/**
 * **1545. Find Kth Bit in Nth Binary String**
 *
 * Given two positive integers `n` and `k`, the binary string `Sn` is
 * formed as follows:
 *
 * - `S1 = "0"`
 * - `Si = Si - 1 + "1" + reverse(invert(Si - 1))` for `i > 1`
 *
 * Where `+` denotes the concatenation operation, `reverse(x)` returns
 * the reversed string `x`, and `invert(x)` inverts all the bits in
 * `x` (`0` changes to `1` and `1` changes to `0`).
 *
 * For example, the first four strings in the above sequence are:
 *
 * - `S1 = "0"`
 * - `S2 = "011"`
 * - `S3 = "0111001"`
 * - `S4 = "011100110110001"`
 *
 * Return *the `kth` bit in `Sn`. It is guaranteed that `k` is valid
 * for the given `n`*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 20`
 * - `1 <= k <= 2n - 1`
 *
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
const findKthBit = function (n, k) {
    // Recursive helper function to find the kth bit in the nth binary string
    const findBit = (n, k) => {
        if (n === 1) return '0'; // Base case: S1 is "0"

        const mid = 1 << (n - 1); // Calculate the middle index of Sn (2^(n-1))

        if (k === mid) {
            return '1'; // The middle bit is always '1'
        } else if (k < mid) {
            return findBit(n - 1, k); // The first half corresponds to Sn-1
        } else {
            // The second half corresponds to the reverse and invert of Sn-1
            const bit = findBit(n - 1, mid - (k - mid)); // Calculate corresponding bit in Sn-1
            return bit === '0' ? '1' : '0'; // Invert the bit
        }
    };

    // Start the recursion
    return findBit(n, k);
};

const n = 3,
    k = 1;
// Output: "0"
/* Explanation: S3 is "0111001".
The 1st bit is "0". */
console.log(findKthBit(n, k));

const n1 = 4,
    k1 = 11;
// Output: "1"
/* Explanation: S4 is "011100110110001".
The 11th bit is "1". */
console.log(findKthBit(n1, k1));
