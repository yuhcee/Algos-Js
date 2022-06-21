/**
 * **1642. Furthest Building You Can Reach**
 *
 * You are given an integer array `heights` representing the heights of buildings, some `bricks`,
 * and some `ladders`.
 *
 * You start your journey from building `0` and move to the next building by possibly using
 * bricks or ladders.
 *
 * While moving from building `i` to building `i+1` **(0-indexed)**,
 *
 * - If the current building's height is **greater than or equal** to the next building's height,
 * you do not need a ladder or bricks.
 * - If the current building's height is **less than** the next building's height, you can either
 * use one ladder or `(h[i+1] - h[i])` **bricks**.
 *
 * *Return the furthest building index (0-indexed) you can reach if you use the given ladders and
 * bricks optimally*.
 *
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = (heights, bricks, ladders) => {
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
};

/**
 * @param {Array} queue
 * @param {Number} num
 */
const add = (queue, num) => {
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] > num) {
            queue.splice(i, 0, num);
            return;
        }
    }
    queue.push(num);
};

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
// console.log(furthestBuilding(heights1, bricks1, ladders1));
// console.log(furthestBuilding(heights2, bricks2, ladders2));
/* var furthestBuilding = function(H, B, L) {
    let len = H.length - 1, heap = [,]
    const heapify = val => {
        let i = heap.length, par = i >> 1, temp
        heap.push(val)
        while (heap[par] > heap[i]) {
            temp = heap[par], heap[par] = heap[i], heap[i] = temp
            i = par, par = i >> 1
        }
    }
    const extract = () => {
        if (heap.length === 1) return null
        let top = heap[1], left, right, temp,
            i = 1, child = heap[3] < heap[2] ? 3 : 2
        if (heap.length > 2) heap[1] = heap.pop()
        else heap.pop()
        while (heap[i] > heap[child]) {
            temp = heap[child], heap[child] = heap[i], heap[i] = temp
            i = child, left = i << 1, right = left + 1
            child = heap[right] < heap[left] ? right : left
        }
        return top
    }    
    for (let i = 0; i < len; i++) {
        let diff = H[i+1] - H[i]
        if (diff > 0) {
            if (L > 0) heapify(diff), L--
            else if (heap.length > 1 && diff > heap[1])
                heapify(diff), B -= extract()
            else B -= diff
            if (B < 0) return i
        }
    }
    return len
}; */
