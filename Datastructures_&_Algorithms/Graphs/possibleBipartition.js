/**
 * **886. Possible Bipartition**
 *
 * We want to split a group of `n` people (labeled from `1` to `n`) into
 * two groups of **any size**. Each person may dislike some other
 * people, and they should not go into the same group.
 *
 * Given the integer `n` and the array `dislikes` where `dislikes[i] =
 * [ai, bi]` indicates that the person labeled `ai` does not like the
 * person labeled `bi`, return *`true` if it is possible to split
 * everyone into two groups in this way*.
 *
 * **Constraints:**
 *
 * - `1 <= n <= 2000`
 * - `0 <= dislikes.length <= 104`
 * - `dislikes[i].length == 2`
 * - `1 <= ai < bi <= n`
 * - All the pairs of `dislikes` are **unique**.
 *
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (n, dislikes) {
    const graph = [];

    for (let i = 0; i < n; i++) {
        graph.push([]);
    }

    for (const [from, to] of dislikes) {
        graph[from - 1].push(to - 1);
        graph[to - 1].push(from - 1);
    }

    const colors = Array(n).fill(0);

    function isValid(i, color) {
        if (colors[i] !== 0) {
            return colors[i] === color;
        }

        colors[i] = color;

        for (const j of graph[i]) {
            if (colors[i] === colors[j] || !isValid(j, -color)) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < n; i++) {
        if (colors[i] === 0 && !isValid(i, 1)) {
            return false;
        }
    }

    return true;
};

const n = 4,
    dislikes = [
        [1, 2],
        [1, 3],
        [2, 4],
    ];
// Output: true
// Explanation: The first group has [1,4], and the second group has [2,3].
console.log(possibleBipartition(n, dislikes));

const n1 = 3,
    dislikes1 = [
        [1, 2],
        [1, 3],
        [2, 3],
    ];
// Output: false
// Explanation: We need at least 3 groups to divide them. We cannot put them in two groups.
console.log(possibleBipartition(n1, dislikes1));
