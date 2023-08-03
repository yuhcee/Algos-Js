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
// const letterCombinations = (digits) => {
//     const letters = { 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] };

//     return digits.split('').reduce((prev, digit) => {
//         if (prev.length === 0) return letters[digit];

//         let res = [];

//         for (let l0 of prev) {
//             for (let l1 of letters[digit]) {
//                 res.push(`${l0}${l1}`);
//             }
//         }

//         return res;
//     }, []);
// };

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

/**
 * Function to generate all possible letter combinations for a given string of digits.
 * @param {string} digits - The input string containing digits from 2 to 9.
 * @return {string[]} - An array containing all possible letter combinations.
 */
const letterCombinations = function (digits) {
    // Check if the input is empty or null, return an empty array in that case.
    if (!digits || digits.length === 0) {
        return [];
    }

    // Mapping of digits to corresponding letters on the telephone buttons.
    const digitToLetters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    // Array to store all the generated combinations.
    const combinations = [];

    /**
     * Helper function to perform backtracking and generate letter combinations.
     * @param {string} current - The current combination being generated.
     * @param {number} index - The index of the current digit in the input string.
     */
    const backtrack = (current, index) => {
        // If the current combination has the same length as the input digits,
        // it is a valid combination. Add it to the result array.
        if (index === digits.length) {
            combinations.push(current);
            return;
        }

        // Get the possible letters for the current digit from the mapping.
        const letters = digitToLetters[digits[index]];

        // Recursively generate combinations for the next digit by appending each possible letter.
        for (const letter of letters) {
            backtrack(current + letter, index + 1);
        }
    };

    // Start the backtracking process with an empty string and index 0.
    backtrack('', 0);

    // Return the array containing all the generated combinations.
    return combinations;
};

const digits = '23'; // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits1 = ''; // Output: []
const digits2 = '2'; // Output: ['a', 'b', 'c'];
console.log(letterCombinations(digits));
console.log(letterCombinations(digits1));
console.log(letterCombinations(digits2));
