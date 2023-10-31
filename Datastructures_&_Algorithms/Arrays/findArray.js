/**
 * **2433. Find The Original Array of Prefix Xor**
 *
 * You are given an **integer** array `pref` of size `n`. Find and
 * return *the array `arr` of size `n` that satisfies:*
 *
 * - `pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i]`.
 *
 * Note that `^` denotes the **bitwise-xor** operation.
 *
 * It can be proven that the answer is **unique**.
 *
 * **Constraints:**
 *
 * - `1 <= pref.length <= 105`
 * - `0 <= pref[i] <= 106`
 *
 * @param {number[]} pref
 * @return {number[]}
 */
const findArray = function (pref) {
    const n = pref.length;
    const arr = new Array(n);
    arr[0] = pref[0];

    for (let i = 1; i < n; i++) {
        arr[i] = pref[i - 1] ^ pref[i];
    }

    return arr;
};
