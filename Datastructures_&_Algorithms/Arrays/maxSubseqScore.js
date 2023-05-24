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
const maxScore = function (nums1, nums2, k) {};

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
