/**
 * **769. Max Chunks To Make Sorted*
 *
 * You are given an integer array `arr` of length `n` that represents
 * a permutation of the integers in the range `[0, n - 1]`.
 *
 * We split `arr` into some number of **chunks** (i.e., partitions),
 * and individually sort each chunk. After concatenating them, the
 * result should equal the sorted array.
 *
 * Return *the largest number of chunks we can make to sort the array.*
 * **Constraints:**
 *
 * - `n == arr.length`
 * - `1 <= n <= 10`
 * - `0 <= arr[i] < n`
 * - All the elements of arr are unique.
 *
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function (arr) {
    let chunks = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            chunks++;
        }
    }

    return chunks;
};

const arr = [4, 3, 2, 1, 0];
// Output: 1
/* Explanation:
Splitting into two or more chunks will not return the required result.
For example, splitting into [4, 3], [2, 1, 0] will result in [3, 4, 0, 1, 2], which isn't sorted. */
console.log(maxChunksToSorted(arr));

const arr1 = [1, 0, 2, 3, 4];
// Output: 4
/* Explanation:
We can split into two chunks, such as [1, 0], [2, 3, 4].
However, splitting into [1, 0], [2], [3], [4] is the highest number of chunks possible. */
console.log(maxChunksToSorted(arr1));

const arr2 = [0, 1, 2, 3, 4];
// Output: 5
/* Explanation:
The array is already sorted, so we can split it into five chunks. */
console.log(maxChunksToSorted(arr2));
