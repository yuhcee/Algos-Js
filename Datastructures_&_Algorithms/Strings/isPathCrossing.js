/**
 * **1496. Path Crossing**
 *
 * Given a string `path`, where `path[i] = 'N'`, `'S'`, `'E'` or `'W'`,
 * each representing moving one unit north, south, east, or west,
 * respectively. You start at the origin `(0, 0)` on a 2D plane and walk
 * on the path specified by `path`.
 *
 * Return *`true` if the path crosses itself at any point, that is, if
 * at any time you are on a location you have previously visited*.
 * Return `false` otherwise.
 *
 * **Constraints:**
 *
 * - `1 <= path.length <= 104`
 * - `path[i]` is either `'N'`, `'S'`, `'E'`, or `'W'`.
 *
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
    const visited = new Set();
    visited.add('0,0'); // Starting position

    let x = 0,
        y = 0;

    for (let move of path) {
        switch (move) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }

        const currentPosition = `${x},${y}`;
        if (visited.has(currentPosition)) {
            return true;
        }

        visited.add(currentPosition);
    }

    return false;
};

const path = 'NES';
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.
console.log(isPathCrossing(path));
