/**
 * **959. Regions Cut By Slashes**
 *
 * An `n x n` grid is composed of `1 x 1` squares where each `1 x 1` square
 * consists of a `'/'`, `'\'`, or blank space `' '`. These characters divide
 * the square into contiguous regions.
 *
 * Given the grid `grid` represented as a string array, return the number of
 * regions.
 *
 * Note that backslash characters are escaped, so a `'\'` is represented as
 * `'\\'`.
 *
 * **Constraints:**
 *
 * - `n == grid.length == grid[i].length`
 * - `1 <= n <= 30`
 * - `grid[i][j] is either '/', '\', or ' '.`
 *
 * @param {string[]} grid
 * @return {number}
 */
class UnionFind {
    constructor(size) {
        this.parent = Array(size)
            .fill(0)
            .map((_, i) => i);
        this.rank = Array(size).fill(1);
        this.count = size; // Initially, each node is its own component
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
            this.count -= 1; // One less component now
        }
    }

    getCount() {
        return this.count;
    }
}
const regionsBySlashes = function (grid) {
    const n = grid.length;
    const uf = new UnionFind(4 * n * n);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const index = 4 * (i * n + j); // Index of the 4 parts of the cell
            const c = grid[i][j];

            // Connect internal parts of the current cell
            if (c === '/') {
                uf.union(index + 0, index + 3);
                uf.union(index + 1, index + 2);
            } else if (c === '\\') {
                uf.union(index + 0, index + 1);
                uf.union(index + 2, index + 3);
            } else {
                uf.union(index + 0, index + 1);
                uf.union(index + 1, index + 2);
                uf.union(index + 2, index + 3);
            }

            // Connect to the adjacent cells (right and bottom)
            if (j + 1 < n) {
                uf.union(index + 1, 4 * (i * n + (j + 1)) + 3);
            }
            if (i + 1 < n) {
                uf.union(index + 2, 4 * ((i + 1) * n + j) + 0);
            }
        }
    }

    return uf.getCount();
};

const grid = [' /', '/ '];
// Output: 2
console.log(regionsBySlashes(grid));

const grid1 = [' /', '  '];
// Output: 1
console.log(regionsBySlashes(grid1));
