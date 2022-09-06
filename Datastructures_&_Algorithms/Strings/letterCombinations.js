/**
 * **17. Letter Combinations of a Phone Number**
 *
 * Given a string containing digits from `2-9` inclusive, return all possible letter
 * combinations that the number could represent. Return the answer in **any order**.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that
 * 1 does not map to any letters.
 *
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const letters = { 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] };

    return digits.split('').reduce((prev, digit) => {
        if (prev.length === 0) return letters[digit];

        let res = [];

        for (let l0 of prev) {
            for (let l1 of letters[digit]) {
                res.push(`${l0}${l1}`);
            }
        }

        return res;
    }, []);
};

/* const buildCharacters = () => {
    const graph = {};
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 2; i < 10; i++) {
        if (i !== 7 && i !== 9) graph[i] = chars.splice(0, 3);
        else {
            graph[i] = chars.splice(0, 4);
        }
    }
    return graph;
}; */

const digits = '23'; // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits1 = ''; // Output: []
const digits2 = '2'; // Output: ['a', 'b', 'c'];
console.log(letterCombinations(digits));
console.log(letterCombinations(digits1));
console.log(letterCombinations(digits2));
