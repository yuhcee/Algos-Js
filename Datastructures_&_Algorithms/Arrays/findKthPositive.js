/**
 * **1539. Kth Missing Positive Number**
 *
 * Given an array `arr` of positive integers sorted in a **strictly increasing order**, and an
 * integer `k`.
 *
 * Return *the `kth` **positive** integer that is **missing** from this array*.
 *
 * **Constraints:**
 *
 * - `1 <= arr.length <= 1000`
 * - `1 <= arr[i] <= 1000`
 * - `1 <= k <= 1000`
 * - `arr[i] < arr[j] for 1 <= i < j <= arr.length`
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
    let n = arr.length;
    let missingCount = 0; // number of missing integers found so far
    let lastMissing = 0; // last missing integer found

    for (let i = 0; i < n; i++) {
        // calculate the number of missing integers between arr[i] and lastMissing
        let diff = arr[i] - lastMissing - 1;

        if (diff > 0) {
            missingCount += diff;
            if (missingCount >= k) {
                // we found the kth missing integer
                return lastMissing + k - (missingCount - diff);
            }
        }
        // update lastMissing
        lastMissing = arr[i];
    }

    // if we get here, it means the kth missing integer is greater than arr[n-1]
    return arr[n - 1] + k - missingCount;
};
