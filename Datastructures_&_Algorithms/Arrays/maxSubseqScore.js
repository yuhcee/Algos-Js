/**
 * **2542. Maximum Subsequence Score**
 *
 * You are given two **0-indexed** integer arrays `nums1` and `nums2` of equal length `n`
 * and a positive integer `k`. You must choose a subsequence of indices from `nums1` of
 * length `k`.
 *
 * For chosen indices `i0`, `i1`, ...,` ik - 1`, your **score** is defined as:
 *
 * - The sum of the selected elements from `nums1` multiplied with the **minimum** of the
 * selected elements from `nums2`.\
 * - It can defined simply as: `(nums1[i0] + nums1[i1] +...+ nums1[ik - 1]) * min(nums2
 * [i0] , nums2[i1], ... ,nums2[ik - 1])`.
 *
 * Return *the **maximum** possible score*.
 *
 * A **subsequence** of indices of an array is a set that can be derived from the set `
 * {0, 1, ..., n-1}` by deleting some or no elements.
 *
 * **Constraints:**
 *
 * - `n == nums1.length == nums2.length`
 * - `1 <= n <= 105`
 * - `0 <= nums1[i], nums2[j] <= 105`
 * - `1 <= k <= n`
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function (nums1, nums2, k) {
    const n = nums1.length;
    const pairs = new Array(n);
    const minHeap = new MinHeap();
    let max = 0;
    let sum = 0;

    // Create pairs from nums1 and nums2
    for (let i = 0; i < n; i++) {
        pairs[i] = [nums1[i], nums2[i]];
    }

    // Sort pairs based on the second element (nums2 values) in descending order
    pairs.sort((a, b) => b[1] - a[1]);

    // Calculate the initial sum and add elements to the min heap
    for (let i = 0; i < k; i++) {
        sum += pairs[i][0];
        minHeap.add(pairs[i][0]);
    }

    // Calculate the maximum score based on the current sum and the last element in the subsequence
    max = sum * pairs[k - 1][1];

    // Slide the window and update the sum and max score
    for (let i = k; i < n; i++) {
        sum += pairs[i][0] - minHeap.remove();
        minHeap.add(pairs[i][0]);
        max = Math.max(max, sum * pairs[i][1]);
    }

    return max;
};

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// MinHeap class implementation
class MinHeap {
    heap = [];

    // Add an item to the heap
    add(item) {
        this.heap.push(item);
        let index = this.heap.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        // Perform heapify-up to maintain heap property
        while (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
            swap(this.heap, parentIndex, index);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Remove the root item (smallest element) from the heap
    remove() {
        if (!this.heap.length) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        let index = 0;
        // Perform heapify-down to maintain heap property
        while (2 * index + 1 < this.heap.length) {
            let smallerChildIndex = 2 * index + 1;
            if (2 * index + 2 < this.heap.length && this.heap[2 * index + 2] < this.heap[2 * index + 1]) {
                smallerChildIndex = 2 * index + 2;
            }
            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            }
            swap(this.heap, index, smallerChildIndex);
            index = smallerChildIndex;
        }
        return item;
    }
}

const nums1 = [1, 3, 3, 2],
    nums2 = [2, 1, 3, 4],
    k = 3;
// Output: 12
/* Explanation: 
The four possible subsequence scores are:
- We choose the indices 0, 1, and 2 with score = (1+3+3) * min(2,1,3) = 7.
- We choose the indices 0, 1, and 3 with score = (1+3+2) * min(2,1,4) = 6. 
- We choose the indices 0, 2, and 3 with score = (1+3+2) * min(2,3,4) = 12. 
- We choose the indices 1, 2, and 3 with score = (3+3+2) * min(1,3,4) = 8.
Therefore, we return the max score, which is 12. */
console.log(maxScore(nums1, nums2, k));

const nums11 = [4, 2, 3, 1, 1],
    nums22 = [7, 5, 10, 9, 6],
    k1 = 1;
// Output: 30
/* Explanation: 
Choosing index 2 is optimal: nums1[2] * nums2[2] = 3 * 10 = 30 is the maximum possible score. */
console.log(maxScore(nums11, nums22, k1));
