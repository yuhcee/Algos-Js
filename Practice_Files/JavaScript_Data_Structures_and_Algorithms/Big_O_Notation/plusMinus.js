/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let len = arr.length,
    positives = 0,
    negatives = 0,
    zeros = 0;

  for (let number of arr) {
    if (number >= 1) {
      positives += 1;
    } else if (number < 0) {
      negatives += 1;
    } else {
      zeros += 1;
    }
  }
  console.log((positives / len).toFixed(6));
  console.log((negatives / len).toFixed(6));
  console.log((zeros / len).toFixed(6));
}

console.log(plusMinus([0, -1, -3, 1, 5, 0, 0]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
