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
        
};


