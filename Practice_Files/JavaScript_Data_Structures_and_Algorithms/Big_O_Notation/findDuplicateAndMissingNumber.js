// Given an array of n elements, find the duplicate number and the missing number

const findDuplicateAndMissingNumber = (N) => {
  const numbers = Array.from(new Set(N)).sort();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] === 1) {
      continue;
    } else {
      return [numbers[i], numbers[i + 1] - 1];
    }
  }
};

console.log(findDuplicateAndMissingNumber([1, 1, 3, 4, 5]));
