/**
 * **1079. Letter Tile Possibilities**
 *
 * You have `n`  `tiles`, where each tile has one letter `tiles[i]`
 * printed on it.
 *
 * Return *the number of possible non-empty sequences of letters* you
 * can make using the letters printed on those `tiles`.
 *
 * **Constraints:**
 *
 * - `1 <= tiles.length <= 7`
 * - `tiles` consists of uppercase English letters.
 *
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function (tiles) {
    const count = {};
    for (const tile of tiles) {
        count[tile] = (count[tile] || 0) + 1;
    }

    let result = 0;

    const backtrack = () => {
        for (const letter in count) {
            if (count[letter] > 0) {
                result++;
                count[letter]--;
                backtrack();
                count[letter]++;
            }
        }
    };

    backtrack();
    return result;
};

const tiles = 'AAB';
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
console.log(numTilePossibilities(tiles));
