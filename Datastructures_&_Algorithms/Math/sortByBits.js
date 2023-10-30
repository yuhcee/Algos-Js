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
