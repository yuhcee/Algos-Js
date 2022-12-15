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
