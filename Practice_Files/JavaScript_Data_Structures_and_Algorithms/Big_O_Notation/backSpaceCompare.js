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

