/**
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 * 1. STRING_ARRAY strings
 * 2. STRING_ARRAY queries
 */

// write a function that takes a string and returns how many times it occurs in a given arr. Returns the number of occurences of that string or 0 if none.

/* Foreach Method
function getOccurrencesOf(array, value) {
  let count = 0;
  array.forEach((v) => v === value && count++);
  return count;
}
console.log(getOccurrencesOf(array, query)); */

/* Using Reduce Method
const occurences = (value, array) =>
  array.reduce(
    (counter, currentValue) => (value === currentValue ? counter + 1 : counter),
    0
  );
console.log(occurences(query, array)); */

/* Using Filter Method
function occurenceOf(value, array) {
  return array.filter((v) => v === value).length;
}
console.log(occurenceOf(query, array)); */

function matchingStrings(strings, queries) {
  // Write your code here
  const stringObjectCounter = {};
  let output = [];

  for (const item of strings) {
    stringObjectCounter[item] = ++stringObjectCounter[item] || 1;
  }

  for (const query of queries) {
    query in stringObjectCounter
      ? output.push(stringObjectCounter[query])
      : output.push(0);
  }
  return output.join();
}

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

console.log(matchingStrings(strings, queries));


