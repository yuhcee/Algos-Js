/**
 * **869. Reordered Power of 2**
 *
 * You are given an integer `n`. We reorder the digits in any order (including the original order) such that
 * the leading digit is not `zero`.
 *
 * Return `true` *if and only if we can do this so that the resulting number is a power of two*.
 *
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function (n) {
    const orig = convert(n);

    let num = 1;

    while (num <= 1e9) {
        const str = convert(num);

        if (str === orig) return true;
        num <<= 1;
    }
    return false;

    function convert(num) {
        return num.toString().split('').sort().join('');
    }
};

const n = 1;
// Output: true
console.log(reorderedPowerOf2(n));

const n1 = 10;
// Output: false
console.log(reorderedPowerOf2(n1));

const n2 = 128;
// Output: true
console.log(reorderedPowerOf2(n2));
