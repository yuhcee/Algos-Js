function minimumNumber(n: number, password: string) {
  let result = 0;
  const hasAnUpperCase = /(?=.*?[A-Z])/;
  const hasALowerCase = /(?=.*?[a-z])/;
  const hasADigit = /(?=.*?[0-9])/;
  const hasASpeChar = /(?=.*?[^\w\s])/;

  if (n >= 6) {
    hasAnUpperCase.test(password) ? result : (result += 1);
    hasALowerCase.test(password) ? result : (result += 1);
    hasADigit.test(password) ? result : (result += 1);
    hasASpeChar.test(password) ? result : (result += 1);
  } else if (n > 3 && n >= 4) {
    hasAnUpperCase.test(password) ? result : (result += 1);
    hasALowerCase.test(password) ? result : (result += 1);
    hasADigit.test(password) ? result : (result += 1);
    hasASpeChar.test(password) ? result : (result += 1);
    if (result == 0) {
      result += 1;
    }
    if (result == 1 && n <= 4) {
      result += 1;
    }
  } else {
    return 6 - n;
  }

  return result;
}

console.log(minimumNumber(4, '1z2!'));
console.log(minimumNumber(4, '1zA!'));
console.log(minimumNumber(5, 'A98#+'));
console.log(minimumNumber(5, '#**#*'));
console.log(minimumNumber(4, '4700'));
console.log(minimumNumber(11, '#HackerRank'));
console.log(minimumNumber(6, 'VkmBAd'));
