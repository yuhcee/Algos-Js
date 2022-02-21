function response(input: number): Array<string> {
  const result: Array<string> = [];

  for (let i = 0; i < input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(`${i}`);
    }
  }

  return result;
}

console.log(response(15));
