
/**
 * **Frequncy Counter - Strings Array**
 * 
 * Given an **array of strings**, count the number of letters that are less than 2;
 * 
 * Return *the matching letters in an array*.
 * @param {*} arrOfStrings 
 * @returns 
 */
 function frequencyCounter(arrOfStrings) {
    const extractUniqueLetters = arrOfStrings.map((str) => [...new Set(str)].join(''));
    const uniqueLetters = [...new Set(extractUniqueLetters.join(''))];
    const charObject = uniqueLetters.reduce((a, v) => ({ ...a, [v]: 0 }), {});

    for (let letter of arrOfStrings) {
        for (let i = 0; i < letter.length; i++) {
            let char = letter[i];
            charObject[char] = charObject[char] + 1 || charObject[char];
        }
    }
    return Object.keys(charObject).filter((key) => charObject[key] <= 2);
}

console.log(frequencyCounter(['asdf', 'fdas', 'asds', 'dfm', 'dfaa', 'aaaa', 'aabb', 'aaabb']));


