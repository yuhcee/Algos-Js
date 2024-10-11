/**
 * **1942. The Number of the Smallest Unoccupied Chair**
 *
 * There is a party where `n` friends numbered from `0` to `n - 1` are
 * attending. There is an **infinite** number of chairs in this party that are
 * numbered from `0` to `infinity`. When a friend arrives at the party, they
 * sit on the unoccupied chair with the **smallest number**.
 *
 * For example, if chairs `0`, `1`, and `5` are occupied when a friend comes,
 * they will sit on chair number `2`.
 *
 * When a friend leaves the party, their chair becomes unoccupied at the moment
 * they leave. If another friend arrives at that same moment, they can sit in
 * that chair.
 *
 * You are given a **0-indexed** 2D integer array `times` where `times[i] =
 * [arrivali, leavingi]`, indicating the arrival and leaving times of the `ith`
 * friend respectively, and an integer `targetFriend`. All arrival times are
 * **distinct**.
 *
 * Return the **chair number** that the friend numbered targetFriend will sit
 * on.
 *
 * **Constraints:**
 *
 * - `n == times.length`
 * - `2 <= n <= 104`
 * - `times[i].length == 2`
 * - `1 <= arrivali < leavingi <= 105`
 * - `0 <= targetFriend <= n - 1`
 * - Each `arrivali` time is **distinct**.
 *
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
const smallestChair = function (times, targetFriend) {
    const n = times.length;

    // Create an array of events, where each event is [time, type, friend]
    // type 1 = arrival, type 0 = leaving
    const events = [];

    for (let i = 0; i < n; i++) {
        const [arrival, leaving] = times[i];
        events.push([arrival, 1, i]); // arrival event
        events.push([leaving, 0, i]); // leaving event
    }

    // Sort events by time. If two events have the same time, process leaving before arriving
    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    // Min-heap (priority queue) for available chairs
    const availableChairs = new MinHeap();
    for (let i = 0; i < n; i++) {
        availableChairs.insert(i); // Initially, all chairs [0, 1, ..., n-1] are available
    }

    // Map to track which chair each friend is using
    const chairMap = new Map();

    for (const [time, type, friend] of events) {
        if (type === 1) {
            // Arrival event
            const chair = availableChairs.extractMin(); // Get the smallest available chair
            chairMap.set(friend, chair);

            // If this is the target friend, return their chair number
            if (friend === targetFriend) {
                return chair;
            }
        } else {
            // Leaving event
            const chair = chairMap.get(friend); // Get the chair the friend was using
            availableChairs.insert(chair); // Put the chair back into the available pool
        }
    }
};

// Min-Heap class to manage available chairs
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIdx = Math.floor((index - 1) / 2);
            if (this.heap[parentIdx] > this.heap[index]) {
                [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]];
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let swap = null;

            if (leftChildIdx < length) {
                if (this.heap[leftChildIdx] < element) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if (this.heap[rightChildIdx] < (swap === null ? element : this.heap[leftChildIdx])) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

const times = [
        [1, 4],
        [2, 3],
        [4, 6],
    ],
    targetFriend = 1;
// Output: 1
/* Explanation: 
- Friend 0 arrives at time 1 and sits on chair 0.
- Friend 1 arrives at time 2 and sits on chair 1.
- Friend 1 leaves at time 3 and chair 1 becomes empty.
- Friend 0 leaves at time 4 and chair 0 becomes empty.
- Friend 2 arrives at time 4 and sits on chair 0.
Since friend 1 sat on chair 1, we return 1. */
console.log(smallestChair(times, targetFriend));

const times1 = [
        [3, 10],
        [1, 5],
        [2, 6],
    ],
    targetFriend1 = 0;
// Output: 2
/* Explanation: 
- Friend 1 arrives at time 1 and sits on chair 0.
- Friend 2 arrives at time 2 and sits on chair 1.
- Friend 0 arrives at time 3 and sits on chair 2.
- Friend 1 leaves at time 5 and chair 0 becomes empty.
- Friend 2 leaves at time 6 and chair 1 becomes empty.
- Friend 0 leaves at time 10 and chair 2 becomes empty.
Since friend 0 sat on chair 2, we return 2. */
console.log(smallestChair(times1, targetFriend1));
