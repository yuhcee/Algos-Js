/**
 * **2053. Kth Distinct String in an Array**
 *
 * A **distinct string** is a string that is present only **once** in an
 * array.
 *
 * Given an array of strings `arr`, and an integer `k`, return *the `kth`
 * **distinct string** present in `arr`*. If there are **fewer** than `k`
 * distinct strings, return *an **empty string** `""`*.
 *
 * Note that the strings are considered in the **order in which they
 * appear** in the array.
 *
 * **Constraints:**
 *
 * - `1 <= k <= arr.length <= 1000`
 * - `1 <= arr[i].length <= 5`
 * - `arr[i]` consists of lowercase English letters.
 *
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
const kthDistinct = function (arr, k) {
    // Step 1: Count occurrences of each string
    let frequency = {};
    for (let str of arr) {
        if (frequency[str]) {
            frequency[str]++;
        } else {
            frequency[str] = 1;
        }
    }

    // Step 2: Collect distinct strings
    let distinctStrings = [];
    for (let str of arr) {
        if (frequency[str] === 1) {
            distinctStrings.push(str);
        }
    }

    // Step 3: Return the k-th distinct string or an empty string
    if (distinctStrings.length >= k) {
        return distinctStrings[k - 1];
    } else {
        return '';
    }
};

const arr = ['d', 'b', 'c', 'b', 'c', 'a'],
    k = 2;
// Output: "a"
/* Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned.  */
console.log(kthDistinct(arr, k));
