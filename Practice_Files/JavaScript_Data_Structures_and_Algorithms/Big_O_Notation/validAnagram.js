function frequencyCounter(arrOfStrings) {
    const extractUniqueLetters = arrOfStrings.map((str) => [...new Set(str)].join(''));
    const uniqueLetters = [...new Set(extractUniqueLetters.join(''))];
    const result = [];

    for (let str of arrOfStrings) {
        let letterCount = countOccurence(str);
        for (let alphabet of uniqueLetters) {
            if (letterCount[alphabet] === 2) {
                result.push(str);
            }
        }
    }
}

function countOccurence(stringValue) {
    let letterCount = {};

    for (let letter of stringValue) {
        letterCount[letter] = letterCount[letter]++ || 1;
    }
    console.log(letterCount);
    return letterCount;
}

console.log(frequencyCounter(['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb']));
