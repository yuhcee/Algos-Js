/**
 * Write a function called `collectStrings` which accepts an object and returns an array of all the
 * values in the object that have a typeof string.
 */

const collectStrings = (obj) => {
    let collections = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            collections.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            collections = collections.concat(collectStrings(obj[key]));
        }
    }

    return collections;
};

const obj = {
    stuff: 'foo',
    data: {
        val: {
            thing: {
                info: 'bar',
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: 'baz',
                    },
                },
            },
        },
    },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
