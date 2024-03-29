/**
 * **1318. Minimum Flips to Make a OR b Equal to c**
 *
 * Given 3 positives numbers `a`, `b` and `c`. Return the minimum flips
 * required in some bits of `a` and `b` to make ( `a` OR `b` == `c` ).
 * (bitwise OR operation).
 *
 * Flip operation consists of change **any** single bit 1 to 0 or change the
 * bit 0 to 1 in their binary representation.
 *
 * **Constraints:**
 *
 * - `1 <= a <= 10^9`
 * - `1 <= b <= 10^9`
 * - `1 <= c <= 10^9`
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const minFlips = function (a, b, c) {
    let flips = 0;

    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1; // Get i-th bit of a
        const bitB = (b >> i) & 1; // Get i-th bit of b
        const bitC = (c >> i) & 1; // Get i-th bit of c

        if ((bitA | bitB) !== bitC) {
            // If (bitA OR bitB) is not equal to bitC, a flip is needed

            if (bitC === 1) {
                // If bitC is 1, we can flip either bitA or bitB to 1
                flips++;
            } else {
                // If bitC is 0, both bitA and bitB should be flipped to 0
                flips += bitA + bitB;
            }
        }
    }

    return flips;
};

const a = 2,
    b = 6,
    c = 5;
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
console.log(minFlips(a, b, c));

const a1 = 4,
    b1 = 2,
    c1 = 7;
// Output: 1
console.log(minFlips(a1, b1, c1));

const a2 = 1,
    b2 = 2,
    c2 = 3;
// Output: 0
console.log(minFlips(a2, b2, c2));
