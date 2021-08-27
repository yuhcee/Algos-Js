function validAnagram(string1, string2) {
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
      letterCount[alphabet] - 1;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
