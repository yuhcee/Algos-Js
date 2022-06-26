/**
 * Have the function `SearchingChallenge(strArr)` read in the strArr parameter containing
 * `key:value` **pairs** where the `key` is a `string` and the `value` is an `integer`. Your
 * program should return a string with **new** `key:value` **pairs separated by a comma** such
 * that each key appears **only once** with the total values summed up.
 *
 * For example: if strArr is `["B:-1", "A:1", "B:3", "A:5"]` then your program should return the string `A:6,B:2`.
 *
 * Your final output string should return the keys in **alphabetical order**. Exclude keys that
 * have a value of `0` after being summed up.
 */

function SearchingChallenge(strArr) {
    // code goes here
    const map = {};

    for (let element of strArr) {
        const [key, value] = element.split(':');

        map[key] = map[key] !== undefined ? (map[key] += Number(value)) : Number(value) || 0;
    }
    const data = Object.keys(map)
        .sort()
        .map((key) => {
            if (map[key] !== 0) {
                return `${key}:${map[key]}`;
            }
        });

    return data.filter((elem) => elem !== undefined).join(',');
}

const strArr = ['X:-1', 'Y:1', 'X:-4', 'B:3', 'X:5'];
// Output: B:3,Y:1

const strArr1 = ['Z:0', 'A:-1'];
// Output: A:-1
