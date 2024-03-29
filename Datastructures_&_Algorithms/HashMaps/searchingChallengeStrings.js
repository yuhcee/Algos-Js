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

// >>>>>>>>>>>>>>>>> Using Map <<<<<<<<<<<<<<<<<<<

const SearchingChallenge = (strArr) => {
    // code goes here
    const map = new Map();

    for (const pairs of strArr) {
        const [key, value] = pairs.split(':');
        map.set(key, map.get(key) ? map.get(key) + Number(value) : Number(value));
    }
    return Array.from(map)
        .sort()
        .map(([key, value]) => {
            if (map.get(key) !== 0) {
                return `${key}:${value}`;
            }
        })
        .filter((val) => val !== undefined)
        .join(',');
};

const strArr = ['X:-1', 'Y:1', 'X:-4', 'B:3', 'X:5'];
// Output: B:3,Y:1
console.log(SearchingChallenge(strArr));

const strArr1 = ['Z:0', 'A:-1'];
console.log(SearchingChallenge(strArr1));
// Output: A:-1

// <=============== Using Object ================>

const SearchingChallenge1 = (strArr) => {
    const map = {};

    for (let element of strArr) {
        const [key, value] = element.split(':');

        map[key] = map[key] !== undefined ? (map[key] += Number(value)) : Number(value);
    }
    const data = Object.keys(map)
        .sort()
        .map((key) => {
            if (map[key] !== 0) {
                return `${key}:${map[key]}`;
            }
        });

    return data.filter((elem) => elem !== undefined).join(',');
};

const strArr2 = ['X:-1', 'Y:1', 'X:-4', 'B:3', 'X:5'];
// Output: B:3,Y:1
console.log(SearchingChallenge1(strArr2));

const strArr3 = ['Z:0', 'A:-1'];
console.log(SearchingChallenge1(strArr3));
// Output: A:-1
