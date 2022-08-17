/**
 * **Naive String Search**
 *
 * Write a function that accepts two parameters, `longStr` and `shortStr` and check if `shortStr` exists
 * in the longStr`.
 *
 * Return *the number of times it existed*.
 */

const naiveSearchString = (longStr, shortStr) => {
    let times = 0;

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (longStr[i + j] !== shortStr[j]) break;
            if (j === shortStr.length - 1) times++;
        }
    }

    return times;
};

console.log(naiveSearchString('lorie loled', 'lol'));
console.log(naiveSearchString('womomgwomg', 'omg'));
