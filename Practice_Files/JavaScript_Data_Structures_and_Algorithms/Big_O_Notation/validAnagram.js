/* function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let letterCount = {};

  for (let letter of string1) {
    !(letter in letterCount)
      ? (letterCount[letter] = 1)
      : letterCount[letter]++;
  }

  for (let alphabet of string2) {
    if (!letterCount[alphabet]) {
      return false;
    } else {
      letterCount[alphabet] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('a', 'a')); */

function frequencyCounter(arrOrStrings) {
  const extractUniqueLetters = arrOrStrings.map((str) => Array.from(new Set(str)).join(''));
  const uniqueLetters = Array.from(new Set(extractUniqueLetters.join('')));
  const result = [];
  
  for(let str of arrOrStrings ) {
    let letterCount = countOccurence(str)
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
    !(letter in letterCount)
      ? (letterCount[letter] = 1)
      : letterCount[letter]++;
  }
  return letterCount;
}

console.log(
  frequencyCounter([
    'asdf',
    'fdas',
    'asds',
    'dfm',
    'dfaa',
    'aaaa',
    'aabb',
    'aaabb',
  ])
);


class Sum {
  constructor() {
    this.value = 0;
  }
  sum(value) {
    this.value = this.value + value;
    return this;
  }
}

const sum = new Sum()

console.log(sum.sum(1).sum(2).sum(3))