function AdRotation(base10) {
  const binaryNumber = base10.toString(2);
  const flippedNumbers = [];

  for (let number of binaryNumber) {
    if (number == 0) {
      flippedNumbers.push(1);
    } else {
      flippedNumbers.push(0);
    }
  }

  const result = flippedNumbers.join('');
  return parseInt(result, 2);
}

console.log(AdRotation(30));
console.log(AdRotation(50));
