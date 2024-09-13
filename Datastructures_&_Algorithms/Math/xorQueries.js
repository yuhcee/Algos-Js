/**
 * **1310. XOR Queries of a Subarray**
 *
 * You are given an array `arr` of positive integers. You are also given
 * the array `queries` where `queries[i] = [lefti, righti]`.
 *
 * For each query `i` compute the **XOR** of elements from `lefti` to
 * `righti` (that is, `arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr
 * [righti]` ).
 *
 * Return an array `answer` where `answer[i]` is the answer to the `ith`
 * query.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length, queries.length <= 3 * 104`
 * - `1 <= arr[i] <= 109`
 * - `queries[i].length == 2`
 * - `0 <= lefti <= righti < arr.length`
 *
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function (arr, queries) {
    // Step 1: Build the prefixXOR array
    const n = arr.length;
    const prefixXOR = new Array(n);
    prefixXOR[0] = arr[0];

    for (let i = 1; i < n; i++) {
        prefixXOR[i] = prefixXOR[i - 1] ^ arr[i];
    }

    // Step 2: Answer the queries using the prefixXOR array
    const result = [];

    for (const [left, right] of queries) {
        if (left === 0) {
            result.push(prefixXOR[right]);
        } else {
            result.push(prefixXOR[right] ^ prefixXOR[left - 1]);
        }
    }

    return result;
};

const arr = [1, 3, 4, 8],
    queries = [
        [0, 1],
        [1, 2],
        [0, 3],
        [3, 3],
    ];
// Output: [2,7,14,8]
/* Explanation: 
The binary representation of the elements in the array are:
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
The XOR values for queries are:
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8 */
console.log(xorQueries(arr, queries));

const arr1 = [4, 8, 2, 10],
    queries1 = [
        [2, 3],
        [1, 3],
        [0, 0],
        [0, 3],
    ];
// Output: [8,0,4,4]
console.log(xorQueries(arr1, queries1));
