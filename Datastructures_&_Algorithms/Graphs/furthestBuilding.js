/**
 * **1642. Furthest Building You Can Reach**
 *
 * You are given an integer array `heights` representing the heights of
 * buildings, some `bricks`, and some `ladders`.
 *
 * You start your journey from building `0` and move to the next building by
 * possibly using bricks or ladders.
 *
 * While moving from building `i` to building `i+1` **(0-indexed)**,
 *
 * - If the current building's height is **greater than or equal** to the
 * next building's height,you do not need a ladder or bricks.
 * - If the current building's height is **less than** the next building's
 * height, you can either use one ladder or `(h[i+1] - h[i])` **bricks**.
 *
 * Return *the furthest building index (0-indexed) you can reach if you use
 * the given ladders and bricks optimally*.
 *
 * **Constraints:**
 *
 * - `1 <= heights.length <= 105`
 * - `1 <= heights[i] <= 106`
 * - `0 <= bricks <= 109`
 * - `0 <= ladders <= heights.length`
 *
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
/* const furthestBuilding = (heights, bricks, ladders) => {
    let len = heights.length,
        queue = [];

    for (let i = 1; i < len; i++) {
        let diff = heights[i] - heights[i - 1];
        if (diff <= 0) continue;

        add(queue, diff);
        if (queue.length <= ladders) continue;

        bricks -= queue[0];
        if (bricks < 0) return i - 1;
        queue.shift();
    }

    return len - 1;
}; */

/**
 * @param {Array} queue
 * @param {Number} num
 */
// const add = (queue, num) => {
//     for (let i = 0; i < queue.length; i++) {
//         if (queue[i] > num) {
//             queue.splice(i, 0, num);
//             return;
//         }
//     }
//     queue.push(num);
// };

const heights = [4, 2, 7, 6, 9, 14, 12],
    bricks = 5,
    ladders = 1;
// Output: 4;
/* Explanation: Starting at building 0, you can follow these steps:
- Go to building 1 without using ladders nor bricks since 4 >= 2.
- Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
- Go to building 3 without using ladders nor bricks since 7 >= 6.
- Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
It is impossible to go beyond building 4 because you do not have any more bricks or ladders. */

console.log(furthestBuilding(heights, bricks, ladders));

const heights1 = [4, 12, 2, 7, 3, 18, 20, 3, 19],
    bricks1 = 10,
    ladders1 = 2;
// Output: 7;
console.log(furthestBuilding(heights1, bricks1, ladders1));

const heights2 = [14, 3, 19, 3],
    bricks2 = 17,
    ladders2 = 0;
// Output: 3;
console.log(furthestBuilding(heights2, bricks2, ladders2));

// ====================OPTIMAL SOLUTION WITH TRIE =============================
/**
 * @param {number[]} heights - Array of building heights
 * @param {number} bricks - Number of available bricks
 * @param {number} ladders - Number of available ladders
 * @return {number} - Furthest building index that can be reached
 */
var furthestBuilding = function (heights, bricks, ladders) {
    let len = heights.length - 1; // Length of the heights array
    let heap = [,]; // Initialize the heap with an empty array
    // Function to heapify a value into the min heap
    const heapify = (val) => {
        let i = heap.length,
            par = i >> 1,
            temp;
        heap.push(val); // Push the value into the heap
        // Bubble up the value until the heap property is restored
        while (heap[par] > heap[i]) {
            temp = heap[par];
            heap[par] = heap[i];
            heap[i] = temp;
            i = par;
            par = i >> 1;
        }
    };
    // Function to extract the minimum value from the heap
    const extract = () => {
        if (heap.length === 1) return null; // If heap is empty, return null
        let top = heap[1],
            left,
            right,
            temp,
            i = 1,
            child = heap[3] < heap[2] ? 3 : 2; // Determine the smaller child
        if (heap.length > 2) heap[1] = heap.pop(); // Replace the root with the last element
        else heap.pop(); // If only one element, remove it
        // Bubble down the new root until the heap property is restored
        while (heap[i] > heap[child]) {
            temp = heap[child];
            heap[child] = heap[i];
            heap[i] = temp;
            i = child;
            left = i << 1;
            right = left + 1;
            child = heap[right] < heap[left] ? right : left; // Determine the smaller child
        }
        return top; // Return the extracted minimum value
    };
    // Iterate through the buildings
    for (let i = 0; i < len; i++) {
        let diff = heights[i + 1] - heights[i]; // Calculate height difference
        if (diff > 0) {
            if (ladders > 0) heapify(diff), ladders--; // If ladders are available, use them
            else if (heap.length > 1 && diff > heap[1]) heapify(diff), (bricks -= extract()); // If bricks are available, use them
            else bricks -= diff; // If neither ladders nor bricks are available, use bricks
            if (bricks < 0) return i; // If bricks become negative, return current index
        }
    }
    return len; // Return the furthest building index
};
