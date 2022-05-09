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
    const letters = buildCharacters();

    return digits.split('').reduce((prev, digit) => {
        if (prev.length === 0) return letters[digit];

        const res = [];

        for (let l0 of prev) {
            for (let l1 of letter[digit]) {
                res.push(`${l0}${l1}`);
            }
        }
        return res;
    }, []);
};

const buildCharacters = () => {
    const graph = {};
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 2; i < 10; i++) {
        if (i !== 7 && i !== 9) graph[i] = chars.splice(0, 3);
        else {
            graph[i] = chars.splice(0, 4);
        }
    }

    return graph;
};
console.log(buildCharacters());
