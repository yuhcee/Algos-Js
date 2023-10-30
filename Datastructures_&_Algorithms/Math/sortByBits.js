/**
 * **1356. Sort Integers by The Number of 1 Bits**
 *
 * You are given an integer array `arr`. Sort the integers in the
 * array in ascending order by the number of `1`'s in their binary
 * representation and in case of two or more integers have the same
 * number of `1`'s you have to sort them in ascending order.
 *
 * Return *the array after sorting it*.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 500`
 * - `0 <= arr[i] <= 104`
 *
 * @param {number[]} arr
 * @return {number[]}
 */
const sortByBits = function (arr) {
    function countBits(num) {
        let count = 0;
        while (num > 0) {
            count += num % 2;
            num = Math.floor(num / 2);
        }
        return count;
    }

    return arr.sort((a, b) => {
        const bitCountA = countBits(a);
        const bitCountB = countBits(b);

        if (bitCountA === bitCountB) {
            return a - b; // Sort by value if bit counts are the same
        }
        return bitCountA - bitCountB; // Sort by bit count
    });
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Output: [0,1,2,4,8,3,5,6,7]
/* Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7] */
console.log(sortByBits(arr));

const arr1 = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
// Output: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
/* Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order. */
console.log(sortByBits(arr1));
