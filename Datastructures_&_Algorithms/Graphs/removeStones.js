/**
 * **947. Most Stones Removed with Same Row or Column**
 *
 * On a 2D plane, we place `n` stones at some integer coordinate points. Each coordinate point may have at most one
 * stone.
 *
 * A stone can be removed if it shares either **the same row or the same column** as another stone that has not been
 * removed.
 *
 * Given an array `stones` of length `n` where `stones[i] = [xi, yi]` represents the location of the `ith` stone,
 * return *the largest possible number of stones that can be removed*.
 *
 * **Constraints:**
 *
 * - `1 <= stones.length <= 1000`
 * - `0 <= xi, yi <= 104`
 * - No two stones are at the same coordinate point.
 *
 * @param {number[][]} stones
 * @return {number}
 */
const removeStones = (stones) => {
    // find the number of valid stones
    // if valid, traverse stones and look for same row and col then remove those stones
    const visited = new Set();
    let valid = 0;

    // find and remove stones that have same row and col
    const traverse = (row, col) => {
        const key = `${row}-${col}`;

        if (visited.has(key)) return;

        visited.add(key); // mark visited
        for (const [x, y] of stones) {
            // if row or col is same, should be removed
            if (row === x || col === y) traverse(x, y);
        }
    };

    for (const [x, y] of stones) {
        const key = `${x}-${y}`;

        if (visited.has(key)) continue;

        traverse(x, y);
        valid++;
    }

    // subtract number of valid nodes from total number of stones
    return stones.length - valid;
};

const stones = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1],
    [2, 2],
];
// Output: 5
/* Explanation: One way to remove 5 stones is as follows:
1. Remove stone [2,2] because it shares the same row as [2,1].
2. Remove stone [2,1] because it shares the same column as [0,1].
3. Remove stone [1,2] because it shares the same row as [1,0].
4. Remove stone [1,0] because it shares the same column as [0,0].
5. Remove stone [0,1] because it shares the same row as [0,0].
Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane. */
console.log(removeStones(stones));

const stones1 = [
    [0, 0],
    [0, 2],
    [1, 1],
    [2, 0],
    [2, 2],
];
// Output: 3
/* Explanation: One way to make 3 moves is as follows:
1. Remove stone [2,2] because it shares the same row as [2,0].
2. Remove stone [2,0] because it shares the same column as [0,0].
3. Remove stone [0,2] because it shares the same row as [0,0].
Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane. */
console.log(removeStones(stones1));

const stones2 = [[0, 0]];
// Output: 0
// Explanation: [0,0] is the only stone on the plane, so you cannot remove it.
console.log(removeStones(stones2));
