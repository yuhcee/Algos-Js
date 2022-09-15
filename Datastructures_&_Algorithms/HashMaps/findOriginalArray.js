/**
 * **2007. Find Original Array From Doubled Array**
 *
 * An integer array `original` is transformed into a **doubled** array `changed` by appending **twice
 * the value** of every element in `original`, and then randomly **shuffling** the resulting array.
 *
 * Given an array `changed`, return *`original` if changed is a **doubled** array. If `changed` is not a
 * **doubled** array, return an empty array. The elements in `original` may be returned in **any** order.
 *
 * @param {number[]} changed
 * @return {number[]}
 */
const findOriginalArray = function (changed) {
    const result = [];
    const map = new Map();

    changed.sort((a, b) => a - b);

    for (let i = 0; i < changed.length; i++) {
        const currentValue = changed[i];

        if (map.has(currentValue)) {
            const currentValueFrequencyAtMoment = map.get(currentValue);

            if (currentValueFrequencyAtMoment === 1) {
                map.delete(currentValue);
            } else {
                map.set(currentValue, currentValueFrequencyAtMoment - 1);
            }
        } else {
            const doubledValue = currentValue * 2;

            if (map.has(doubledValue)) {
                map.set(doubledValue, map.get(doubledValue) + 1);
            } else {
                map.set(doubledValue, 1);
            }

            result.push(currentValue);
        }
    }

    return map.size > 0 ? [] : result;
};

const changed = [1, 3, 4, 2, 6, 8];
// Output: [1,3,4]
/* Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4]. */

console.log(findOriginalArray(changed));

const changed1 = [6, 3, 0, 1];
// Output: []
// Explanation: changed is not a doubled array.
console.log(findOriginalArray(changed1));

const changed2 = [1];
// Output: []
// Explanation: changed is not a doubled array.
console.log(findOriginalArray(changed2));
