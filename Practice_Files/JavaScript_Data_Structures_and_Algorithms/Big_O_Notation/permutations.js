/**
 * 47. Permutations II
 *
 * Given a collection of numbers, `nums`, that might contain duplicates, return *all possible unique
 * permutations **in any order***.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
    const sorted = nums.sort((a, b) => a - b),
        permutataions = [];

    const recurse = (arr, permutation) => {
        if (!arr.length) return permutataions.push(permutation);

        let previous = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (previous === arr[i]) continue;

            let newArr = arr.slice(0, i).concat(arr.slice(0 + 1));
            recurse(newArr, [...permutation, arr[i]]);

            previous = arr[i];
        }
    };
    recurse(sorted, []);

    return permutataions;
};
