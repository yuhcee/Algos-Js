function frequencyCounter(arrOfStrings) {
    const extractUniqueLetters = arrOfStrings.map((str) => [...new Set(str)].join(''));
    const uniqueLetters = [...new Set(extractUniqueLetters.join(''))];
    const charObject = uniqueLetters.reduce((a, v) => ({ ...a, [v]: 0 }), {});

    for (let letter of arrOfStrings) {
        for (let i = 0; i < letter.length; i++) {
            let char = letter[i];
            charObject[char] = charObject[char] + 1 || 0;
        }
    }
    return Object.keys(charObject).filter((key) => charObject[key] <= 4);
}

console.log(frequencyCounter(['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb']));
