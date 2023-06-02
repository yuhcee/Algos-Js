/**
 * **2101. Detonate the Maximum Bombs**
 *
 * You are given a list of bombs. The **range** of a bomb is defined as
 * the area where its effect can be felt. This area is in the shape of a
 * circle with the center as the location of the bomb.
 *
 * The bombs are represented by a **0-indexed** 2D integer array `bombs`
 * where `bombs[i] = [xi, yi, ri]`. `xi` and `yi` denote the X-coordinate
 * and Y-coordinate of the location of the `ith` bomb, whereas `ri`
 * denotes the **radius** of its range.
 *
 * You may choose to detonate a **single** bomb. When a bomb is detonated,
 * it will detonate all bombs that lie in its range. These bombs will
 * further detonate the bombs that lie in their ranges.
 *
 * Given the list of `bombs`, return *the **maximum** number of bombs that
 * can be detonated if you are allowed to detonate **only one** bomb*.
 *
 * **Constraints:**
 *
 * - `1 <= bombs.length <= 100`
 * - `bombs[i].length == 3`
 * - `1 <= xi, yi, ri <= 105`
 *
 * @param {number[][]} bombs
 * @return {number}
 */
const maximumDetonation = function (bombs) {
    // Create a map to store the neighbors for each bomb
    const neighbours = new Map();

    // Iterate over each bomb to determine its neighbors
    for (let i = 0; i < bombs.length; i++) {
        const x1 = bombs[i][0];
        const y1 = bombs[i][1];
        const r = bombs[i][2];

        // Check each other bomb to determine if it is a neighbor
        for (let j = 0; j < bombs.length; j++) {
            if (i !== j) {
                const x2 = bombs[j][0];
                const y2 = bombs[j][1];

                // Check if the distance between the bombs is within the radius
                if ((x1 - x2) ** 2 + (y1 - y2) ** 2 <= r ** 2) {
                    if (neighbours.has(i)) {
                        // Add the neighbor to the existing list
                        neighbours.get(i).push(j);
                        neighbours.set(i, neighbours.get(i));
                    } else {
                        // Create a new list of neighbors
                        neighbours.set(i, [j]);
                    }
                }
            }
        }
    }
};
