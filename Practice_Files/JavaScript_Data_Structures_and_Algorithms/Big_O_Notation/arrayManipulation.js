/**
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
  // Write your code here
  // create an array and fill it with 0 n times
  let startingArray = new Array(n).fill(0),
    sum = 0,
    max = 0;
  M = queries.length;
  // the arr should count from 1 to n
  // Then grab the queries arr and loop through
  for (let i = 0; i < M; i++) {
    let a = queries[i][0],
      b = queries[i][1],
      k = queries[i][2];

    startingArray[a - 1] += k;
    startingArray[b] -= k;
  }

  for (let i = 0; i < n; i++) {
    sum += startingArray[i];
    max = Math.max(sum, max);
  }
  // console.log(startingArray);
  // Return the biggest value after you have summed it all up
  return max;
}

// console.log(
//   arrayManipulation(10, [
//     [1, 5, 3],
//     [4, 8, 7],
//     [6, 9, 1],
//   ])
// );
// console.log(
//   arrayManipulation(10, [
//     [1, 2, 100],
//     [2, 5, 100],
//     [3, 4, 100],
//   ])
// );
/* console.log(
  arrayManipulation(10, [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ])
); */
