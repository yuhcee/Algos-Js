/**
 * **Back Space String Compare**
 *
 * Given two strings `s` and `t`, return *`true` if they are equal when both are typed into empty
 * text editors*. `'#'` means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    return buildString(s) === buildString(t);
};

const buildString = (str) => {
    const characters = [];

    for (let char of str) {
        if (char !== '#') characters.push(char);
        else if (characters.length > 0) {
            characters.pop();
        }
    }

    return characters.join('');
};

const s = 'ab#c',
    t = 'ad#c'; // Output: true;
const s1 = 'ab##',
    t1 = 'c#d#'; // Output: true
const s2 = 'a#c',
    t2 = 'b'; //  Output: false

console.log(backspaceCompare(s, t));
console.log(backspaceCompare(s1, t1));
console.log(backspaceCompare(s2, t2));
