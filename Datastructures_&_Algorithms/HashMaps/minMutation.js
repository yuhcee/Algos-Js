/**
 * **433. Minimum Genetic Mutation**
 *
 * A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.
 *
 * Suppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one
 * mutation is defined as one single character changed in the gene string.
 *
 * - For example, `"AACCGGTT" --> "AACCGGTA"` is one mutation.
 *
 * There is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a
 * valid gene string.
 *
 * Given the two gene strings `startGene` and `endGene` and the gene bank `bank`, return *the minimum number of
 * mutations needed to mutate from `startGene` to `endGene`*. If there is no such a mutation, return `-1`.
 *
 * Note that the starting point is assumed to be valid, so it might not be included in the bank.
 *
 * **Constraints:**
 *
 * - `0 <= bank.length <= 10`
 * - `startGene.length == endGene.length == bank[i].length == 8`
 * - `startGene`, `endGene`, and `bank[i]` consist of only the characters `['A', 'C', 'G', 'T']`.
 *
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    // store number of mutations needed to get from start to end in the countArray
    const countArray = [];

    dfs(start, 0, bank);

    // return -1 if no counts exist in countArray
    return countArray.length ? Math.min(...countArray) : -1;

    function dfs(current, count, remBank) {
        if (current === end) countArray.push(count);
        if (!remBank.length) return null;
        else
            remBank.forEach((x, i) => {
                // remove already visited mutations from bank so you don't end up going backwards
                return compare(current, x) && dfs(x, count + 1, [...remBank.slice(0, i), ...remBank.slice(i + 1)]);
            });
    }

    function compare(s1, s2) {
        let count = 0;
        for (let i = 0; i < 8; i++) {
            if (s1[i] !== s2[i]) count++;
        }
        return count === 1;
    }
};

const startGene = 'AACCGGTT',
    endGene = 'AACCGGTA',
    bank = ['AACCGGTA'];
// Output: 1

console.log(minMutation(startGene, endGene, bank));

const startGene1 = 'AACCGGTT',
    endGene1 = 'AAACGGTA',
    bank1 = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
// Output: 2
console.log(minMutation(startGene1, endGene1, bank1));
