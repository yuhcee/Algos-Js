/**
 * **3066. Minimum Operations to Exceed Threshold Value II**
 *
 * You are given a **0-indexed** integer array `nums`, and an integer `k`.
 *
 * You are allowed to perform some operations on `nums`, where in a single
 * operation, you can:
 *
 * - Select the two smallest integers `x` and `y` from `nums`.
 * - Remove `x` and `y` from `nums`.
 * - Insert `(min(x, y) * 2 + max(x, y))` at any position in the array.
 * **Note** that you can only apply the described operation if `nums`
 * contains at least two elements.
 *
 * Return the **minimum** number of operations needed so that all elements
 * of the array are greater than or equal to `k`.
 *
 * **Constraints:**
 *
 * - `2 <= nums.length <= 2 * 105`
 * - `1 <= nums[i] <= 109`
 * - `1 <= k <= 109`
 * - The input is generated such that an answer always exists. That is,
 * there exists some sequence of operations after which all elements of the
 * array are greater than or equal to `k`.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
    // Use a min-heap to efficiently find and remove the smallest elements
    const heap = new MinHeap();
    for (const num of nums) {
        heap.insert(num);
    }

    let operations = 0;

    // Perform operations until all elements are >= k
    while (heap.size() > 1 && heap.peek() < k) {
        const x = heap.extractMin();
        const y = heap.extractMin();
        const newElement = Math.min(x, y) * 2 + Math.max(x, y);
        heap.insert(newElement);
        operations++;
    }

    // If the last element is still less than k, we need one more operation
    if (heap.size() === 1 && heap.peek() < k) {
        operations++;
    }

    return operations;
};

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

const nums = [2, 11, 10, 1, 3],
    k = 10;
// Output: 2
/* Explanation:
In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop. 
It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10. */
console.log(minOperations(nums, k));
