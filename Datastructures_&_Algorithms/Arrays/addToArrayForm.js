/**
 * **989. Add to Array-Form of Integer**
 *
 * The **array-form** of an integer `num` is an array representing its
 * digits in left to right order.
 *
 * For example, for `num = 1321`, the array form is `[1,3,2,1]`.
 *
 * Given `num`, the **array-form** of an integer, and an integer `k`,
 * return *the **array-form** of the integer `num + k`*.
 *
 * **Constraints:**
 *
 * - `1 <= num.length <= 104`
 * - `0 <= num[i] <= 9`
 * - `num` does not contain any leading zeros except for the zero itself.
 * - `1 <= k <= 104`
 *
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
    const singleDigit = num.join('');
    const singleNumber = BigInt(singleDigit);
    let sum = singleNumber + BigInt(k);
    let output = Array.from(String(sum), Number);
    return output;
};
